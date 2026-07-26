import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Assistant } from "@/components/AIAssistant/Assistant";
// import { ChatWidget } from "@/components/AIAssistant/ChatWidget";

export const metadata: Metadata = {
  title: "eSmart Fetch | Infrastructure & Technology Solutions",
  description: "eSmart Fetch-integrates hardware, software, and human expertise into security, fire safety, and audiovisual systems for India's leading enterprises.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
           <Assistant />  
          {/* <ChatWidget />  */}
        </ThemeProvider>
      </body>
    </html>
  );
}