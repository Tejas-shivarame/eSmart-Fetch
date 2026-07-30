"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlowBlob } from "@/components/ui/GlowBlob";

/** Abstract glowing network-of-nodes globe, standing in for a satellite photo. */
function GlobalBenchmarkVisual() {
  return (
    <div className="relative h-full min-h-[450px] w-full overflow-hidden rounded-[28px] border border-white/10 bg-base-raised shadow-2xl">
      <Image
        src="/images/vision.png"
        alt="Our Vision"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
      />

      {/* Premium dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-[#020617]/10" />

      {/* Glow effect */}
      <GlowBlob
        color="blue"
        className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 opacity-40"
      />

      {/* Glass border */}
      <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
    </div>
  );
}

export function OurVision() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-10 py-12 lg:py-20">
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
