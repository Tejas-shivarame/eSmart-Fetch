import type { Metadata } from "next";
import { Navbar } from "@/sections/Navbar";
import { ServicesHero } from "@/sections/services/ServicesHero";
import { ServicesTabs } from "@/sections/services/ServicesTabs";
import { ServicesCTA } from "@/sections/services/ServicesCTA";

import { Footer } from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Services — Smart Fetch",
  description:
    "Engineering & services plus material supply — electrical, HVAC, fire & life safety, security, audio-video, and IT infrastructure, delivered turnkey.",
  openGraph: {
    title: "Services — Smart Fetch",
    description:
      "Engineering & services plus material supply — electrical, HVAC, fire & life safety, security, audio-video, and IT infrastructure, delivered turnkey.",
    url: "https://smart-fetch.com/services",
    siteName: "Smart Fetch",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <ServicesHero />
      <ServicesTabs />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
