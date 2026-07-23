"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { StatBlock } from "@/components/ui/StatBlock";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { FOUNDATIONAL_STATS } from "@/lib/constants";

/** Abstract constellation of nodes standing in for a team photo. */
function CollectiveVisual() {
  const nodes = [
    { x: 30, y: 32, r: 9 },
    { x: 55, y: 22, r: 6 },
    { x: 72, y: 42, r: 7 },
    { x: 42, y: 58, r: 5 },
    { x: 64, y: 66, r: 8 },
  ];
  return (
    <div className="relative flex h-full min-h-[280px] w-full flex-col justify-end overflow-hidden rounded-card bg-base-raised">
      <GlowBlob color="blue" className="h-52 w-52 animate-float" />
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
      >
        {nodes.map((n, i) =>
          i === 0 ? null : (
            <line
              key={`l-${i}`}
              x1={nodes[0].x}
              y1={nodes[0].y}
              x2={n.x}
              y2={n.y}
              stroke="rgba(139,139,153,0.35)"
              strokeWidth={0.4}
              strokeDasharray="2 2"
            />
          )
        )}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r / 10}
            fill={i === 0 ? "#9B5CFF" : "#22D3EE"}
            className="animate-pulse-slow"
          />
        ))}
      </svg>

      <div className="relative z-10 p-6">
        <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-accent-blue">
          <Users className="h-3.5 w-3.5" />
          The_Collective
        </p>
        <p className="mt-1 font-display text-lg font-medium text-accent-white">
          The Architects
        </p>
      </div>
    </div>
  );
}

export function FoundationalIntent() {
  return (
    <section className="relative px-6 pb-section">
      <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <GlowCard accent="purple" tilt={false} className="h-full">
            <h3 className="font-display text-3xl font-medium text-accent-white sm:text-4xl">
              Our Foundational Intent
            </h3>
            <p className="mt-4 max-w-lg text-white/90">
              We believe that infrastructure should be invisible yet
              invincible. By merging sophisticated automation with
              human-centric design, we eliminate the friction between
              complex data systems and the developers who build upon them.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-y-8 border-t border-white/[0.08] pt-8 sm:grid-cols-3">
              {FOUNDATIONAL_STATS.map((stat) => (
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
          <CollectiveVisual />
        </motion.div>
      </div>
    </section>
  );
}
