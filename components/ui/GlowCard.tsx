"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  accent?: "purple" | "blue";
  tilt?: boolean;
}

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
      transform: tilt
        ? `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
        : undefined,
    });
  }

  function handleMouseLeave() {
    setStyle({
      transform:
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)",
    });
  }

return (
  <div
    ref={ref}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={style}
    className={cn(
      "group relative overflow-hidden rounded-card p-[1px] transition-transform duration-300",
      className
    )}
  >
    {/* Animated Border */}
    <div className="absolute inset-0 rounded-card overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <div
        className={cn(
          "absolute -inset-[200%] animate-[border-spin_4s_linear_infinite]",
          accent === "purple"
            ? "bg-[conic-gradient(from_0deg,#9B5CFF,transparent_20%,#22D3EE,transparent_40%,#9B5CFF)]"
            : "bg-[conic-gradient(from_0deg,#22D3EE,transparent_20%,#9B5CFF,transparent_40%,#22D3EE)]"
        )}
      />
    </div>

    {/* Card */}
    <div className="relative h-full rounded-card bg-base-card border border-white/10 p-8 backdrop-blur-md">
      {children}
    </div>
  </div>
);
}