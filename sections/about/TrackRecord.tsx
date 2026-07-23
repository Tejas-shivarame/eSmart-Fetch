"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/GlowCard";
import { StatBlock } from "@/components/ui/StatBlock";
import { TRACK_RECORD } from "@/lib/constants";

export function TrackRecord() {
  return (
    <section className="relative px-6 pb-section">
      <div className="mx-auto max-w-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <GlowCard accent="blue" tilt={false}>
            <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
              {TRACK_RECORD.map((stat) => (
                <StatBlock key={stat.label} {...stat} />
              ))}
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
