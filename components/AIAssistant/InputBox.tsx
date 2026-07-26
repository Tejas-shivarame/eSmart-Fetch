"use client";

import { useRef, type KeyboardEvent } from "react";
import { Send } from "lucide-react";

const MAX_LEN = 500;

export function InputBox({
  value,
  onChange,
  onSend,
  disabled,
}: {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  disabled?: boolean;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !disabled) onSend();
    }
  }

  return (
    <div className="border-t border-border p-3">
      <div className="flex items-end gap-2 rounded-2xl border border-border bg-base-card/40 px-3 py-2 focus-within:border-accent-blue">
        <textarea
          ref={ref}
          autoFocus
          rows={1}
          value={value}
          maxLength={MAX_LEN}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask eSmart Fetch AI..."
          className="max-h-24 flex-1 resize-none bg-transparent text-sm text-accent-white placeholder:text-accent-gray/60 outline-none"
        />
        <button
          type="button"
          onClick={onSend}
          disabled={disabled || !value.trim()}
          aria-label="Send message"
          className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gradient-purple-blue text-white transition-transform hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-1.5 flex justify-between px-1 text-[10px] text-accent-gray/60">
        <span>Enter to send · Shift+Enter for new line</span>
        <span>{value.length}/{MAX_LEN}</span>
      </div>
    </div>
  );
}