"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, FileText, Send, Zap } from "lucide-react";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { Button } from "@/components/ui/Button";
import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";

function Field({
  id,
  label,
  type = "text",
  placeholder,
  textarea,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  textarea?: boolean;
}) {
  const shared =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-accent-white placeholder:text-white/90/60 outline-none backdrop-blur-sm transition-all focus:border-accent-blue focus:shadow-glow-blue";
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90"
      >
        {label}
      </label>
      {textarea ? (
        <textarea id={id} required rows={4} placeholder={placeholder} className={shared} />
      ) : (
        <input id={id} type={type} required placeholder={placeholder} className={shared} />
      )}
    </div>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative px-6 pb-section">
      <div className="mx-auto max-w-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid overflow-hidden rounded-card border border-white/[0.08] bg-white/[0.02] backdrop-blur-md lg:grid-cols-[0.85fr_1.15fr]"
        >
          {/* Info panel */}
          <div className="relative overflow-hidden bg-base-raised p-10 sm:p-12">
            <GlowBlob color="purple" className="right-0 top-0 h-64 w-64" />

            <div className="relative z-10 flex items-center gap-2">
              <Image
                src="/images/eSmart-Fetch-logo-Contact.png"
                alt="eSmart Fetch Logo"
                width={160}
                height={140}
                className="h-34 w-auto object-contain items-center"
                priority
              />
            </div>

            <h3 className="relative z-10 mt-10 font-display text-2xl font-medium text-accent-white">
              Contact Information
            </h3>

            <div className="relative z-10 mt-8 flex flex-col gap-6">
              <a href={`tel:${COMPANY.phone}`} className="flex items-start gap-3.5 group">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/[0.04] text-accent-blue transition-colors group-hover:bg-accent-blue/15">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                    Call Us
                  </p>
                  <p className="mt-0.5 text-accent-white">+91-{COMPANY.phoneDisplay}</p>
                </div>
              </a>

              <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3.5 group">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/[0.04] text-accent-blue transition-colors group-hover:bg-accent-blue/15">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                    Email Us
                  </p>
                  <p className="mt-0.5 text-accent-white">{COMPANY.email}</p>
                </div>
              </a>

              {COMPANY.locations.map((loc) => (
                <div key={loc.label} className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/[0.04] text-accent-blue">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                      {loc.label}
                    </p>
                    <p className="mt-0.5 max-w-xs text-accent-white">{loc.address}</p>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/[0.04] text-accent-blue">
                  <FileText className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                    GSTIN
                  </p>
                  <p className="mt-0.5 text-accent-white">{COMPANY.gstin}</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-10 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/90 transition-colors hover:border-accent-blue/40 hover:text-accent-blue"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="p-10 sm:p-12">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-16 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-blue/15 text-accent-blue">
                  <Send className="h-5 w-5" />
                </span>
                <p className="font-display text-xl font-medium text-accent-white">
                  Message sent.
                </p>
                <p className="max-w-xs text-sm text-white/90">
                  Our team will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field id="firstName" label="First Name" placeholder="John" />
                  <Field id="lastName" label="Last Name" placeholder="Doe" />
                </div>
                <Field
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                />
                <Field
                  id="message"
                  label="Message"
                  placeholder="Write your message here..."
                  textarea
                />
                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
