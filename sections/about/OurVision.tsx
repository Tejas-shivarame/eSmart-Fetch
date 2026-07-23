"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { GlowBlob } from "@/components/ui/GlowBlob";

/** Abstract glowing network-of-nodes globe, standing in for a satellite photo. */
function GlobalBenchmarkVisual() {
  const dots = [
    [20, 35], [30, 55], [45, 25], [55, 60], [65, 40],
    [75, 55], [35, 70], [60, 20], [25, 20], [80, 30],
  ];
  return (
    <div className="relative flex h-full min-h-[320px] w-full items-center justify-center overflow-hidden rounded-card border border-white/[0.08] bg-base-raised">
      <GlowBlob color="purple" className="h-72 w-72 animate-float" />
      <svg aria-hidden viewBox="0 0 100 100" className="absolute h-4/5 w-4/5 opacity-80">
        <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(34,211,238,0.25)" strokeWidth="0.4" />
        <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="rgba(34,211,238,0.2)" strokeWidth="0.3" />
        <ellipse cx="50" cy="50" rx="14" ry="38" fill="none" stroke="rgba(155,92,255,0.2)" strokeWidth="0.3" />
        {dots.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="0.9" fill={i % 2 === 0 ? "#22D3EE" : "#9B5CFF"} className="animate-pulse-slow" />
        ))}
      </svg>

      <div className="relative z-10 flex flex-col items-center gap-3">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-accent-white backdrop-blur-sm">
          <Eye className="h-6 w-6" />
        </span>
        <p className="font-display text-lg font-medium text-accent-white">Global Benchmark</p>
      </div>
    </div>
  );
}

export function OurVision() {
  return (
    <section className="relative px-6 pb-section">
      <div className="mx-auto grid max-w-container items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="block h-1 w-14 rounded-full bg-gradient-purple-blue" />
          <h2 className="mt-6 font-display text-3xl font-medium text-accent-white sm:text-4xl">
            Our Vision
          </h2>
          <p className="mt-4 max-w-lg text-lg text-accent-white/90">
            To be the global benchmark in enterprise security and system
            integration.
          </p>
          <p className="mt-4 max-w-lg text-white/90">
            We envision a future where every organization is resilient,
            secure, and technologically advanced — driven by our commitment
            to innovation and to the growth of our people.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <GlobalBenchmarkVisual />
        </motion.div>
      </div>
    </section>
  );
}
