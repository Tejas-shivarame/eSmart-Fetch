import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { FeatureShowcase } from "@/sections/FeatureShowcase";
import { FeatureCards } from "@/sections/FeatureCards";
import { LiveInfrastructure } from "@/sections/LiveInfrastructure";
import { CTASection } from "@/sections/CTASection";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <FeatureShowcase />
      <FeatureCards />
      <LiveInfrastructure />
      <CTASection />
      <Footer />
    </main>
  );
}
