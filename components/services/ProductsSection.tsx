"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Product } from "./ServiceLayout";

interface ProductsSectionProps {
  badge: string;
  title: string;
  description: string;
  products: Product[];
}

export default function ProductsSection({
  badge,
  title,
  description,
  products,

}: ProductsSectionProps) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 text-center"
        >
          <span className="inline-flex rounded-full border border-accent-purple/30 bg-accent-purple/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.25em] text-accent-purple">
            {badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-accent-gray">
            {description}
          </p>
        </motion.div>

        {/* Products */}

        <div className="space-y-28">
          {products.map((product, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="grid items-center gap-14 lg:grid-cols-2"
              >
                {/* Content */}

                <div
                  className={`${
                    reverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h3 className="text-3xl font-bold text-accent-white md:text-5xl">
                    {product.title}
                  </h3>

                  <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />

                  <p className="mt-8 text-lg leading-9 text-accent-gray text-justify">
                    {product.description}
                  </p>

                  {/* Dynamic Features */}

                  <div className="mt-10 grid grid-cols-2 gap-5">
                    {product.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.08,
                        }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-accent-purple shrink-0" />
                        <span className="text-accent-gray">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Image */}

                <div
                  className={`${
                    reverse ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-base-card">

                    <Image
                      src={product.image}
                      alt={product.title}
                      width={900}
                      height={650}
                      priority={index === 0}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}