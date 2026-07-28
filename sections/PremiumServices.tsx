"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { PREMIUM_SERVICES } from "@/lib/constants";

export function PremiumServices() {
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto max-w-container">
        <SectionHeading
          eyebrow="Our Expertise"
          title="Premium Service"
          description="We deliver comprehensive infrastructure and facility management solutions with a focus on quality, reliability, and excellence."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {PREMIUM_SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={service.href} className="block h-full">
                <GlowCard accent={service.accent} className="h-full">
                  <span
                    className={
                      service.accent === "purple"
                        ? "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-purple-blue"
                        : "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-purple-blue"
                    }
                  >
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </span>
                  <h4 className="mt-6 font-display text-xl font-medium text-accent-white">
                    {service.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-accent-gray">
                    {service.description}
                  </p>
                </GlowCard>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}