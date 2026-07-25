"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/GlowCard";
import { PREMIUM_SERVICES  } from "@/lib/constants";

export function FeatureCards() {
  return (
    <section className="relative px-6 pb-section">
      <div className="mx-auto grid max-w-container gap-6 sm:grid-cols-3">
        {PREMIUM_SERVICES .map((premium, i) => {
          const Icon = premium.icon;
          return (
            <motion.div
              key={premium.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlowCard accent={premium.accent} className="h-full">
                <span
                  className={
                    premium.accent === "purple"
                      ? "flex h-11 w-11 items-center justify-center rounded-xl bg-accent-purple/10 text-accent-purple"
                      : "flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue"
                  }
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h4 className="mt-6 font-display text-xl font-medium text-white/90">
                  {premium.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  {premium.description}
                </p>
              </GlowCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
