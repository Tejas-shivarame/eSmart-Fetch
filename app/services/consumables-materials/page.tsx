import { ServiceLayout } from "@/components/services/ServiceLayout";
import { consumablesMaterials } from "@/lib/service-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Consumables & Materials | eSmart Fetch",
  description:
    "eSmart Fetch supplies technical consumables and materials supporting infrastructure, security, fire safety and technology projects.",
  alternates: {
    canonical: "/services/consumables-materials",
  },
};

export default function AudioVisualSolutionsPage() {
  return <ServiceLayout service={consumablesMaterials} />;
}