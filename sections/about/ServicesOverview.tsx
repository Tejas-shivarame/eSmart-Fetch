"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { SERVICES } from "@/lib/constants";

export function ServicesOverview() {
  return (
    <section className="relative px-6 py-section">
      <div className="mx-auto max-w-container">
        <SectionHeading
          eyebrow="What We Do"
          title="Four Disciplines, One Team"
          description="Every engagement draws on the same in-house bench of engineers — no subcontracted handoffs between systems."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <GlowCard accent={service.accent} className="h-full">
                  <span
                    className={
                      service.accent === "purple"
                        ? "flex h-11 w-11 items-center justify-center rounded-xl bg-accent-purple/10 text-accent-purple"
                        : "flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue"
                    }
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h4 className="mt-6 font-display text-lg font-medium text-accent-white">
                    {service.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-accent-gray">
                    {service.description}
                  </p>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
