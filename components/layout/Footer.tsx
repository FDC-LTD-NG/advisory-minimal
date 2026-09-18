"use client";

import { View } from "@/lib/data/navigation";

const FOOTER_NAV: { label: string; view: View }[] = [
  { label: "About", view: "about" },
  { label: "Leadership", view: "leadership" },
  { label: "Contact", view: "contact" },
];

export default function Footer({
  onNavigate,
}: {
  onNavigate: (v: View) => void;
}) {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-20 flex flex-col-reverse items-start gap-4 px-8 py-6 md:flex-row md:items-end md:justify-between md:px-16">
      <p className="flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-[11px] font-semibold text-[#FAFAFF]">
        <span>© {new Date().getFullYear()} FDC Advisory</span>
        <a
          href="https://fdcng.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[#E4D9FF]"
        >
          fdcng.com
        </a>
      </p>

      <nav className="bg-[#30343F]/85 backdrop-blur-sm">
        <ul className="flex items-center px-5 py-2.5">
          {FOOTER_NAV.map((item, i) => (
            <li key={item.view} className="flex items-center">
              {i > 0 && <span className="mx-3 h-px w-4 bg-[#E4D9FF]" />}
              <button
                onClick={() => onNavigate(item.view)}
                className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-[#FAFAFF] transition-colors duration-200 hover:text-[#E4D9FF]"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
