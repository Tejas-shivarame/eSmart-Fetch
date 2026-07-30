"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ServiceData } from "./ServiceLayout";

interface Props {
  service: ServiceData;
}

export function ServiceBrands({ service }: Props) {
  if (!service.brands || service.brands.length === 0) return null;

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="rounded-full border border-accent-purple/30 bg-accent-purple/10 px-4 py-2 text-sm font-medium text-accent-purple">
            Trusted Brands
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Technology Partners
          </h2>

          <p className="mt-4 text-accent-gray">
            We partner with globally recognized manufacturers.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {service.brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative h-[340px] overflow-hidden rounded-3xl border border-border bg-base-card"
            >
              {/* Logo */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:opacity-0">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={170}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Hover */}
              <div className="absolute inset-0 translate-y-full transition-all duration-500 group-hover:translate-y-0">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 flex flex-col justify-end bg-black/70 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {brand.name}
                  </h3>

                  <p className="mt-3 text-sm text-gray-200">
                    {brand.description}
                  </p>

                  <p className="mt-4 font-semibold text-accent-purple">
                    {brand.price}
                  </p>

                  {/* <Link
                    href={brand.website ?? "#"}
                    target="_blank"
                    className="mt-6 inline-flex items-center gap-2 text-accent-purple"
                  >
                    Visit Brand
                    <ArrowUpRight className="h-4 w-4" />
                  </Link> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}