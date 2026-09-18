"use client";

import { View } from "@/lib/data/navigation";

export default function TopBar({
  onNavigate,
}: {
  onNavigate: (v: View) => void;
}) {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-8 py-8 md:px-16 md:py-10">
      <button
        onClick={() => onNavigate("landing")}
        className="font-serif text-sm uppercase tracking-[0.35em] text-surface transition-opacity hover:opacity-80 md:text-base"
      >
        FDC ADVISORY
      </button>
      <button
        onClick={() => onNavigate("contact")}
        className="bg-accent px-6 py-2.5 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-ink transition-opacity hover:opacity-90"
      >
        Invest
      </button>
    </header>
  );
}
