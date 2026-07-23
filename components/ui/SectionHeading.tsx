import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl font-display text-4xl font-medium text-accent-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base text-white/90 sm:text-lg">
          {description}
        </p>
      )}
      <span className="h-px w-16 bg-gradient-purple-blue" />
    </div>
  );
}
