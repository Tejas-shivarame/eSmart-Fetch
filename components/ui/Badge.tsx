import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  pulse?: boolean;
  className?: string;
}

export function Badge({ children, pulse = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-accent-gray backdrop-blur-sm",
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-blue" />
        </span>
      )}
      {children}
    </span>
  );
}
