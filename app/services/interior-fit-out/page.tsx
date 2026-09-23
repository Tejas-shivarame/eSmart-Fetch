import { ServiceLayout } from "@/components/services/ServiceLayout";
import { interiorFitOut } from "@/lib/service-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior & Fit-Out Solutions | eSmart Fetch",
  description:
    "eSmart Fetch provides interior and fit-out solutions for commercial, institutional and professional environments.",
  alternates: {
    canonical: "/services/interior-fit-out",
  },
};

export default function InteriorFitOutPage() {
  return <ServiceLayout service={interiorFitOut} />;
}