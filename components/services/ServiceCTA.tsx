"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ServiceCTAProps {
  service: {
    ctaTitle: string;
    ctaDescription: string;
  };
}

export function ServiceCTA({ service }: ServiceCTAProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-border
            bg-base-card
            px-8
            py-16
            text-center
            transition-all
            duration-500
            hover:border-accent-purple
            hover:shadow-[0_0_35px_rgba(155,92,255,0.25)]
          "
        >
          {/* Hover Glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[32px]
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(155,92,255,.7), 0 0 30px rgba(155,92,255,.25)",
            }}
          />

          <div className="relative z-10">
            <span className="rounded-full border border-accent-purple/30 bg-accent-purple/10 px-4 py-2 text-sm font-medium text-accent-purple">
              Let's Get Started
            </span>

            <h2 className="mt-8 font-display text-4xl font-bold md:text-5xl">
              {service.ctaTitle}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-accent-gray">
              {service.ctaDescription}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Button variant="primary" href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Link
                href="/contact"
                className="
                  rounded-full
                  border
                  border-border
                  px-7
                  py-3
                  font-medium
                  transition-all
                  duration-300
                  hover:border-accent-purple
                  hover:bg-white/5
                "
              >
                Contact Us
              </Link>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}