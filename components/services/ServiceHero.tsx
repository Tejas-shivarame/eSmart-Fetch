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
    heroImage?: string;
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
  return (<section className="relative min-h-[850px] overflow-hidden px-6 pt-40 pb-28">
      {/* =========================================================
          HERO BACKGROUND IMAGE
      ========================================================= */}

      {service.heroImage && (
        <div
          className="absolute inset-0 -z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${service.heroImage})`,
          }}
        />
      )}

      {/* =========================================================
          DARK OVERLAY
      ========================================================= */}

      <div className="absolute inset-0 -z-20 bg-black/70" />

      {/* =========================================================
          GRADIENT OVERLAY
      ========================================================= */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-black/90 via-accent-purple/20 to-accent-blue/30" />

      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0 -z-10">
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

      {/* =========================================================
          ADDITIONAL LIGHT EFFECTS
      ========================================================= */}

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-16 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-purple/15 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[340px] w-[340px] rounded-full bg-accent-blue/15 blur-[130px]" />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-container">

        {/* =======================================================
            BADGE
        ======================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-10 flex justify-center"
        >
          <Badge pulse>{service.badge}</Badge>
        </motion.div>

        {/* =======================================================
            HEADING
        ======================================================= */}

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mx-auto mt-10 max-w-5xl text-center font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          {service.title}

          <span className="block animate-gradient-x bg-gradient-purple-blue bg-[length:200%_auto] bg-clip-text text-transparent">
            {service.highlight}
          </span>
        </motion.h1>

        {/* =======================================================
            DESCRIPTION
        ======================================================= */}

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-white lg:text-xl"
        >
          {service.description}
        </motion.p>

        {/* =======================================================
            FEATURE CHIPS
        ======================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {FEATURES.map((feature) => (
            <div
              key={feature}
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-black/30
                px-5
                py-3
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-accent-purple
                hover:bg-black/50
              "
            >
              <CheckCircle2 className="h-5 w-5 text-accent-purple" />

              <span className="text-sm font-medium text-white">
                {feature}
              </span>
            </div>
          ))}
        </motion.div>

        {/* =======================================================
            CTA BUTTONS
        ======================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-14 flex flex-wrap justify-center gap-5"
        >
          <Button variant="primary" href="/contact">
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

    