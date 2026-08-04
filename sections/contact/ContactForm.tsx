"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, FileText, Send, ShieldCheck, ChevronDown } from "lucide-react";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { Button } from "@/components/ui/Button";
import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";

  const SUBJECT_OPTIONS = [
    "Professional & Concert Audio",
    "Audio-Video Integration",
    "Security & Surveillance",
    "Access Control Systems",
    "Fire Safety Systems",
    "General Inquiry",
  ];

  const CONTACT_CARDS = [
  {
    icon: Phone,
    label: "Call Us",
    value: `+91-${COMPANY.phoneDisplay}`,
    href: `tel:${COMPANY.phone}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: FileText,
    label: "GSTIN",
    value: COMPANY.gstin,
  },
  ];

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
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-accent-white placeholder:text-white/60 outline-none backdrop-blur-sm transition-all focus:border-accent-blue focus:shadow-glow-blue";
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70"
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

function SelectField({
  id,
  label,
  options,
}: {
  id: string;
  label: string;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          required
          defaultValue=""
          className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-accent-white outline-none backdrop-blur-sm transition-all focus:border-accent-blue focus:shadow-glow-blue"
        >
          <option value="" disabled className="bg-base-raised text-white/50">
            Select a service
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-base-raised text-accent-white">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/[0.04] text-accent-blue transition-colors group-hover:bg-accent-blue/15">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
          {label}
        </p>
        <p className="mt-0.5 text-accent-white">{value}</p>
      </div>
    </>
  );

const wrapperClass =
  "group flex items-start gap-3.5 rounded-card border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/30 hover:bg-white/[0.04] hover:shadow-[0_12px_40px_rgba(0,162,255,0.12)]";
  if (href) {
    return (
      <a href={href} className={wrapperClass}>
        {content}
      </a>
    );
  }

  return <div className={wrapperClass}>{content}</div>;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact-form" className="relative px-6 pt-24 pb-section">
      <div className="mx-auto max-w-container grid gap-10 xl:gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Form panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-card border border-white/[0.08] bg-white/[0.02] p-10 backdrop-blur-md sm:p-12"
        >
          {/* <GlowBlob color="purple" className="right-0 top-0 h-64 w-64" /> */}

          <div className="relative z-10 flex items-center gap-2">
            <Image
              src="/images/eSmart-Fetch-logo-Contact.png"
              alt="eSmart Fetch Logo"
              width={160}
              height={140}
              className="h-16 w-auto object-contain"
              priority
            />
          </div>

          <h3 className="relative z-10 mt-8 font-display text-2xl font-medium text-accent-white">
            Send Us a Message
          </h3>
          <p className="relative z-10 mt-2 text-sm text-white/70">
            Tell us about your project and our team will get back to you within one business
            day.
          </p>

          {submitted ? (
            <div className="relative z-10 flex flex-col items-center justify-center gap-3 py-16 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-blue/15 text-accent-blue">
                <Send className="h-5 w-5" />
              </span>
              <p className="font-display text-xl font-medium text-accent-white">
                Message sent.
              </p>
              <p className="max-w-xs text-sm text-white/70">
                Our team will get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 mt-8 flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="firstName" label="First Name" placeholder="John" />
                <Field id="lastName" label="Last Name" placeholder="Doe" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                />
                <Field
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 00000 00000"
                />
              </div>
              <SelectField id="subject" label="Subject" options={SUBJECT_OPTIONS} />
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
        </motion.div>

        {/* Info column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          {/* Highlight card */}
          <div className="relative overflow-hidden rounded-card border border-accent-blue/30 bg-white/[0.03] p-6 backdrop-blur-md">
            <div className="flex items-start gap-3.5">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent-blue/15 text-accent-blue">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <div>
                <h4 className="font-display text-lg font-medium text-accent-white">
                  Priority Client Support
                </h4>
                <p className="mt-1.5 text-sm text-white/70">
                  Existing clients receive dedicated response for critical system issues and
                  ongoing maintenance requests.
                </p>
              </div>
            </div>    
          </div>

          {CONTACT_CARDS.map((card, index) => (
              <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                  }}
              >
                  <InfoCard {...card} />
              </motion.div>
          ))}

          {COMPANY.locations.map((loc, index) => (
              <motion.div
                  key={loc.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.1,
                  }}
              >
                  <InfoCard
                      icon={MapPin}
                      label={loc.label}
                      value={loc.address}
                  />
              </motion.div>
          ))}

          {/* Social links */}
            <div className="flex items-center gap-4 rounded-card border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:border-accent-blue/40 hover:text-accent-blue hover:shadow-[0_0_20px_-6px_rgba(94,158,255,0.5)]"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}