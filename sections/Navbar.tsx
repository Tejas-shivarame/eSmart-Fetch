"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const { scrolled } = useScrollProgress();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-base/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-container items-center justify-between px-4 py-3 sm:px-6 lg:px-10 lg:py-4">

        {/* Logo */}
        <Link href="/" aria-label="eSmart Fetch home">
          <Image
            src="/images/eSmart-Fetch-logo-Navabar.png"
            alt="eSmart Fetch Logo"
            width={240}
            height={68}
            priority
            className="h-10 w-auto sm:h-12 lg:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

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

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-4">
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

          {/* Mobile Theme Toggle */}
          <div className="lg:hidden">
            <ThemeToggle />
          </div>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="text-accent-white lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-base/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-2 px-6 py-5">

              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block py-2 text-sm font-medium",
                        active
                          ? "text-accent-blue"
                          : "text-accent-gray hover:text-accent-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              {/* WhatsApp */}
              <li className="mt-4">
                <a
                  href={`https://wa.me/${COMPANY.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-medium text-white transition hover:opacity-90"
                >
                  <SiWhatsapp className="text-xl" />
                  WhatsApp Us
                </a>
              </li>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}