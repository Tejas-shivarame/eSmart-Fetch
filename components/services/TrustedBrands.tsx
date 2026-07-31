"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
}

interface TrustedBrandsProps {
  brands?: Brand[];
}

export default function TrustedBrands({
  brands = [],
}: TrustedBrandsProps) {
  // Don't render if there are no brands
  if (brands.length === 0) return null;

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Trusted Brands
          </span>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-4xl text-center text-5xl font-bold text-white"
        >
          Powered by{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Global Industry Leaders
          </span>
        </motion.h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-400">
          We integrate internationally trusted fire protection brands to
          deliver certified, reliable and enterprise-grade safety solutions.
        </p>

        {/* Brand Marquee */}
        <div className="relative mt-16 overflow-hidden">
            {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#080A14] to-transparent" />
            {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#080A14] to-transparent" />

          <motion.div
            className="flex w-max items-center gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{duration: 25,repeat: Infinity,repeatType: "loop",ease: "linear",}}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex items-center justify-center shrink-0"
              >
                <Image src={brand.logo} alt={brand.name} width={180} height={180} 
                className="h-30 w-200 rounded-3xl object-contain opacity-70 transition-all duration-3000 hover:opacity-100 "/>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}