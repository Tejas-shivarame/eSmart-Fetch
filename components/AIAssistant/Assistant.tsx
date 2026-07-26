"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import type { ChatMessage } from "./types";
import { AssistantHeader } from "./AssistantHeader";
import { ChatWindow } from "./ChatWindow";
import { QuickActions } from "./QuickActions";
import { InputBox } from "./InputBox";
import { getBotResponse, generateId } from "./utils";
import { COMPANY_NAME } from "./knowledge";

const WELCOME: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content: `👋 Hello!\n\nI'm ${COMPANY_NAME} AI. I can answer questions about our company, services, technologies, careers, pricing, and how we can help your business.\n\nHow can I assist you today?`,
  timestamp: Date.now(),
};

export function Assistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  function send(query: string) {
    const text = query.trim();
    if (!text || typing) return;

    const userMsg: ChatMessage = {
      id: generateId(),
      role: "user",
      content: text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const reply: ChatMessage = {
        id: generateId(),
        role: "assistant",
        content: getBotResponse(text),
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, reply]);
      setTyping(false);
    }, 1000);
  }

  function clearChat() {
    setMessages([WELCOME]);
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gradient-purple-blue px-5 py-3.5 text-sm font-semibold text-white shadow-glow"
          >
            <Sparkles className="h-4 w-4" />
            Ask {COMPANY_NAME} AI
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 flex h-[650px] max-h-[calc(100vh-3rem)] w-[420px] max-w-[calc(100vw-1.5rem)] flex-col overflow-hidden rounded-card border border-border bg-base-raised/95 shadow-card backdrop-blur-xl"
          >
            <AssistantHeader onClose={() => setIsOpen(false)} onClear={clearChat} />
            <ChatWindow messages={messages} typing={typing} />
            {messages.length <= 1 && <QuickActions onSelect={send} />}
            <InputBox value={input} onChange={setInput} onSend={() => send(input)} disabled={typing} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}