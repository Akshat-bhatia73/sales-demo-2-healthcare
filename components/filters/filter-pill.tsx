"use client";

import { cn } from "@/lib/utils";

interface FilterPillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function FilterPill({ label, active, onClick }: FilterPillProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150",
        active
          ? "bg-white border border-gray-200 shadow-md"
          : "bg-gradient-to-br from-white to-gray-300/20 text-neutral-700 border border-gray-200 hover:bg-white"
      )}
    >
      {label}
    </button>
  );
}