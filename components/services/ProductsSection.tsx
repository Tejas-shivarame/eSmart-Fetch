"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Addressable Fire Alarm Panel",
    image: "/images/fire-panel.jpg",
    description:
        "Next-generation addressable fire alarm control panels combining intelligent detection, real-time monitoring, and advanced diagnostics. Engineered for mission-critical environments, they provide centralized management, faster emergency response, and enhanced protection for people, assets, and infrastructure.",},
  {
    title: "Smoke & Heat Detector",
    image: "/images/smoke-heat-detector.jpg",
    description:
        "Advanced smoke and heat detection solutions combining optical sensing and thermal monitoring for fast, accurate fire detection with reduced false alarms. Ideal for commercial buildings, industrial facilities, warehouses, hotels, hospitals, and critical infrastructure.",
  },
  {
    title: "Manual Call Point",
    image: "/images/call-point.jpg",
    description:
      "Emergency activation stations enabling occupants to instantly trigger fire alarm systems during emergencies.",
  },
  {
    title: "Fire Sprinkler System",
    image: "/images/fire-sprinkler.jpg",
    description:
      "Automatic sprinkler systems that suppress fires quickly while minimizing damage to facilities and assets.",
  },
  // {
  //   title: "Gas Suppression System",
  //   image: "/images/gas-suppression.jpg",
  //   description:
  //     "Clean-agent fire suppression systems designed for data centers, electrical rooms, and mission-critical infrastructure.",
  // },
  // {
  //   title: "Fire Hydrant System",
  //   image: "/images/fire-hydrant.jpg",
  //   description:
  //     "Complete hydrant systems including pumps, valves, hose reels, and piping for commercial fire protection.",
  // },
  {
    title: "Emergency Exit Lighting",
    image: "/images/emergency-light.png",
    description:
      "LED emergency lighting and illuminated exit signs ensuring safe evacuation during emergencies.",
  },
];

export default function ProductsSection() {
  return (
<section className="relative py-24">
  <div className="mx-auto max-w-7xl px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <span className="rounded-full border border-accent-purple/30 bg-accent-purple/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-accent-purple">
        Our Products
      </span>

      <h2 className="mt-6 text-4xl font-bold md:text-6xl">
        Enterprise Fire Protection Equipment
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-accent-gray">
        We supply globally recognized fire protection products designed for
        intelligent detection, rapid suppression, and long-term operational
        reliability.
      </p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-4 xl:grid-cols-2">
    {products.map((product, index) => {
        const isLast = index === products.length - 1;
        const isOdd = products.length % 2 !== 0;

        return (
        <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={`group overflow-hidden rounded-3xl border border-white/10 bg-base-card transition-all duration-500 hover:-translate-y-2 hover:border-accent-purple/40 hover:shadow-[0_0_40px_rgba(124,58,237,.25)]
            ${isOdd && isLast ? "xl:col-span-2 xl:max-w-2xl xl:mx-auto w-full" : ""}`}
        >
            <div className="relative h-64 overflow-hidden">
            <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            </div>

            <div className="p-7">
            <h3 className="text-2xl font-semibold text-accent-white">
                {product.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-accent-gray text-justify">
                {product.description}
            </p>
            </div>
        </motion.div>
        );
    })}
    </div>
  </div>
</section>
  );
}