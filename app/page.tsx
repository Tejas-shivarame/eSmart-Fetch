import { Hero } from "@/sections/Hero";
import { TrustedBy } from "@/sections/TrustedBy";
import { TRUSTED_COMPANIES } from "@/lib/constants";
import { PremiumServices } from "@/sections/PremiumServices";
import { QualityDrive } from "@/sections/QualityDrive"; 

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <TrustedBy logos={TRUSTED_COMPANIES} />  
      <QualityDrive /> 
      <PremiumServices /> 
    </main>
  );
}