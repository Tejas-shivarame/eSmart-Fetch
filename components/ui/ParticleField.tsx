"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: string;
  delay: string;
}
const COLORS = [
  "bg-cyan-400",
  "bg-sky-400",
  "bg-blue-500",
  "bg-indigo-400",
  "bg-violet-500",
];

/**
 * Renders a small field of drifting particles using CSS animation only
 * (no canvas / no per-frame JS), so it stays cheap on low-power devices.
 * Positions are randomized once per mount via useMemo.
 */
export function ParticleField({ count = 45 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, (_, id) => ({
      id,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 1,
      duration: `${Math.random() * 8 + 8}s`,
      delay: `${Math.random() * 6}s`,
    }));

    setParticles(generated);
  }, [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-accent-blue/60 animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}  
        />
      ))}
    </div>
  );
}
