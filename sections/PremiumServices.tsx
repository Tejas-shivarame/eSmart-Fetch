"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PREMIUM_SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={service.href}
                  className="group block h-full"
                >
                  <GlowCard
                    accent={service.accent}
                    className="relative flex h-full flex-col overflow-hidden transition-all duration-300 group-hover:-translate-y-2"
                  >
                    {/* Arrow */}
                    <div className="absolute right-6 bottom-6">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-accent-blue group-hover:bg-accent-blue">
                        <ArrowUpRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-purple-blue">
                      <Icon
                        className="h-6 w-6 text-white"
                        strokeWidth={2}
                      />
                    </div>

                    {/* Title */}
                    <h4 className="mt-6 pr-12 font-display text-xl font-medium text-accent-white transition-colors duration-300 group-hover:text-accent-blue">
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="mt-3 flex-grow text-sm leading-7 text-accent-gray">
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