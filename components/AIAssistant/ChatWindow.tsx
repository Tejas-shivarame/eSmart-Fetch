"use client";

import { useEffect, useRef } from "react";
import type { ChatMessage } from "./types";
import { ChatBubble } from "./ChatBubble";
import { TypingIndicator } from "./TypingIndicator";

export function ChatWindow({
  messages,
  typing,
}: {
  messages: ChatMessage[];
  typing: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  return (
    <div
      ref={scrollRef}
      className="flex-1 space-y-4 overflow-y-auto px-4 py-4 [scrollbar-width:thin] [scrollbar-color:rgb(var(--color-accent-gray))_transparent]"
    >
      {messages.map((m) => (
        <ChatBubble key={m.id} message={m} />
      ))}
      {typing && <TypingIndicator />}
    </div>
  );
}