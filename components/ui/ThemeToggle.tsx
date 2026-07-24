"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative flex h-11 w-[72px] items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
    >
      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
        <Sun
          className={`h-4 w-4 transition-colors duration-300 ${
            isDark ? "text-white/40" : "text-amber-400"
          }`}
        />
        <Moon
          className={`h-4 w-4 transition-colors duration-300 ${
            isDark ? "text-cyan-300" : "text-white/40"
          }`}
        />
      </div>

      {/* Sliding Thumb */}
      <div
        className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full
        bg-gradient-to-br from-cyan-400 to-blue-500
        shadow-lg shadow-cyan-500/30
        transition-transform duration-300 ease-in-out
        ${isDark ? "translate-x-8" : "translate-x-0"}`}
      >
        {isDark ? (
          <Moon className="h-5 w-5 text-white" />
        ) : (
          <Sun className="h-5 w-5 text-white" />
        )}
      </div>
    </button>
  );
}