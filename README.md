# Smart Fetch — Landing Page

Dark, futuristic SaaS landing page for Smart Fetch, built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/            Route, layout, global styles, metadata
components/ui/  Reusable primitives (Button, Badge, GlowCard, ParticleField, ...)
sections/       Page sections (Navbar, Hero, FeatureShowcase, ...)
hooks/          useMousePosition, useScrollProgress, useCountUp
lib/            cn() utility + site content constants
types/          Shared TypeScript interfaces
```

## Design tokens

| Token | Value |
| --- | --- |
| Background | `#070812` |
| Accent Purple | `#9B5CFF` |
| Accent Blue | `#22D3EE` |
| Accent White | `#F5F5F5` |
| Accent Gray | `#8B8B99` |
| Display font | Space Grotesk |
| Body font | Inter |
| Radius | 16px |
| Section spacing | 120px |
| Container | 1280px |

All tokens live in `tailwind.config.ts` — update colors, fonts, radius, and spacing there.

## Notes

- Reduced motion is respected globally (`app/globals.css`); particle field and hover tilt disable automatically.
- The "Coresync" illustration in `FeatureShowcase.tsx` is built from CSS/SVG rings rather than a static image — swap in a real 3D render via `next/image` when one is ready.
- The infrastructure map in `LiveInfrastructure.tsx` uses placeholder region coordinates (`lib/constants.ts` → `REGION_NODES`) rather than a real world-map SVG; drop in a proper map path if you want geographic accuracy.
- Email capture in `CTASection.tsx` is client-side only — wire `handleSubmit` up to your API route or provider of choice.
