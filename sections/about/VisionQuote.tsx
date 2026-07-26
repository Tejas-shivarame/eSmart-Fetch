"use client";

import { motion } from "framer-motion";
import { GlowBlob } from "@/components/ui/GlowBlob";

export function VisionQuote() {
  return (
    <section className="relative px-6 pb-section">
      <div className="mx-auto max-w-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-card border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent px-6 py-20 text-center sm:px-16"
        >
          <GlowBlob
            color="purple"
            className="left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2"
          />

          <h2 className="relative font-display text-3xl font-medium text-accent-white sm:text-4xl">
            The Future of Infrastructure
          </h2>

          <p className="relative mx-auto mt-8 max-w-3xl font-display text-xl italic leading-relaxed text-accent-white/90 sm:text-2xl">
            &ldquo;We are transitioning from a world of manual configuration
            to one of autonomous orchestration. eSmart Fetchis the catalyst
            for this evolution, providing the intelligence layers that allow
            infrastructure to think, heal, and scale itself.&rdquo;
          </p>

          <div className="relative mt-8 flex flex-col items-center gap-3">
            <span className="h-px w-16 bg-gradient-purple-blue" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/90">
              Vision Statement 2024.01
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
