"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { COMPANY } from "@/lib/constants";

export function HomeContactCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      <GlowBlob
        color="purple"
        className="left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] px-8 py-20 text-center backdrop-blur-xl">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-blue"
        >
          GET IN TOUCH
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 font-display text-5xl font-medium leading-tight text-accent-white md:text-6xl"
        >
          Ready to Bring Your
          <span className="bg-gradient-purple-blue bg-clip-text text-transparent">
            {" "}
            Vision to Life?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70"
        >
          Whether you're planning enterprise security, fire protection,
          professional AV systems, or IT infrastructure, our specialists
          are ready to engineer the right solution for your business.
        </motion.p>

        <div className="mt-14 flex flex-wrap justify-center gap-10 text-white/80">

          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-accent-blue" />
            <span>{COMPANY.phoneDisplay}</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-accent-blue" />
            <a
                href={`mailto:${COMPANY.email}`}
                className="break-all text-white/80 transition-colors duration-300 hover:text-accent-blue"
            >
                {COMPANY.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-accent-blue" />
            <span>Bangalore, Karnataka</span>
          </div>

        </div>

        <div className="mt-14">
          <Button
            variant="primary"
            href="/contact"
            className="min-w-[240px]"
          >
            Contact Our Experts
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

      </div>
    </section>
  );
}