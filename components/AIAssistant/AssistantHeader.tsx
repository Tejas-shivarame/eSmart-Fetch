"use client";

import { X, Trash2, Sparkles } from "lucide-react";
import { COMPANY_NAME } from "./knowledge";

export function AssistantHeader({
  onClose,
  onClear,
}: {
  onClose: () => void;
  onClear: () => void;
}) {
  return (
    <div className="flex items-center justify-between border-b border-border px-4 py-3.5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-purple-blue">
          <Sparkles className="h-4 w-4 text-white" />
        </span>
        <div>
          <p className="font-display text-sm font-semibold text-accent-white">
            {COMPANY_NAME} AI
          </p>
          <p className="flex items-center gap-1.5 text-xs text-accent-gray">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Always here to help
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={onClear}
          aria-label="Clear chat"
          className="flex h-8 w-8 items-center justify-center rounded-full text-accent-gray transition-colors hover:bg-base-card hover:text-accent-white"
        >
          <Trash2 className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close assistant"
          className="flex h-8 w-8 items-center justify-center rounded-full text-accent-gray transition-colors hover:bg-base-card hover:text-accent-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}