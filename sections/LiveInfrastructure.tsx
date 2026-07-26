"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { REGION_NODES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function LiveInfrastructure() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodes = mapRef.current?.querySelectorAll<HTMLElement>("[data-node]");
    if (!nodes || nodes.length === 0) return;

    const ctx = gsap.context(() => {
      nodes.forEach((node, i) => {
        gsap.to(node, {
          scale: 1.15,
          duration: 1.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3,
        });
      });
    }, mapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden px-6 py-16">
      <div className="mx-auto max-w-container">
        <SectionHeading
          eyebrow="Telemetry"
          title="Infrastructure Real-Time"
          description="Live packet flow across our global edge network, updated continuously."
        />

        <div
          ref={mapRef}
          className="relative mx-auto mt-16 aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-card border border-white/[0.08] bg-white/[0.015]"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_20%,transparent_80%)]"
          />

          <svg
            aria-hidden
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            {REGION_NODES.slice(1).map((node) => (
              <line
                key={node.id}
                x1={`${REGION_NODES[0].x}%`}
                y1={`${REGION_NODES[0].y}%`}
                x2={`${node.x}%`}
                y2={`${node.y}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            ))}
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#9B5CFF" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </svg>

          {REGION_NODES.map((node) => (
            <div
              key={node.id}
              data-node
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <span
                className={cn(
                  "h-3 w-3 rounded-full shadow-[0_0_16px_4px]",
                  node.status === "active"
                    ? "bg-accent-blue shadow-accent-blue/50"
                    : "bg-accent-purple shadow-accent-purple/50"
                )}
              />
              <span className="whitespace-nowrap rounded-full border border-white/10 bg-base/80 px-3 py-1 text-[11px] font-medium text-accent-white backdrop-blur-sm">
                {node.label}:{" "}
                <span
                  className={
                    node.status === "active"
                      ? "text-accent-blue"
                      : "text-accent-purple"
                  }
                >
                  {node.status === "active" ? "Active" : "Syncing"}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
