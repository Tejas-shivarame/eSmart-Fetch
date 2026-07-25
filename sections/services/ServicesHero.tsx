"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { ParticleField } from "@/components/ui/ParticleField";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { GlowBlob } from "@/components/ui/GlowBlob";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-40">
      <div className="absolute inset-0 -z-10">
        <AnimatedGrid/>
        <ParticleField />
        <GlowBlob color="purple" className="left-1/4 top-1/3 h-96 w-96" />
        <GlowBlob color="blue" className="right-1/4 top-1/2 h-96 w-96" />
      </div>

      <div className="mx-auto max-w-container text-center">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="flex justify-center">
          <Badge pulse>World-Class Standards</Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mx-auto mt-8 max-w-3xl font-display text-5xl font-bold leading-[1.05] text-white/90 sm:text-6xl lg:text-7xl"
        >
          Mastery In{" "}
          <span className="bg-gradient-purple-blue bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
            Infrastructure.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90"
        >
          We deliver precision-engineered solutions for complex facilities —
          from technical installations to the strategic sourcing of every
          material behind them.
        </motion.p>
      </div>
    </section>
  );
}