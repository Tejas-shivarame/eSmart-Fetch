import type { Metadata } from "next";
import { Navbar } from "@/sections/Navbar";
import { AboutHero } from "@/sections/about/AboutHero";
import { OurMission } from "@/sections/about/OurMission";
import { OurVision } from "@/sections/about/OurVision";
import { TrackRecord } from "@/sections/about/TrackRecord";
import { ValuePillars } from "@/sections/about/ValuePillars";
import { ServicesOverview } from "@/sections/about/ServicesOverview";
import { AboutCTA } from "@/sections/about/AboutCTA";
import { Footer } from "@/sections/Footer";

export const metadata: Metadata = {
  title: "About — Smart Fetch",
  description:
    "Smart Fetch integrates hardware, software, and human expertise into security, fire safety, and audiovisual systems for India's leading enterprises.",
  openGraph: {
    title: "About — Smart Fetch",
    description:
      "Smart Fetch integrates hardware, software, and human expertise into security, fire safety, and audiovisual systems for India's leading enterprises.",
    url: "https://smart-fetch.com/about",
    siteName: "Smart Fetch",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <AboutHero />
      <OurMission />
      <OurVision />
      <TrackRecord />
      <ValuePillars />
      <ServicesOverview />
      <AboutCTA />
      <Footer />
    </main>
  );
}
