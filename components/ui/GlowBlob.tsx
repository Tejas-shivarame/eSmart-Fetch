import { cn } from "@/lib/utils";

interface GlowBlobProps {
  color?: "purple" | "blue";
  className?: string;
}

export function GlowBlob({ color = "purple", className }: GlowBlobProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-[120px] animate-pulse-slow",
        color === "purple" ? "bg-accent-purple/25" : "bg-accent-blue/20",
        className
      )}
    />
  );
}
