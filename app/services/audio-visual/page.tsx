import { ServiceLayout } from "@/components/services/ServiceLayout";
import { audioVisualSolutions } from "@/lib/service-data";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Audio Visual Solutions | eSmart Fetch",
  description:
    "eSmart Fetch provides professional audio-visual integration solutions for businesses, institutions, meeting spaces and critical environments.",
  alternates: {
    canonical: "/services/audio-visual",
  },
};

export default function AudioVisualSolutionsPage() {
  return <ServiceLayout service={audioVisualSolutions} />;
}