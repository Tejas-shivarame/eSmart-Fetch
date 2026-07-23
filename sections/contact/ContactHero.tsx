"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactHero() {
  return (
    <section className="relative px-6 pb-16 pt-40">
      <div className="mx-auto max-w-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Contact Us"
            title="Let's build something great."
            align="left"
          />
        </motion.div>
      </div>
    </section>
  );
}
