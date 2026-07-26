"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SiWhatsapp } from "react-icons/si";
import { COMPANY } from "@/lib/constants";

export function Navbar() {
  const { scrolled } = useScrollProgress();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-border bg-base/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-container items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="eSmart Fetch home"
        >
          <Image
            src="/images/eSmart-Fetch-logo-Navabar.png"
            alt="eSmart Fetch Logo"
            width={240}
            height={68}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative pb-1 text-sm font-medium transition-colors",
                    active
                      ? "text-accent-blue after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-accent-blue"
                      : "text-accent-gray hover:text-accent-white"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`https://wa.me/${COMPANY.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-medium text-[#25D366] transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:shadow-[#25D366]/30"
            >
              <SiWhatsapp className="text-lg transition-transform duration-300 group-hover:scale-110" />
              <span>WhatsApp Us</span>
            </a>

            <ThemeToggle />
          </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="text-accent-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-base/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => {
                const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block py-2.5 text-sm font-medium",
                        active ? "text-accent-blue" : "text-accent-gray hover:text-accent-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-4 flex justify-center">
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}