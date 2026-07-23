import { cn } from "@/lib/utils";

interface StatBlockProps {
  label: string;
  value: string;
  accent?: "purple" | "blue";
  className?: string;
}

/**
 * Displays a single stat (label above value). Kept as static text rather
 * than an animated counter where the value is a formatted string like
 * "<2ms" or "PB/s" that can't be meaningfully counted up.
 */
export function StatBlock({ label, value, accent, className }: StatBlockProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent-gray">
        {label}
      </span>
      <span
        className={cn(
          "font-display text-2xl font-medium sm:text-3xl",
          accent === "purple" && "text-accent-purple",
          accent === "blue" && "text-accent-blue",
          !accent && "text-accent-white"
        )}
      >
        {value}
      </span>
    </div>
  );
}
