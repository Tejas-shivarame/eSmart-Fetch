"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Building2,
  Square,
  LayoutGrid,
  Armchair,
  Ruler,
  Flame,
  ShieldCheck,
  Camera,
  Network,
  Cpu,
  Wifi,
  Lock,
  Server,
  Wrench,
  Zap,
  LucideIcon,
} from "lucide-react";

interface ServiceFeaturesProps {
  service: {
    features: string[];
  };
}

const featureIcons: Record<string, LucideIcon> = {
  // Interior Fit-Out
  "Office Interiors": Building2,
  "False Ceiling": Square,
  "Glass Partitions": LayoutGrid,
  "Flooring": LayoutGrid,
  "Furniture Installation": Armchair,
  "Space Planning": Ruler,

  // Fire Protection
  "Fire Alarm Systems": Flame,
  "Fire Suppression": ShieldCheck,
  "Smoke Detection": ShieldCheck,
  "Emergency Lighting": Zap,
  "Hydrant Systems": Wrench,

  // CCTV & Security
  "CCTV Surveillance": Camera,
  "Access Control": Lock,
  "Biometric Systems": ShieldCheck,

  // Networking
  "Structured Cabling": Network,
  "Network Infrastructure": Network,
  "WiFi Solutions": Wifi,
  "Server Installation": Server,

  // IoT
  "IoT Integration": Cpu,
  "Smart Automation": Cpu,
  "Remote Monitoring": Cpu,
};

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
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
          <span className="rounded-full border border-accent-purple/30 bg-accent-purple/10 px-4 py-2 text-sm font-medium text-accent-purple">
            Features
          </span>

          <h2 className="mt-6 font-display text-4xl font-bold md:text-5xl">
            Everything You Need
          </h2>

          <p className="mt-6 text-lg leading-8 text-accent-gray">
            Our solutions combine innovation, reliability, and industry best
            practices to deliver exceptional business value.
          </p>
        </motion.div>

        {/* Features */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {service.features.map((feature, index) => {
          const Icon = featureIcons[feature] ?? CheckCircle2;

            return (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-[28px] border border-border bg-base-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-accent-purple hover:shadow-[0_0_30px_rgba(155,92,255,0.18)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-purple/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-purple/20">
                  <Icon className="h-8 w-8 text-accent-purple" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {feature}
                </h3>

                <p className="mt-4 leading-7 text-accent-gray">
                  We deliver this capability using modern engineering standards,
                  certified professionals, and enterprise-grade implementation.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}