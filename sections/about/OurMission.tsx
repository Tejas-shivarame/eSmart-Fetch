"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { MISSION_POINTS } from "@/lib/constants";
import Image from "next/image";
/** Abstract "systems at work" visual standing in for an office photograph. */
function MissionVisual() {
  return (
    <div className="relative h-full min-h-[450px] w-full overflow-hidden rounded-card border border-white/[0.08] bg-base-raised">
      <Image
        src="/images/mission.png" // Your mission image
        alt="Our Mission"
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
        priority
      />

      {/* Optional overlay for better text harmony */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

      {/* Optional glow */}
      <GlowBlob
        color="blue"
        className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 opacity-40"
      />
    </div>
  );
}

export function OurMission() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-10 py-12 lg:py-20">
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
          <p className="mt-4 max-w-lg text-white/90">
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
