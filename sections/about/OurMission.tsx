"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { MISSION_POINTS } from "@/lib/constants";

/** Abstract "systems at work" visual standing in for an office photograph. */
function MissionVisual() {
  const bars = [62, 40, 78, 52, 30, 68, 45];
  return (
    <div className="relative flex h-full min-h-[100px] w-full items-end overflow-hidden rounded-card border border-white/[0.08] bg-base-raised p-8 align-center">
      <GlowBlob color="blue" className="right-0 top-0 h-56 w-56" />
      <div className="relative z-10 flex h-40 w-full items-end gap-3">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: "easeOut" }}
            className="flex-1 rounded-t-md"
            style={{
              background:
                i % 3 === 0
                  ? "linear-gradient(180deg, #9B5CFF, transparent)"
                  : "linear-gradient(180deg, #22D3EE, transparent)",
              opacity: 0.85,
            }}
          />
        ))}
      </div>
      <span className="absolute left-8 top-8 z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
        <ShieldCheck className="h-5 w-5" />
      </span>
    </div>
  );
}

export function OurMission() {
  return (
    <section className="relative px-6 pb-section">
      <div className="mx-auto grid max-w-container items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <MissionVisual />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="block h-1 w-14 rounded-full bg-gradient-purple-blue" />
          <h2 className="mt-6 font-display text-3xl font-medium text-accent-white sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 max-w-lg text-accent-gray">
            To provide state-of-the-art security and surveillance solutions
            that empower enterprises to operate with confidence, anywhere in
            the country.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {MISSION_POINTS.map((point) => (
              <li key={point.text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent-purple/15 text-accent-purple">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
                <span className="text-accent-white/90">{point.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
