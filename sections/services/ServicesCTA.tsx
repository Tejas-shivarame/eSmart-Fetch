"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ServicesCTA() {
  return (
    <section className="relative px-6 pb-section">
      <div className="mx-auto max-w-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-card bg-gradient-purple-blue px-8 py-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Elevate Your Infrastructure
          </h2>
          <a href="#contact">
            <Button
              variant="secondary"
              className="mt-8 border-transparent bg-white text-base-raised hover:bg-white/90"
            >
              Connect Excellence
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
