"use client";

import { motion } from "framer-motion";

export function TypingIndicator() {
  return (
    <div className="mr-auto flex w-fit items-center gap-1.5 rounded-2xl rounded-bl-sm bg-base-card px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-accent-gray"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}