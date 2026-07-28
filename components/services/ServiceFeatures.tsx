"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ServiceFeaturesProps {
  service: {
    features: string[];
  };
}

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-accent-purple/30 bg-accent-purple/10 px-4 py-2 text-sm font-medium text-accent-purple">
            Features
          </span>

          <h2 className="mt-6 font-display text-4xl font-bold md:text-5xl">
            Everything You Need
          </h2>

          <p className="mt-6 text-lg leading-8 text-accent-gray">
            Our solutions combine innovation, reliability, and industry best
            practices to deliver exceptional business value.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {service.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                group
                rounded-[28px]
                border
                border-border
                bg-base-card
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-accent-purple
                hover:shadow-[0_0_30px_rgba(155,92,255,0.18)]
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-purple/10 transition-colors duration-300 group-hover:bg-accent-purple/20">
                <CheckCircle2 className="h-7 w-7 text-accent-purple" />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {feature}
              </h3>

              <p className="mt-4 leading-7 text-accent-gray">
                We deliver this capability using modern engineering standards,
                certified professionals, and enterprise-grade implementation.
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}