"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { ParticleField } from "@/components/ui/ParticleField";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { useMousePosition } from "@/hooks/useMousePosition";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

export interface HeroProps {
  badge: string;

  title: string;
  highlightOne: string;
  titleTwo: string;
  highlightTwo: string;

  description: string;

  image:string;
  
  primaryButton: {
    text: string;
    href: string;
  };

  secondaryButton: {
    text: string;
    href: string;
  };
}

export function Hero({
  badge,
  title,
  highlightOne,
  titleTwo,
  highlightTwo,
  description,
  image,
  primaryButton,
  secondaryButton,
}: HeroProps) {
const containerRef = useRef<HTMLDivElement>(null!);
const { x, y } = useMousePosition(containerRef);
  return (
<section
  ref={containerRef}
  className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-24"
  style={{
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
      {/* Dark Overlay */}
<div
  className="absolute inset-0 transition-colors duration-500"
/>
      <AnimatedGrid />
      <ParticleField />

      <GlowBlob
        color="purple"
        className="left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2"
      />

      <GlowBlob
        color="blue"
        className="bottom-0 right-1/4 h-[320px] w-[320px] translate-y-1/3"
      />

      {/* Mouse Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 transition-[background] duration-300"
        style={{
          background: `radial-gradient(600px circle at ${x}% ${y}%, rgba(155,92,255,0.12), transparent 60%)`,
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <Badge pulse>{badge}</Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-8 font-display text-3xl font-medium leading-[1.1] text-accent-white sm:text-6xl lg:text-6xl"
        >
          {title}{" "}
          <span className="bg-gradient-purple-blue bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
            {highlightOne}
          </span>{" "}
          {titleTwo}{" "}
          <span className="bg-gradient-purple-blue bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
            {highlightTwo}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 max-w-2xl text-base text-white sm:text-lg"
        >
          {description}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button variant="primary" href={primaryButton.href}>
            {primaryButton.text}
            <ArrowRight className="h-4 w-4" />
          </Button>

          <Button
            variant="secondary"
            href={secondaryButton.href}
            target={
              secondaryButton.href.endsWith(".pdf") ? "_blank" : undefined
            }
          >
            <FileText className="h-4 w-4" />
            {secondaryButton.text}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}