"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Bot, Headset } from "lucide-react";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const { scrolled } = useScrollProgress();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-base/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      {/* ================================================================ */}
      {/* Main Navbar */}
      {/* ================================================================ */}

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* ============================================================ */}
        {/* Logo */}
        {/* ============================================================ */}
        <div className="flex shrink-0 items-center">
        <Link
          href="/"
          aria-label="eSmart Fetch Home"
          onClick={() => setOpen(false)}
          className="flex items-center"
        >
        <Image
          src="/images/eSmart-Fetch-Navbar.png"
          alt="eSmartFetch"
          width={875}
          height={350}
          priority
          className="w-[165px] h-auto object-contain"
        />
        </Link>
      </div>

        {/* ============================================================ */}
        {/* Desktop Navigation */}
        {/* ============================================================ */}

        <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative pb-1 text-sm font-medium transition-colors duration-300",
                  isActive(link.href)
                    ? "text-cyan-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ============================================================ */}
        {/* Right Actions */}
        {/* ============================================================ */}

        <div className="flex items-center gap-3">

          {/* ---------------------------------------------------------- */}
          {/* Desktop Actions */}
          {/* ---------------------------------------------------------- */}

          <div className="hidden items-center gap-3 lg:flex">

            {/* AI Assistant */}
            <button
              type="button"
              aria-label="Open AI Assistant"
              onClick={() =>
                window.dispatchEvent(new Event("open-ai-assistant"))
              }
              className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 transition-all duration-300 hover:border-blue-400 hover:bg-blue-500 hover:text-white"
            >
              <Bot size={18} />
            </button>

            {/* Contact */}
            <Link
              href="/contact"
              aria-label="Contact us"
              className="flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400 transition-all duration-300 hover:border-orange-400 hover:bg-orange-500 hover:text-white"
            >
              <Headset size={18} />
            </Link>

            {/* Theme Toggle */}
            {/* <ThemeToggle /> */}
          </div>

          {/* ---------------------------------------------------------- */}
          {/* Mobile Theme Toggle */}
          {/* ---------------------------------------------------------- */}
{/* 
          <div className="lg:hidden">
            <ThemeToggle />
          </div> */}

          {/* ---------------------------------------------------------- */}
          {/* Mobile Hamburger */}
          {/* ---------------------------------------------------------- */}

          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="text-accent-white transition-colors hover:text-cyan-400 lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* ================================================================ */}
      {/* Mobile Menu */}
      {/* ================================================================ */}

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 lg:hidden",
          open
            ? "max-h-[600px] border-t border-border"
            : "max-h-0"
        )}
      >
        <div className="bg-zinc-950/95 px-6 py-5 backdrop-blur-xl">

          {/* Mobile Navigation */}
          <ul className="space-y-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block text-base font-medium transition-colors duration-300",
                    isActive(link.href)
                      ? "text-cyan-400"
                      : "text-white hover:text-cyan-400"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ========================================================== */}
          {/* Mobile Actions */}
          {/* ========================================================== */}

          <div className="mt-6 flex flex-col gap-3">

            {/* AI Assistant */}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                window.dispatchEvent(new Event("open-ai-assistant"));
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-3 text-sm font-medium text-blue-400 transition-all duration-300 hover:border-blue-400 hover:bg-blue-500 hover:text-white"
            >
              <Bot size={18} />
              <span>AI Assistant</span>
            </button>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-3 text-sm font-medium text-orange-400 transition-all duration-300 hover:border-orange-400 hover:bg-orange-500 hover:text-white"
            >
              <Headset size={18} />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}