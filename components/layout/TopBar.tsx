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
        className="font-serif text-sm uppercase tracking-[0.35em] text-surface transition-all duration-200 hover:text-accent md:text-base"
      >
        FDC ADVISORY
      </button>
      <button
        onClick={() => onNavigate("contact")}
        className="bg-accent px-5 py-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-ink transition-all duration-200 hover:bg-surface hover:shadow-lg md:px-6 md:text-[11px]"
      >
        Invest
      </button>
    </header>
  );
}
