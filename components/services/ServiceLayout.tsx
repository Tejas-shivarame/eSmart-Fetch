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
import { fireProtectionBrands } from "@/components/data/fireProtection";

export interface ServiceData {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  overview: string;

  features: string[];
  industries: string[];
  benefits: string[];
  process: string[];

  ctaTitle: string;
  ctaDescription: string;
}

interface Props {
  service: ServiceData;
}
import { ServiceHero } from "./ServiceHero";
import { ServiceOverview } from "./ServiceOverview";
import { ServiceFeatures } from "./ServiceFeatures";
import { ServiceBenefits } from "./ServiceBenefits";
import { ServiceIndustries } from "./ServiceIndustries";
import { ServiceProcess } from "./ServiceProcess";
import { ServiceCTA } from "./ServiceCTA";
import  ProductsSection  from "./ProductsSection";
import  TrustedBrandsSection  from "./TrustedBrandsSection"


export interface ServiceData {
  badge: string;
  title: string;
  highlight: string;
  description: string;

  overview: string;

  features: string[];
  benefits: string[];
  industries: string[];
  process: string[];

  ctaTitle: string;
  ctaDescription: string;
}

interface Props {
  service: ServiceData;
}


export function ServiceLayout({ service }: Props) {
  return (
    <main className="relative overflow-hidden bg-base text-accent-white">
<ServiceHero service={service} />

<ServiceOverview service={service} />

<ServiceFeatures service={service} />

<ServiceBenefits service={service} />

<TrustedBrandsSection brands={fireProtectionBrands} />

<ProductsSection />

<ServiceIndustries service={service} />

<ServiceProcess service={service} />

<ServiceCTA service={service} />
      {/* Background Effects */}
      <AnimatedGrid />
      <ParticleField />

      <GlowBlob
        color="purple"
        className="left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2"
      />

      <GlowBlob
        color="blue"
        className="right-0 bottom-0 h-[320px] w-[320px]"
      />

      {/* ================= HERO ================= */}

      <section className="relative px-6 pt-36 pb-24">
        <div className="mx-auto max-w-container text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-base-raised px-5 py-2 text-sm">

              <ShieldCheck className="h-4 w-4 text-accent-purple" />

              {service.badge}

            </span>

            <h1 className="mt-8 font-display text-5xl font-bold leading-tight lg:text-7xl">

              {service.title}

              <span className="block bg-gradient-purple-blue bg-clip-text text-transparent">

                {service.highlight}

              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-accent-gray">

              {service.description}

            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Button variant="primary" href="/contact">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button variant="secondary">
                Download Brochure
              </Button>

            </div>

          </motion.div>

        </div>
      </section>

      {/* ================= OVERVIEW ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto grid max-w-container gap-12 lg:grid-cols-2">

          <div>

            <h2 className="font-display text-4xl font-bold">

              Service Overview

            </h2>

            <p className="mt-6 text-lg leading-8 text-accent-gray">

              {service.overview}

            </p>

          </div>

          <GlowCard accent="purple">

            <div className="flex items-start gap-4">

              <ShieldCheck className="mt-1 h-10 w-10 text-accent-blue" />

              <div>

                <h3 className="font-display text-2xl font-semibold">

                  Trusted Engineering Excellence

                </h3>

                <p className="mt-3 text-accent-gray">

                  We combine engineering expertise,
                  premium-quality products,
                  certified professionals,
                  and long-term maintenance support
                  to deliver reliable infrastructure solutions.

                </p>

              </div>

            </div>

          </GlowCard>

        </div>

      </section>

            {/* ================= FEATURES ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-container">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-center font-display text-4xl font-bold">
              Our Services
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-accent-gray">
              We deliver comprehensive engineering services with
              high-quality products, certified installation, and
              long-term support.
            </p>

          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {service.features.map((feature, index) => (

              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .45,
                  delay: index * .08,
                }}
              >

                <GlowCard
                  accent={index % 2 === 0 ? "purple" : "blue"}
                  className="h-full"
                >

                  <CheckCircle2 className="h-8 w-8 text-accent-blue" />

                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {feature}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-accent-gray">

                    Delivered using industry best practices,
                    premium-quality products,
                    and experienced engineering professionals.

                  </p>

                </GlowCard>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= BENEFITS ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-container">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >

            <h2 className="text-center font-display text-4xl font-bold">
              Why Choose Us
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-accent-gray">
              We focus on delivering dependable,
              scalable,
              and future-ready engineering solutions.
            </p>

          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {service.benefits.map((benefit, index) => (

              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: .95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: .4,
                  delay: index * .08,
                }}
              >

                <GlowCard
                  accent={index % 2 === 0 ? "blue" : "purple"}
                  className="h-full"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-purple-blue">

                      <ShieldCheck className="h-6 w-6 text-white" />

                    </div>

                    <h3 className="font-display text-xl font-semibold">

                      {benefit}

                    </h3>

                  </div>

                  <p className="mt-5 text-sm leading-7 text-accent-gray">

                    Every project is executed with precision,
                    safety,
                    quality assurance,
                    and dedicated post-installation support.

                  </p>

                </GlowCard>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

            {/* ================= INDUSTRIES ================= */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-container">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center font-display text-4xl font-bold">
              Industries We Serve
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-accent-gray">
              Trusted by organizations across diverse industries with
              reliable engineering and infrastructure solutions.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {service.industries.map((industry, index) => (

              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .4,
                  delay: index * .08,
                }}
              >

                <GlowCard
                  accent={index % 2 === 0 ? "purple" : "blue"}
                  className="h-full"
                >

                  <Building2 className="h-10 w-10 text-accent-purple" />

                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {industry}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-accent-gray">
                    Customized engineering and infrastructure solutions
                    tailored to the operational requirements of the
                    {` ${industry.toLowerCase()}`} sector.
                  </p>

                </GlowCard>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-container">

          <h2 className="text-center font-display text-4xl font-bold">
            Our Working Process
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {service.process.map((step, index) => (

              <motion.div
                key={step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .45,
                  delay: index * .08,
                }}
              >

                <GlowCard className="h-full">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-purple-blue font-display text-xl font-bold text-white">
                    {index + 1}
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold">
                    {step}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-accent-gray">
                    Every phase is executed by experienced professionals
                    following quality standards and industry best practices.
                  </p>

                </GlowCard>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}

        <section className="px-6 py-24">
        <div className="mx-auto max-w-container">

            <div className="group rounded-[32px] border border-border bg-base-card p-12 text-center transition-all duration-500 hover:border-accent-purple hover:shadow-[0_0_20px_rgba(155,92,255,0.35)]">

            <h2 className="font-display text-4xl font-bold">
                {service.ctaTitle}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-accent-gray">
                {service.ctaDescription}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

                <Button variant="primary" href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Link
                href="/contact"
                className="rounded-full border border-border px-6 py-3 transition-all hover:border-accent-purple hover:bg-white/5"
                >
                Contact Us
                </Link>

            </div>

            </div>

        </div>
        </section>

    </main>
  );
}

