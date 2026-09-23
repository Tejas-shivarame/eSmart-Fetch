import { ServiceLayout } from "@/components/services/ServiceLayout";
import { paintingPrinting} from "@/lib/service-data";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Painting & Printing Services | eSmart Fetch",
  description:
    "eSmart Fetch provides professional painting and printing solutions for commercial and institutional projects.",
  alternates: {
    canonical: "/services/painting-printing",
  },
};

export default function SecuritySurveillancePage() {
  return <ServiceLayout service={paintingPrinting} />;
}