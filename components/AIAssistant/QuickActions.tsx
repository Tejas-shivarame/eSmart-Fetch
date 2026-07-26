"use client";

import { QUICK_ACTIONS } from "./knowledge";

export function QuickActions({ onSelect }: { onSelect: (query: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 px-4 pb-3">
      {QUICK_ACTIONS.map((action) => (
        <button
          key={action.label}
          type="button"
          onClick={() => onSelect(action.query)}
          className="rounded-full border border-border bg-base-card/60 px-3 py-1.5 text-xs font-medium text-accent-gray transition-colors hover:border-accent-blue/50 hover:text-accent-white"
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}