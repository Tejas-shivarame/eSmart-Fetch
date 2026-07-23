"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  accent?: "purple" | "blue";
  tilt?: boolean;
}

/**
 * Card shell shared by feature tiles across the page. Tracks the pointer
 * to drive a soft radial glow and an optional subtle tilt, and keeps a
 * static gradient-border fallback for reduced-motion / keyboard users.
 */
export function GlowCard({
  children,
  className,
  accent = "purple",
  tilt = true,
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    const rotateX = tilt ? (0.5 - y / 100) * 6 : 0;
    const rotateY = tilt ? (x / 100 - 0.5) * 6 : 0;

    setStyle({
      "--glow-x": `${x}%`,
      "--glow-y": `${y}%`,
      transform: tilt
        ? `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
        : undefined,
    } as React.CSSProperties);
  }

  function handleMouseLeave() {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)",
    });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={cn(
        "group relative rounded-card border border-white/[0.08] bg-white/[0.02] p-8 shadow-card backdrop-blur-md transition-[transform,border-color] duration-300 ease-out will-change-transform",
        "hover:border-transparent motion-reduce:!transform-none",
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-card opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          "before:absolute before:inset-0 before:rounded-card before:p-px before:content-['']",
          accent === "purple"
            ? "before:bg-[radial-gradient(240px_circle_at_var(--glow-x)_var(--glow-y),rgba(155,92,255,0.55),transparent_70%)]"
            : "before:bg-[radial-gradient(240px_circle_at_var(--glow-x)_var(--glow-y),rgba(34,211,238,0.55),transparent_70%)]"
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
