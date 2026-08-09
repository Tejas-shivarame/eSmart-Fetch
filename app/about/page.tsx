import type { Metadata } from "next";

import { Hero } from "@/sections/Hero";
import { HERO_DATA } from "@/sections/hero-data";

import { OurMission } from "@/sections/about/OurMission";
import { OurVision } from "@/sections/about/OurVision";
import { ValuePillars } from "@/sections/about/ValuePillars";
import { ServicesOverview } from "@/sections/about/ServicesOverview";
import { AboutCTA } from "@/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "About — Smart Fetch",
  description:
    "eSmart Fetch integrates hardware, software, and human expertise into security, fire safety, and audiovisual systems for India's leading enterprises.",
  openGraph: {
    title: "About — eSmart Fetch",
    description:
      "eSmart Fetch integrates hardware, software, and human expertise into security, fire safety, and audiovisual systems for India's leading enterprises.",
    url: "https://smart-fetch.com/about",
    siteName: "eSmart Fetch",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <Hero {...HERO_DATA.about} />

      <OurMission />
      <OurVision />
      <ValuePillars />
      <ServicesOverview />
      <AboutCTA />
    </main>
  );
}