
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export function AboutSection() {
  return (
    <section className="relative py-32 px-6 lg:px-20 bg-[#070812] overflow-hidden">
      {/* ambient glow */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#9B5CFF]/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 w-72 h-72 rounded-full bg-[#22D3EE]/10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-2xl overflow-hidden border border-white/10"
        >
          <Image
            src="/images/about-smart-fetch.png"
            alt="Smart Fetch engineering team on-site"
            width={640}
            height={480}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070812]/60 via-transparent to-transparent" />
        </motion.div>

        {/* Content */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
>
  <span className="inline-block mb-4 text-sm font-medium uppercase tracking-wide text-[#22D3EE]">
    About Us
  </span>

  <h2 className="mb-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
    Building Solutions{" "}
    <span className="bg-gradient-to-r from-[#9B5CFF] to-[#22D3EE] bg-clip-text text-transparent">
      Powering Progress
    </span>
  </h2>

  <p className="max-w-md text-lg leading-relaxed text-[#8B8B99]">
    eSmart Fetch delivers intelligent security, fire safety, and IT
    infrastructure solutions for enterprises, healthcare facilities, and
    institutions. We design, implement, and maintain resilient systems that
    protect people, secure critical assets, and ensure uninterrupted business
    operations.
  </p>

  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="show"
    custom={3}
    className="mt-8"
  >
    <Link href="/about">
      <Button variant="primary" className="flex items-center gap-2">
        View More
        <ArrowRight className="h-4 w-4" />
      </Button>
    </Link>
  </motion.div>
</motion.div>
      </div>
    </section>
  );
}