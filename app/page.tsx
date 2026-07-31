import { Hero } from "@/sections/Hero";
import { TrustedBy } from "@/sections/TrustedBy";
import { TRUSTED_COMPANIES } from "@/lib/constants";
import { PremiumServices } from "@/sections/PremiumServices";
import { QualityDrive } from "@/sections/QualityDrive"; 
import { AboutSection } from "@/sections/about/AboutSection";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <AboutSection /> 
      <QualityDrive />       
      <PremiumServices /> 
      <TrustedBy logos={TRUSTED_COMPANIES} /> 
    </main>
  );
}