"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { QUALITY_PILLARS } from "@/lib/constants";

function PillarVisual({ image, title }: { image: string; title: string }) {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-b-card bg-base-raised">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-base/10 to-transparent" />
    </div>
  );
}

export function QualityDrive() {
  return (
    <section className="relative px-6 py-section">
      <div className="mx-auto max-w-container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-bold text-accent-white sm:text-5xl"
        >
          A Relentless Drive To{" "}
          <span className="bg-gradient-purple-blue bg-clip-text text-transparent underline decoration-accent-blue/40 decoration-4 underline-offset-8">
            Quality
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl text-accent-gray"
        >
          In collaboration with world leaders, we offer handcrafted
          enterprise-grade systems designed to meet extremely demanding
          standards.
        </motion.p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {QUALITY_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-card border border-white/[0.08] bg-white/[0.02] text-left"
            >
              <div className="p-6">
                <h4 className="font-display text-lg font-bold uppercase tracking-wide text-accent-white">
                  {pillar.title}
                </h4>
                <div className="mt-2 h-px w-8 bg-white/15" />
                <p className="mt-3 text-sm italic text-accent-gray">
                  &ldquo;{pillar.tagline}&rdquo;
                </p>
              </div>
              <PillarVisual image={pillar.image} title={pillar.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}