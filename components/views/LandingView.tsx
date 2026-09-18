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

      <p className="mt-6 font-sans text-base leading-snug text-ink">
        {siteConfig.managerName} is a Lagos-based Fund and Portfolio Manager
        duly registered with the Securities and Exchange Commission (SEC) of
        Nigeria.
      </p>

      <p className="mt-4 font-sans text-base leading-snug text-ink">
        We bring institutional discipline and modern technology to help
        individuals and institutions build, protect, and grow their wealth.
      </p>

      <p className="mt-4 font-sans text-base leading-snug text-ink">
        FDC Advisory Limited is affiliated with{" "}
        <a
          href={siteConfig.affiliate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-primary"
        >
          {siteConfig.affiliate.name}
        </a>
        , a well-established financial and economic advisory firm with extensive
        experience in economic research, financial analysis, and advisory
        services.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-6">
        <button
          onClick={() => onNavigate("contact")}
          className="bg-ink px-6 py-3 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-surface transition-opacity hover:opacity-90"
        >
          Invest
        </button>
        <a
          href={siteConfig.documents.prospectus}
          download
          className="font-sans text-base text-ink underline underline-offset-4 hover:text-primary"
        >
          Read Prospectus
        </a>
      </div>
    </>
  );
}
