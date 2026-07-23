"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-section">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-radial-glow"
      />
      <GlowBlob color="purple" className="left-1/2 top-0 h-[380px] w-[380px] -translate-x-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center"
      >
        <h2 className="font-display text-4xl font-medium text-accent-white sm:text-5xl">
          Ready to Initialize?
        </h2>

        {submitted ? (
          <p className="mt-8 text-accent-blue">
            Request received &mdash; check your inbox to confirm access.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="cta-email" className="sr-only">
              Work email
            </label>
            <input
              id="cta-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="terminal@yourcompany.com"
              className="w-full rounded-full border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm text-accent-white placeholder:text-white/90/70 outline-none backdrop-blur-sm transition-all focus:border-accent-blue focus:shadow-glow-blue"
            />
            <Button type="submit" variant="primary" className="shrink-0">
              Launch System
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        )}

        <p className="mt-4 text-xs text-white/90">
          No credit card required for initial deployment.
        </p>
      </motion.div>
    </section>
  );
}
