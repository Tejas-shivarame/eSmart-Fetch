"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { GlowCard } from "@/components/ui/GlowCard";
import { ParticleField } from "@/components/ui/ParticleField";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import TrustedBrands from "@/components/services/TrustedBrands";

import { ServiceHero } from "./ServiceHero";
import { ServiceOverview } from "./ServiceOverview";
import { ServiceFeatures } from "./ServiceFeatures";
import { ServiceBenefits } from "./ServiceBenefits";
import { ServiceIndustries } from "./ServiceIndustries";
import { ServiceProcess } from "./ServiceProcess";
import { ServiceCTA } from "./ServiceCTA";
import ProductsSection from "./ProductsSection";

interface Props {
  service: ServiceData;
}

export interface Brand {
  name: string;
  logo: string;
}

export interface Product {
  title: string;
  image: string;
  description: string;
  features: string[];
}

export interface Feature {
  featurestitle: string;
  featuresdescription: string;
}

export interface ServiceData {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  heroImage?: string;
  overview: string;

  features: Feature[];
    industriesSection: {
    industriesbadge: string;
    industriestitle: string;
    industriesdescription: string;
    industriescardDescription: string;
  };

  industries: {
    subtitles: string;
    descriptions: string;
  }[];
  benefits: {
    subtitle: string;
    description: string;
  }[];

  brands?: Brand[];

  productBadge?: string;
  productTitle?: string;
  productDescription?: string;
  products?: Product[];


  processSection: {
  processbadge: string;
  processtitle: string;
  processdescription: string;
};

process: {
  processtitles: string;
  processdescriptions: string;
}[];

  ctaTitle: string;
  ctaDescription: string;
}

export function ServiceLayout({ service }: Props) {
  return (
    <main className="relative overflow-hidden bg-base text-accent-white">

    <ServiceHero service={service} />

    <ServiceOverview service={service} />

    <ServiceFeatures service={service} />

    <ServiceBenefits service={service} />

    <TrustedBrands brands={service.brands} />

    {service.products?.length ? (
      <ProductsSection
        badge={service.productBadge ?? "Our Products"}
        title={service.productTitle ?? "Our Products"}
        description={service.productDescription ?? ""}
        products={service.products}
      />
    ) : null}

    <ServiceIndustries service={service} />

    <ServiceProcess service={service} />

    <ServiceCTA service={service} />
</main>
  )
}