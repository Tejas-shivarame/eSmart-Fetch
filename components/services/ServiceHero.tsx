"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Download,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { ParticleField } from "@/components/ui/ParticleField";
import { GlowBlob } from "@/components/ui/GlowBlob";

interface ServiceHeroProps {
  service: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
  };
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.12,
      ease: "easeOut" as const,
    },
  }),
};

const FEATURES = [
  "Certified Engineers",
  "ISO Quality Standards",
  "24×7 Technical Support",
  "AMC Available",
];

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-28">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 -z-20">

        <AnimatedGrid />

        <ParticleField />

        <GlowBlob
          color="purple"
          className="left-1/4 top-1/3 h-[420px] w-[420px]"
        />

        <GlowBlob
          color="blue"
          className="right-1/4 top-1/2 h-[380px] w-[380px]"
        />

      </div>

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-16 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-purple/15 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[340px] w-[340px] rounded-full bg-accent-blue/15 blur-[130px]" />

      </div>

      <div className="mx-auto max-w-container">

        {/* ================= Breadcrumb ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="flex items-center gap-2 text-sm text-accent-gray"
        >
          <Link
            href="/"
            className="transition-colors hover:text-accent-purple"
          >
            Home
          </Link>

          <ChevronRight className="h-4 w-4" />

          <Link
            href="/services"
            className="transition-colors hover:text-accent-purple"
          >
            Services
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span className="text-white">
            {service.title}
          </span>
        </motion.div>

        {/* ================= Badge ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-10"
        >
          <Badge pulse>
            {service.badge}
          </Badge>
        </motion.div>

        {/* ================= Heading ================= */}

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mx-auto mt-10 max-w-5xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          {service.title}

          <span className="block bg-gradient-purple-blue bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">

            {service.highlight}

          </span>
        </motion.h1>

        {/* ================= Description ================= */}

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-accent-gray lg:text-xl"
        >
          {service.description}
        </motion.p>

        {/* ================= Feature Chips ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {FEATURES.map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-border
                bg-base-card/60
                px-5
                py-3
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-accent-purple
                hover:bg-base-card
              "
            >
              <CheckCircle2 className="h-5 w-5 text-accent-purple" />

              <span className="text-sm font-medium">
                {item}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ================= CTA ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-14 flex flex-wrap justify-center gap-5"
        >
          <Button
            variant="primary"
            href="/contact"
          >
            Get Free Consultation

            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button variant="secondary">
            <Download className="mr-2 h-4 w-4" />

            Download Brochure
          </Button>
        </motion.div>

                {/* ================= Premium Stats ================= */}

        {/* <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={6}
          className="mt-24"
        >
          <div className="relative">

        

            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="relative grid gap-6 md:grid-cols-4">

              {[
                {
                  value: "250+",
                  label: "Projects Delivered",
                },
                {
                  value: "24×7",
                  label: "Technical Support",
                },
                {
                  value: "ISO",
                  label: "Quality Standards",
                },
                {
                  value: "15+",
                  label: "Years Experience",
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-border
                    bg-base-card/70
                    p-8
                    backdrop-blur-xl
                  "
                >

                

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  >
                    <div className="absolute inset-0 rounded-3xl border border-accent-purple/40" />

                    <div className="absolute -left-20 top-0 h-52 w-52 rounded-full bg-accent-purple/20 blur-3xl" />

                    <div className="absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-accent-blue/20 blur-3xl" />
                  </div>

                

                  <div className="relative">

                    <h3 className="font-display text-5xl font-bold text-white">

                      {item.value}

                    </h3>

                    <div className="mt-5 h-px w-12 bg-gradient-to-r from-accent-purple to-accent-blue" />

                    <p className="mt-5 text-sm leading-7 text-accent-gray">

                      {item.label}

                    </p>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>
        </motion.div> */}



      </div>

     
    </section>
  )
}

    