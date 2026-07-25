"use client";

import { useEffect, useState, type RefObject } from "react";

interface Position {
  x: number;
  y: number;
}

/**
 * Tracks pointer position relative to a container element.
 * Returns percentages (0-100) so callers can drive gradients/parallax
 * without recalculating pixel math themselves.
 */
export function useMousePosition(ref: RefObject<HTMLElement>): Position {
  const [position, setPosition] = useState<Position>({ x: 50, y: 50 });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    function handleMove(event: MouseEvent) {
      const rect = node!.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      setPosition({ x, y });
    }

    node.addEventListener("mousemove", handleMove);
    return () => node.removeEventListener("mousemove", handleMove);
  }, [ref]);

  return position;
}