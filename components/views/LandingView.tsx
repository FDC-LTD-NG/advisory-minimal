"use client";

import { View } from "@/lib/data/navigation";
import CardHeading from "@/components/ui/CardHeading";
import { siteConfig } from "@/lib/data";

export default function LandingView({
  onNavigate,
}: {
  onNavigate: (v: View) => void;
}) {
  return (
    <>
      <CardHeading>FDC Advisory</CardHeading>

      <p className="mt-5 font-sans text-sm leading-snug text-ink">
        {siteConfig.managerName} is a Lagos-based Fund and Portfolio Manager
        duly registered with the Securities and Exchange Commission (SEC) of
        Nigeria.
      </p>

      <p className="mt-3 font-sans text-sm leading-snug text-ink">
        We bring institutional discipline and modern technology to help
        individuals and institutions build, protect, and grow their wealth.
      </p>

      <p className="mt-3 font-sans text-sm leading-snug text-ink">
        FDC Advisory Limited is affiliated with{" "}
        <a
          href={siteConfig.affiliate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary underline underline-offset-4 transition-colors duration-200 hover:text-[#4C63D2]"
        >
          {siteConfig.affiliate.name}
        </a>
        , a well-established financial and economic advisory firm.
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-5">
        <button
          onClick={() => onNavigate("contact")}
          className="bg-ink px-5 py-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-[#FAFAFF] transition-all duration-200 hover:bg-[#4C63D2] hover:shadow-lg"
        >
          Invest
        </button>
        <a
          href={siteConfig.documents.prospectus}
          download
          className="font-sans text-sm font-semibold text-primary underline underline-offset-4 transition-colors duration-200 hover:text-[#4C63D2]"
        >
          Read Prospectus
        </a>
      </div>
    </>
  );
}
