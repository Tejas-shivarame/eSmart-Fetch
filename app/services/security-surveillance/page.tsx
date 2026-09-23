import { ServiceLayout } from "@/components/services/ServiceLayout";
import { securitySurveillance } from "@/lib/service-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Surveillance Solutions | eSmart Fetch",
  description:
    "eSmart Fetch provides security and surveillance solutions including monitoring and integrated protection systems for businesses and institutions.",
  alternates: {
    canonical: "/services/security-surveillance",
  },
};



export default function SecuritySurveillancePage() {
  return <ServiceLayout service={securitySurveillance} />;
}