"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { COMPANY } from "@/lib/constants";
import { ParticleField } from "@/components/ui/ParticleField";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function AboutHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-20">
      {/* Ambient backdrop standing in for an office photograph — glass-panel
          silhouettes built from CSS/SVG rather than a licensed stock photo. */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,18,0.55)_0%,rgba(7,8,18,0.85)_60%,#070812_100%)]" />
        <AnimatedGrid/>
        <ParticleField />
        <GlowBlob color="purple" className="left-1/4 top-1/3 h-96 w-96" />
        <GlowBlob color="blue" className="right-1/4 top-1/2 h-96 w-96" />
 
      </div>

      <div className="mx-auto max-w-container py-16 text-center">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="flex justify-center">
          <Badge pulse>Since {COMPANY.since}</Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mx-auto mt-8 max-w-3xl font-display text-5xl font-bold leading-[1.05] text-accent-white sm:text-6xl lg:text-7xl"
        >
          Engineering{" "}
          <span className="bg-gradient-purple-blue bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
            Safety &amp; Trust
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mx-auto mt-6 max-w-2xl text-base text-white/90 sm:text-lg"
        >
          For India&apos;s leading enterprises, we integrate hardware,
          software, and human expertise into security systems that hold up
          when it matters most.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button variant="primary">
            Explore Our Services
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="secondary">
            <PhoneCall className="h-4 w-4" />
            Talk to Our Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
