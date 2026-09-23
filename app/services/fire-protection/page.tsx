import { ServiceLayout } from "@/components/services/ServiceLayout";
import { fireProtection } from "@/lib/service-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Protection Systems | eSmart Fetch",
  description:
    "eSmart Fetch provides fire protection, fire detection, alarm and safety solutions for businesses, institutions and critical facilities.",
  alternates: {
    canonical: "/services/fire-protection",
  },
};

export default function FireProtectionPage() {
  return <ServiceLayout service={fireProtection} />;
}