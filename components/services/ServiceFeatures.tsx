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
import { ServiceData } from "./ServiceLayout";

interface ServiceFeaturesProps {
  service: ServiceData;
}
export interface Feature {
  title: string;
  description: string;
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
  "Automatic Sprinkler Systems": ShieldCheck,
  "Fire Hydrant Systems": Wrench,
  "Gas Suppression Systems": ShieldCheck,
  "Emergency Exit Lighting": Zap,

  // Security
  "IP CCTV Systems": Camera,
  "Biometric Access Control": Lock,
  "Video Door Phones": Camera,
  "Intrusion Alarm Systems": ShieldCheck,
  "Remote Monitoring": Cpu,

  // AV
  "Conference Room AV": Cpu,
  "LED Video Walls": LayoutGrid,
  "Projectors": LayoutGrid,
  "Digital Signage": LayoutGrid,
  "Sound Systems": Wifi,
  "Smart Classroom Solutions": Cpu,

  // Networking
  "Structured Cabling": Network,
  "Network Infrastructure": Network,
  "WiFi Solutions": Wifi,
  "Server Installation": Server,
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
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {service.features.map((feature, index) => {
          const Icon = featureIcons[feature.title] ?? CheckCircle2;

            return (
              <motion.div
                key={`${feature.title}-${index}`}
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
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-accent-gray">
                    {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}