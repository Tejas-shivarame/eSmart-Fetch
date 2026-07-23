import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
// import { Zap } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS, COMPANY } from "@/lib/constants";
import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] px-6 py-16">
      <div className="mx-auto grid max-w-container gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
        <div className="flex flex-col gap-4">
 <Link
  href="/"
  className="flex items-center gap-3"
  aria-label="Smart Fetch home"
>
  <Image
    src="images/eSmart-Fetch-logo.png"
    alt="eSmart Fetch Logo"
    width={50} 
    height={180}
    priority
    className="h-16 w-auto object-contain"
  />  
</Link>
          <p className="max-w-xs text-sm text-white/90">
            Leading provider of technology solutions — innovating for a
            safer, smarter future with top-tier security and audiovisual
            systems.
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/90 transition-colors hover:border-accent-blue/40 hover:text-accent-blue"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {FOOTER_LINKS.map((group) => (
          <div key={group.title} className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-purple">
              {group.title}
            </span>
            {group.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/90 transition-colors hover:text-accent-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}

        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-purple">
            Contact Us
          </span>
          {COMPANY.locations.map((loc) => (
            <div key={loc.label} className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent-blue" />
              <span className="text-sm text-white/90">
                <span className="font-medium text-accent-white/80">
                  {loc.label}:
                </span>{" "}
                {loc.address}
              </span>
            </div>
          ))}
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2.5 text-sm text-white/90 transition-colors hover:text-accent-white"
          >
            <Phone className="h-4 w-4 flex-none text-accent-blue" />
            +91-{COMPANY.phoneDisplay}
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="flex items-center gap-2.5 text-sm text-white/90 transition-colors hover:text-accent-white"
          >
            <Mail className="h-4 w-4 flex-none text-accent-blue" />
            {COMPANY.email}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-container border-t border-white/[0.06] pt-6">
        <p className="text-center text-xs text-white/90">
          &copy; {year} Smart Fetch Infra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
