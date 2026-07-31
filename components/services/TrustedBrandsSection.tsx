"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function TrustedBrandsSection({
  brands,
}: {
  brands: { name: string; logo: string }[];
}) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="rounded-full border border-accent-purple/30 bg-accent-purple/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-accent-purple">
            Trusted Brands
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Global Technology Partners
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-accent-gray">
            We partner with globally recognized manufacturers to deliver
            enterprise-grade fire protection solutions.
          </p>
        </div>

        <Marquee
          speed={45}
          gradient={false}
          pauseOnHover
          autoFill
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="mx-10 flex h-28 w-52 items-center justify-center"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={180}
                height={90}
                className="max-h-24 w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}