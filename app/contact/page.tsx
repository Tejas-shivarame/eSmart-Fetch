import type { Metadata } from "next";

import { Hero } from "@/sections/Hero";
import { HERO_DATA } from "@/sections/hero-data";

import { ContactForm } from "@/sections/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Smart Fetch",
  description:
    "Get in touch with eSmart Fetch for security, fire safety, audio-video, and IT infrastructure projects — call, email, or send a message directly.",
  openGraph: {
    title: "Contact — Smart Fetch",
    description:
      "Get in touch with eSmart Fetch for security, fire safety, audio-video, and IT infrastructure projects — call, email, or send a message directly.",
    url: "https://smart-fetch.com/contact",
    siteName: "Smart Fetch",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      <Hero {...HERO_DATA.contact} />

      <ContactForm />
    </main>
  );
}