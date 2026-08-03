import { Hero } from "@/sections/Hero";
import { HERO_DATA } from "@/sections/hero-data";
import { AboutSection } from "@/sections/about/AboutSection";
import { QualityDrive } from "@/sections/QualityDrive";
import { PremiumServices } from "@/sections/PremiumServices";
import { TrustedBy } from "@/sections/TrustedBy";
import { HomeContactCTA } from "@/sections/HomeContactCTA";
import { TRUSTED_COMPANIES } from "@/lib/constants";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero {...HERO_DATA.home} />  
      <AboutSection />
      <QualityDrive />
      <PremiumServices />
      <TrustedBy logos={TRUSTED_COMPANIES} />
      <HomeContactCTA /> 
    </main>
  );
}