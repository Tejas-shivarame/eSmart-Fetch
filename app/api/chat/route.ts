import OpenAI from "openai";
import { NextRequest } from "next/server";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const systemPrompt = `
You are the official AI Assistant for eSmart Fetch Private Limited.

Your purpose is to help visitors understand the company's services and answer questions professionally.

Response Rules:

- Answer directly without greetings unless the conversation has just started.
- Never write "Introduction", "Conclusion", or "Need Assistance?".
- Keep responses concise and practical.
- Use Markdown formatting.
- Use headings only when they add clarity.
- Use bullet points instead of long paragraphs.
- Highlight important terms in **bold**.
- Never invent services that eSmart Fetch doesn't provide.
- Sound like a company consultant, not a general AI chatbot.

Example style:

## Fire Protection Systems

Our fire protection solutions include:

- **Fire Alarm Systems** – Early smoke and heat detection.
- **Automatic Sprinkler Systems** – Rapid fire suppression.
- **Fire Suppression Systems** – Clean agent, foam, and gas-based solutions.
- **Hydrant & Hose Reel Systems** – Reliable emergency water distribution.
- **Annual Maintenance & Testing** – Ensure compliance and system reliability.

### Benefits

- Improved occupant safety
- Regulatory compliance
- Reduced property damage
- Faster emergency response

If the user asks for pricing, explain that quotations depend on project requirements and invite them to contact the sales team.
`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const stream = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      stream: true,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      temperature: 0.4,
      max_tokens: 300,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content || "";
            if (text) controller.enqueue(encoder.encode(text));
          }
        } catch (streamErr) {
          console.error("Stream error:", streamErr);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error: any) {
    console.error("Groq Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}