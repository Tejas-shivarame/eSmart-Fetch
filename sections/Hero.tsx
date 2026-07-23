"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { ParticleField } from "@/components/ui/ParticleField";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";

import { StatBlock } from "@/components/ui/StatBlock";
import { HERO_STATS } from "@/lib/constants";
import { useMousePosition } from "@/hooks/useMousePosition";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { x, y } = useMousePosition(containerRef);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-24"
    >
      <AnimatedGrid />
      <ParticleField />

      <GlowBlob
        color="purple"
        className="left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2"
      />
      <GlowBlob
        color="blue"
        className="bottom-0 right-1/4 h-[320px] w-[320px] translate-y-1/3"
      />

      {/* Mouse-reactive aurora layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 transition-[background] duration-300"
        style={{
          background: `radial-gradient(600px circle at ${x}% ${y}%, rgba(155,92,255,0.12), transparent 60%)`,
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
          <Badge pulse>System Status: Optimal</Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-8 font-display text-4xl font-medium leading-[1.1] text-accent-white sm:text-6xl lg:text-7xl"
        >
          Initializing{" "}
          <span className="bg-gradient-purple-blue bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
            Critical Infrastructure
          </span>{" "}
          for the Next Era
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 max-w-2xl text-base text-accent-gray sm:text-lg"
        >
          Modern enterprise infrastructure powered by AI. Delivering
          ultra-fast, secure, scalable data pipelines for businesses
          worldwide.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button variant="primary">
            Establish Connection
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="secondary">
            <FileText className="h-4 w-4" />
            View Documentation
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-20 grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4"
        >
          {HERO_STATS.map((stat) => (
            <StatBlock key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
