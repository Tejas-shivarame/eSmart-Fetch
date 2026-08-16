import { NextRequest, NextResponse } from "next/server";

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;
const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
const GRAPH_API_VERSION = process.env.WHATSAPP_GRAPH_API_VERSION || "v23.0";

/**

* Meta Webhook Verification
*
* Meta sends a GET request when you configure the webhook.
  */
  export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

const mode = searchParams.get("hub.mode");
const token = searchParams.get("hub.verify_token");
const challenge = searchParams.get("hub.challenge");

if (
mode === "subscribe" &&
token &&
VERIFY_TOKEN &&
token === VERIFY_TOKEN
) {
return new Response(challenge, {
status: 200,
headers: {
"Content-Type": "text/plain",
},
});
}

return NextResponse.json(
{ error: "Verification failed" },
{ status: 403 }
);
}

/**

* WhatsApp Incoming Messages
*
* Meta sends POST requests here whenever a WhatsApp event occurs.
  */
  export async function POST(req: NextRequest) {
  try {
  const body = await req.json();

  console.log(
  "WhatsApp webhook received:",
  JSON.stringify(body, null, 2)
  );

  if (body.object !== "whatsapp_business_account") {
  return NextResponse.json(
  { error: "Invalid webhook object" },
  { status: 400 }
  );
  }

  const entry = body.entry?.[0];
  const changes = entry?.changes?.[0];
  const value = changes?.value;

  const message = value?.messages?.[0];

  // Ignore status updates and other WhatsApp events.
  if (!message) {
  return NextResponse.json({ success: true });
  }

  const senderPhone = message.from;
  const messageType = message.type;

  let incomingText = "";

  if (messageType === "text") {
  incomingText = message.text?.body || "";
  }

  if (!incomingText) {
  return NextResponse.json({ success: true });
  }

  console.log("Incoming WhatsApp message:", {
  from: senderPhone,
  message: incomingText,
  });

  /**

  * Temporary automatic response.
  *
  * Later we can replace this section with your Groq AI call.
    */
    const reply =
    "Hello! Thank you for contacting eSmart Fetch. How can we assist you today?";

  if (!ACCESS_TOKEN || !PHONE_NUMBER_ID) {
  console.error(
  "Missing WHATSAPP_ACCESS_TOKEN or WHATSAPP_PHONE_NUMBER_ID"
  );

  return NextResponse.json(
  { error: "WhatsApp configuration is missing" },
  { status: 500 }
  );
  }

  const response = await fetch(
  `https://graph.facebook.com/${GRAPH_API_VERSION}/${PHONE_NUMBER_ID}/messages`,
  {
  method: "POST",
  headers: {
  Authorization: `Bearer ${ACCESS_TOKEN}`,
  "Content-Type": "application/json",
  },
  body: JSON.stringify({
  messaging_product: "whatsapp",
  recipient_type: "individual",
  to: senderPhone,
  type: "text",
  text: {
  preview_url: false,
  body: reply,
  },
  }),
  }
  );

  const result = await response.json();

  if (!response.ok) {
  console.error("WhatsApp API error:", result);

  return NextResponse.json(
  {
  error: "Failed to send WhatsApp response",
  details: result,
  },
  { status: response.status }
  );
  }

  console.log("WhatsApp response sent:", result);

  return NextResponse.json({
  success: true,
  });
  } catch (error) {
  console.error("WhatsApp webhook error:", error);

  return NextResponse.json(
  { error: "Internal server error" },
  { status: 500 }
  );
  }
  }
