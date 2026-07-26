"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Box, Check } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { cn } from "@/lib/utils";
import { ENGINEERING_CATEGORIES, MATERIAL_CATEGORIES } from "@/lib/constants";

type Tab = "engineering" | "material";

function EngineeringGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {ENGINEERING_CATEGORIES.map((cat, i) => {
        const Icon = cat.icon;
        return (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <GlowCard accent={i % 2 === 0 ? "blue" : "purple"} tilt={false} className="h-full">
              <div className="flex items-center gap-4">
                <span
                  className={
                    i % 2 === 0
                      ? "flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue"
                      : "flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent-purple/10 text-accent-purple"
                  }
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h4 className="font-display text-xl font-medium text-accent-white">{cat.title}</h4>
              </div>

              <div className="mt-6 flex flex-col gap-5">
                {cat.groups.map((group) => (
                  <div key={group.heading}>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-blue">
                      {group.heading}
                    </span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-accent-white/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        );
      })}
    </div>
  );
}

function MaterialGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {MATERIAL_CATEGORIES.map((cat, i) => {
        const Icon = cat.icon;
        return (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <GlowCard accent={i % 2 === 0 ? "purple" : "blue"} tilt={false} className="h-full">
              <div className="flex items-center justify-between">
                <h4 className="font-display text-lg font-medium text-accent-white">{cat.title}</h4>
                <Icon className="h-5 w-5 text-white/90" strokeWidth={1.75} />
              </div>

              <ul className="mt-5 flex flex-col gap-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                    <Check className="mt-0.5 h-3.5 w-3.5 flex-none text-accent-blue" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </motion.div>
        );
      })}
    </div>
  );
}

export function ServicesTabs() {
  const [tab, setTab] = useState<Tab>("engineering");

  return (
    <section className="relative px-6 pb-section pt-16">
      <div className="mx-auto max-w-container">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5">
            <button
              type="button"
              onClick={() => setTab("engineering")}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                tab === "engineering"
                  ? "bg-gradient-purple-blue text-white shadow-glow-blue"
                  : "text-white/90 hover:text-accent-white"
              )}
            >
              <Wrench className="h-4 w-4" />
              Engineering &amp; Services
            </button>
            <button
              type="button"
              onClick={() => setTab("material")}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                tab === "material"
                  ? "bg-gradient-purple-blue text-white shadow-glow-blue"
                  : "text-white/90 hover:text-accent-white"
              )}
            >
              <Box className="h-4 w-4" />
              Material Supply
            </button>
          </div>
        </div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            {tab === "engineering" ? (
              <motion.div key="engineering" exit={{ opacity: 0 }}>
                <EngineeringGrid />
              </motion.div>
            ) : (
              <motion.div key="material" exit={{ opacity: 0 }}>
                <MaterialGrid />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}