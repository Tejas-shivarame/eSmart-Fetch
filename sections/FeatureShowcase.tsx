"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/GlowCard";
import { StatBlock } from "@/components/ui/StatBlock";
import { HERO_STATS } from "@/lib/constants";
import Image from "next/image";
export function FeatureShowcase() {
  return (
    <section id="features" className="relative px-6 py-section">
      <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <GlowCard accent="purple" tilt={false} className="h-full">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-purple">
              Core Engine
            </span>
            <h3 className="mt-4 font-display text-3xl font-medium text-accent-white sm:text-4xl">
              Neural Data Fetching
            </h3>
            <p className="mt-4 max-w-lg text-white/90">
              Our proprietary algorithm predicts data needs before they
              arise, pre-warming infrastructure nodes and reducing latency
              by up to 85% for enterprise-grade applications.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
              {HERO_STATS.map((stat) => (
                <StatBlock key={stat.label} {...stat} />
              ))}
            </div>
          </GlowCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <GlowCard
  accent="blue"
  className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 p-0 backdrop-blur-xl"
>
  <div className="relative h-[500px] w-full overflow-hidden">
    <Image
      src="/images/AI-powered.png"
      alt="Smart Fetch AI Infrastructure"
      fill
      priority
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-black/20 to-transparent" />

    {/* Glow */}
    <div className="absolute -bottom-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 z-10 p-8">
      {/* <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-300">
        AI Powered Infrastructure
      </span> */}

      <h3 className="mt-4 font-display text-2xl font-semibold text-white text-center">
        Smart Fetch AI Platform
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-300 text-center">
AI • Cloud • Software
      </p>
    </div>
  </div>
</GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
