import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-purple",
        variant === "primary" &&
          "bg-gradient-purple-blue text-white shadow-glow hover:scale-[1.03] hover:shadow-[0_0_50px_-8px_rgba(155,92,255,0.55)] active:scale-[0.98]",
        variant === "secondary" &&
          "border border-white/15 bg-white/[0.02] text-accent-white backdrop-blur-sm hover:border-accent-blue/50 hover:bg-white/[0.05] hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
