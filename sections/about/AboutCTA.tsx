"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export function AboutCTA() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-section">
      <div aria-hidden className="absolute inset-0 bg-gradient-radial-glow" />
      <GlowBlob color="blue" className="left-1/2 top-0 h-[380px] w-[380px] -translate-x-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center"
      >
        <h2 className="font-display text-4xl font-medium text-accent-white sm:text-5xl">
          Ready to Secure Your Enterprise?
        </h2>
        <p className="mt-4 max-w-lg text-white/90">
          Talk to our team about a turnkey security, fire safety, or AV
          rollout — no obligation, just a straight assessment of what your
          site needs.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href={`tel:${COMPANY.phone}`}>
            <Button variant="primary">
              <PhoneCall className="h-4 w-4" />
              Call {COMPANY.phoneDisplay}
            </Button>
          </a>
          <a href={`mailto:${COMPANY.email}`}>
            <Button variant="secondary">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>

        <p className="mt-4 text-xs text-white/90">
          Serving enterprises across India, 24/7 support included.
        </p>
      </motion.div>
    </section>
  );
}
