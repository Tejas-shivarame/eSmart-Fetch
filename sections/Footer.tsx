import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

import {
  FOOTER_LINKS,
  SOCIAL_LINKS,
  COMPANY,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-black">
      {/* ============================================================ */}
      {/* Main Footer */}
      {/* ============================================================ */}

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* ======================================================== */}
          {/* Company / Logo */}
          {/* ======================================================== */}

          <div className="flex flex-col">
            <Link
              href="/"
              aria-label="eSmart Fetch Home"
              className="inline-flex w-fit items-center"
            >
              <Image
                src="/images/esmart-Fetch.png"
                alt="eSmart Fetch"
                width={875}
                height={350}
                className="h-[50px] w-[180px] object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">
              Smart Fetch delivers integrated security, fire safety, and
              IT infrastructure solutions for enterprises, healthcare
              facilities, and institutions.
            </p>

            {/* Social Links */}
            {SOCIAL_LINKS?.length > 0 && (
              <div className="mt-6 flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:border-accent-purple/40 hover:bg-accent-purple/10 hover:text-accent-purple"
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* Footer Links */}
          {/* ======================================================== */}

          {FOOTER_LINKS.map((group) => (
            <div
              key={group.title}
              className="flex flex-col"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-purple">
                {group.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors duration-300 hover:text-accent-blue"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ======================================================== */}
          {/* Contact Us */}
          {/* ======================================================== */}

          <div className="flex flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-purple">
              Contact Us
            </h3>

            <div className="mt-5 flex flex-col gap-4">

              {/* Locations */}
              {COMPANY.locations.map((loc) => (
                <div
                  key={loc.label}
                  className="flex items-start gap-3"
                >
                  <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent-blue" />

                  <p className="text-sm leading-6 text-white/70">
                    <span className="font-medium text-white/90">
                      {loc.label}:
                    </span>{" "}
                    {loc.address}
                  </p>
                </div>
              ))}

              {/* Phone */}
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-3 text-sm text-white/70 transition-colors duration-300 hover:text-white"
              >
                <Phone className="h-4 w-4 flex-none text-accent-blue" />

                <span>
                  +91-{COMPANY.phoneDisplay}
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-sm text-white/70 transition-colors duration-300 hover:text-white"
              >
                <Mail className="h-4 w-4 flex-none text-accent-blue" />

                <span className="break-all">
                  {COMPANY.email}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* Bottom Footer */}
        {/* ============================================================ */}

        <div className="mt-14 border-t border-white/[0.06] pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">

            <p className="text-xs text-white/50">
              © {year} eSmart Fetch. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <Link
                href="/privacy-policy"
                className="text-xs text-white/50 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-xs text-white/50 transition-colors hover:text-white"
              >
                Terms & Conditions
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}