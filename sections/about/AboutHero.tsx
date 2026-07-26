"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { ParticleField } from "@/components/ui/ParticleField";
import { COMPANY } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut" as const,
    },
  }),
};

export function AboutHero() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,18,0.55)_0%,rgba(7,8,18,0.85)_60%,#070812_100%)]" />

        <AnimatedGrid />
        <ParticleField />

        <GlowBlob
          color="purple"
          className="left-1/4 top-1/3 h-48 w-48 sm:h-72 sm:w-72 lg:h-96 lg:w-96"
        />

        <GlowBlob
          color="blue"
          className="right-1/4 top-1/2 h-48 w-48 sm:h-72 sm:w-72 lg:h-96 lg:w-96"
        />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center py-6 sm:py-10 lg:py-12 text-center">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <Badge pulse>Since {COMPANY.since}</Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-6 max-w-4xl font-display font-bold leading-tight text-accent-white text-4xl sm:text-5xl lg:text-7xl"
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
          className="mt-6 max-w-2xl px-2 text-base leading-7 text-white/90 sm:text-lg"
        >
          For India's leading enterprises, we integrate hardware, software,
          and human expertise into security systems that perform when it
          matters most.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-8 flex w-full justify-center"
        >
          <Link href="/services">
            <Button variant="primary">
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}