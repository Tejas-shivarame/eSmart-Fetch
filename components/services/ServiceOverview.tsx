"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ServiceOverviewProps {
  service: {
    overview: string;
    benefits: string[];
  };
}

export function ServiceOverview({ service }: ServiceOverviewProps) {
  return (
    <section
      id="overview"
      className="px-6 py-24"
    >
      <div className="mx-auto grid max-w-container items-center gap-16 lg:grid-cols-2">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full border border-accent-purple/30 bg-accent-purple/10 px-4 py-2 text-sm font-medium text-accent-purple">
            Overview
          </span>

          <h2 className="mt-6 font-display text-4xl font-bold md:text-5xl">
            Comprehensive Solutions Tailored For Your Business
          </h2>

          <p className="mt-8 text-lg leading-8 text-accent-gray">
            {service.overview}
          </p>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-border bg-base-card p-10"
        >
          <h3 className="text-2xl font-semibold">
            Key Benefits
          </h3>

          <div className="mt-8 space-y-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <div className="mt-1 rounded-full bg-accent-purple/10 p-2">
                  <CheckCircle2 className="h-5 w-5 text-accent-purple" />
                </div>

                <p className="leading-7 text-accent-gray">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}