"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { VALUE_PILLARS } from "@/lib/constants";

export function ValuePillars() {
  return (
    <section className="relative overflow-hidden bg-base-raised px-6 py-section">
      <div className="mx-auto max-w-container">
        <SectionHeading
          eyebrow="Why Smart Fetch"
          title="Why Smart Fetch?"
          description="We source, trade, and execute Security, Fire Safety & Audio Video systems on a turnkey basis."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {VALUE_PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <GlowCard accent={pillar.accent} className="h-full">
                  <div className="flex items-start gap-4">
                    <span
                      className={
                        pillar.accent === "purple"
                          ? "flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent-purple/10 text-accent-purple"
                          : "flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue"
                      }
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <h4 className="font-display text-xl font-medium text-accent-white">
                        {pillar.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-accent-gray">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
