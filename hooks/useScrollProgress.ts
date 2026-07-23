"use client";

import { useEffect, useState } from "react";

/**
 * Returns whether the page has been scrolled past a threshold,
 * plus overall scroll progress (0-1) for progress indicators.
 */
export function useScrollProgress(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(scrollTop > threshold);
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { scrolled, progress };
}
