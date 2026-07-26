"use client";

import { motion } from "framer-motion";
import type { ChatMessage } from "./types";
import { formatTime } from "./utils";
import { cn } from "@/lib/utils";

export function ChatBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={cn("flex flex-col gap-1", isUser ? "items-end" : "items-start")}
    >
      <div
        className={cn(
          "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          isUser
            ? "rounded-br-sm bg-gradient-purple-blue text-white"
            : "rounded-bl-sm bg-base-card text-accent-white"
        )}
      >
        {message.content}
      </div>
      <span className="px-1 text-[10px] text-accent-gray/70">
        {formatTime(message.timestamp)}
      </span>
    </motion.div>
  );
}