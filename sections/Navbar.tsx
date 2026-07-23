"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function Navbar() {
  const { scrolled } = useScrollProgress();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-base/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-container items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2" aria-label="Smart Fetch home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-purple-blue">
            <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-semibold text-accent-white">
            Smart Fetch
          </span>
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
                      : "text-white/90 hover:text-accent-white"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="#login"
            className="text-sm font-medium text-white/90 transition-colors hover:text-accent-white"
          >
            Login
          </Link>
          <Button variant="primary" className="px-5 py-2.5 text-xs">
            Deploy Now
          </Button>
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
            className="overflow-hidden border-t border-white/[0.06] bg-base/95 backdrop-blur-xl lg:hidden"
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
                        active ? "text-accent-blue" : "text-white/90 hover:text-accent-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-3 flex flex-col gap-3">
                <Link href="#login" className="text-sm font-medium text-white/90">
                  Login
                </Link>
                <Button variant="primary" className="w-full">
                  Deploy Now
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
