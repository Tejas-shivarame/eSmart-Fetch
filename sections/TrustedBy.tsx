"use client";

interface TrustedByProps {
  logos: string[];
  title?: string;
}

export function TrustedBy({
  logos,
  title = "Trusted by Global Leaders",
}: TrustedByProps) {
  // Duplicate the array for seamless looping
  const track = [...logos, ...logos];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] py-14">
      <h2 className="text-center font-display text-2xl font-medium text-accent-white sm:text-3xl">
        {title}
      </h2>

      <div className="mx-auto mt-3 h-px w-16 bg-gradient-purple-blue" />

      <div className="relative mt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-16">
          {track.map((logo, index) => (
            <span
              key={`${logo}-${index}`}
              className="flex h-10 shrink-0 items-center whitespace-nowrap font-display text-xl font-semibold tracking-wide text-accent-gray/60 grayscale transition-colors hover:text-accent-white"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}