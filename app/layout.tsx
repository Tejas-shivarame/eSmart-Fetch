import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Assistant } from "@/components/AIAssistant/Assistant";

export const metadata: Metadata = {
  title: "eSmart Fetch Private Limited | Fire Safety, Security & Technology Solutions",
  description:
  "eSmart Fetch Private Limited provides fire safety, security and surveillance, audio-visual, IT infrastructure, interior fit-out and technical solutions for businesses and institutions.",
  icons: {
    icon: "/images/eSmart-Fetch-logo-Favi-icon.png",
  },

  metadataBase: new URL("https://esmartfetch.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "eSmart Fetch Private Limited | Fire Safety, Security & Technology Solutions",
    description:
      "Fire safety, security, surveillance, audio-visual, IT infrastructure and technical solutions by eSmart Fetch Private Limited.",
    url: "https://esmartfetch.com/",
    siteName: "eSmart Fetch",
    type: "website",
    images: [
      {
        url: "/images/eSmart-Fetch-logo-Favi-icon.png",
        width: 512,
        height: 512,
        alt: "eSmart Fetch",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "eSmart Fetch | Fire Safety, Security & Technology Solutions",
    description:
      "Fire safety, security, surveillance, AV, IT infrastructure and technical solutions by eSmart Fetch.",
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Assistant />
          {children}
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}