"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  PencilRuler,
  PackageSearch,
  Hammer,
  ShieldCheck,
  Handshake,
  Flame,
  Network,
  Camera,
  Cpu,
  Wrench,
  LucideIcon,
} from "lucide-react";

interface ServiceProcessProps {
  service: {
    process: string[];
  };
}

const processIcons: Record<string, LucideIcon> = {
  Consultation: ClipboardList,
  Design: PencilRuler,
  "Material Selection": PackageSearch,
  Execution: Hammer,
  Inspection: ShieldCheck,
  Handover: Handshake,

  Installation: Wrench,
  Testing: ShieldCheck,
  Commissioning: Flame,
  Networking: Network,
  Configuration: Cpu,
  Monitoring: Camera,
};

export function ServiceProcess({ service }: ServiceProcessProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-container">
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
          
          <span className="rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-2 text-sm font-medium text-accent-blue">
            Our Process
          </span>

          <h2 className="mt-6 font-display text-4xl font-bold md:text-5xl">
            How We Work
          </h2>

          <p className="mt-6 text-lg leading-8 text-accent-gray">
            From consultation to completion, we ensure every stage is handled
            with precision and professionalism.
          </p>
        </motion.div>

        <div className="relative mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {service.process.map((step, index) => {
            const Icon = processIcons[step] ?? ClipboardList;

            return (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="
                  relative
                  rounded-[28px]
                  border
                  border-border
                  bg-base-card
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-accent-blue
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]
                "
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-accent-purple to-accent-blue shadow-lg">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {step}
                </h3>

                <p className="mt-4 leading-7 text-accent-gray">
                  Every phase is carefully planned and executed to ensure
                  quality, compliance, timely delivery, and complete customer
                  satisfaction.
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}