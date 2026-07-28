"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Hospital,
  School,
  Landmark,
  ShoppingBag,
} from "lucide-react";

interface ServiceIndustriesProps {
  service: {
    industries: string[];
  };
}

const icons = [
  Building2,
  Factory,
  Hospital,
  School,
  Landmark,
  ShoppingBag,
];

export function ServiceIndustries({
  service,
}: ServiceIndustriesProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-2 text-sm font-medium text-accent-blue">
            Industries We Serve
          </span>

          <h2 className="mt-6 font-display text-4xl font-bold md:text-5xl">
            Trusted Across Multiple Industries
          </h2>

          <p className="mt-6 text-lg leading-8 text-accent-gray">
            We provide reliable engineering solutions tailored for businesses
            across diverse sectors.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {service.industries.map((industry, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 30 }}
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
                  hover:border-accent-blue
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]
                "
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-blue/10 transition-colors duration-300 group-hover:bg-accent-blue/20">
                  <Icon className="h-8 w-8 text-accent-blue" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {industry}
                </h3>

                <p className="mt-4 leading-7 text-accent-gray">
                  Delivering industry-specific solutions with compliance,
                  innovation, and long-term operational excellence.
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}