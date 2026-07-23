import type { Metadata } from "next";
import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
// import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Smart Fetch — Critical Infrastructure for the Next Era",
  description:
    "Modern enterprise infrastructure powered by AI. Ultra-fast, secure, scalable data pipelines for businesses worldwide.",
  metadataBase: new URL("https://smart-fetch.com"),
  openGraph: {
    title: "Smart Fetch — Critical Infrastructure for the Next Era",
    description:
      "Modern enterprise infrastructure powered by AI. Ultra-fast, secure, scalable data pipelines for businesses worldwide.",
    url: "https://smart-fetch.com",
    siteName: "Smart Fetch",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Fetch — Critical Infrastructure for the Next Era",
    description:
      "Modern enterprise infrastructure powered by AI. Ultra-fast, secure, scalable data pipelines for businesses worldwide.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <WhatsAppButton /> */}
      </body>
    </html>
  );
}
