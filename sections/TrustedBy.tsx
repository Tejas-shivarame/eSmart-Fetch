"use client";

import Image from "next/image";

interface CompanyLogo {
  name: string;
  image: string;
}

interface TrustedByProps {
  logos: CompanyLogo[];
  title?: string;
}

export function TrustedBy({
  logos,
  title = "Trusted by Global Leaders",
}: TrustedByProps) {
  const track = [...logos, ...logos];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] py-14">
      <h2 className="text-center font-display text-2xl font-medium text-accent-white sm:text-3xl">
        {title}
      </h2>

      <div className="mx-auto mt-3 h-px w-16 bg-gradient-purple-blue" />

      <div className="relative mt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-16">
          {track.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex h-14 w-36 shrink-0 items-center justify-center"
            >
              <Image
                src={company.image}
                alt={company.name}
                width={140}
                height={60}
                className="object-contain opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}