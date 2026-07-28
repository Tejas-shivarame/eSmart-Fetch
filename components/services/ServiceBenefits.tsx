"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Wrench,
  Headphones,
  BadgeCheck,
  Clock3,
} from "lucide-react";

interface ServiceBenefitsProps {
  service: {
    benefits: string[];
  };
}

const icons = [
  ShieldCheck,
  Award,
  Wrench,
  Headphones,
  BadgeCheck,
  Clock3,
];

export function ServiceBenefits({ service }: ServiceBenefitsProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-accent-purple/30 bg-accent-purple/10 px-4 py-2 text-sm font-medium text-accent-purple">
            Why Choose Us
          </span>

          <h2 className="mt-6 font-display text-4xl font-bold md:text-5xl">
            Benefits You&apos;ll Receive
          </h2>

          <p className="mt-6 text-lg leading-8 text-accent-gray">
            Every project is executed with quality, precision and long-term
            reliability.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {service.benefits.map((benefit, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
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
                  hover:shadow-[0_0_25px_rgba(155,92,255,0.2)]
                "
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-purple/10 group-hover:bg-accent-purple/20 transition-colors">
                  <Icon className="h-8 w-8 text-accent-purple" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {benefit}
                </h3>

                <p className="mt-4 leading-7 text-accent-gray">
                  Designed to deliver measurable value with certified
                  professionals, modern engineering practices, and dependable
                  support.
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}