import { Hero } from "@/sections/Hero";
import { FeatureShowcase } from "@/sections/FeatureShowcase";
import { FeatureCards } from "@/sections/FeatureCards";
import { LiveInfrastructure } from "@/sections/LiveInfrastructure";
import { CTASection } from "@/sections/CTASection";
import { Footer } from "@/sections/Footer";
import { TrustedBy } from "@/sections/TrustedBy";
import { TRUSTED_COMPANIES } from "@/lib/constants";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <TrustedBy  logos={TRUSTED_COMPANIES} />    
      <FeatureShowcase />
      <FeatureCards />
      <LiveInfrastructure />
      <CTASection />
      <Footer />
    </main>
  );
}