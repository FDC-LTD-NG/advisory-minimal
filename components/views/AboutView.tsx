import CardHeading from "@/components/ui/CardHeading";
import { siteConfig } from "@/lib/data";

export default function AboutView() {
  return (
    <>
      <CardHeading>About Us</CardHeading>

      <p className="mt-6 font-sans text-base leading-snug text-ink">
        {siteConfig.managerName} is a Lagos-based investment advisory firm
        registered with the Securities and Exchange Commission (SEC) Nigeria and
        a member of the Fund Managers Association of Nigeria (FMAN).
      </p>

      <p className="mt-4 font-sans text-base leading-snug text-ink">
        Since 2015 we have advised and managed capital for individuals, family
        offices, and institutions — combining deep local research with modern
        portfolio technology, and a bias toward long-term value over short-term
        noise.
      </p>

      <p className="mt-4 font-sans text-base leading-snug text-ink">
        The firm's work is guided by a single principle: to deliver
        institutional-grade thinking with the responsiveness of a boutique. We
        believe that patience, transparency, and rigorous research are the
        foundations of lasting client relationships.
      </p>
    </>
  );
}
