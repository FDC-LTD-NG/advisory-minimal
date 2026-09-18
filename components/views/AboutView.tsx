import CardHeading from "@/components/ui/CardHeading";
import { siteConfig } from "@/lib/data";

export default function AboutView() {
  return (
    <>
      <CardHeading>About Us</CardHeading>

      <p className="mt-6 font-sans text-base leading-snug text-ink">
        {siteConfig.managerName}, a private limited liability company, has been
        duly incorporated in Nigeria since {siteConfig.incorporated} under the
        registration number {siteConfig.managerRC}. The company's registered
        office is situated at 9a Idejo Street, Victoria Island, Lagos.
      </p>

      <p className="mt-4 font-sans text-base leading-snug text-ink">
        The company is registered and licensed by the Securities and Exchange
        Commission of Nigeria (SEC) in {siteConfig.secLicensed} to operate as
        Fund/Portfolio Managers.
      </p>

      <p className="mt-4 font-sans text-base leading-snug text-ink">
        It specializes in managing funds and investment portfolios for
        individual and institutional clients alike, with a focus on strategic
        asset allocation, investment analysis, and continuous adjustments to
        investments to align with the financial goals and risk tolerances of its
        clients.
      </p>

      <p className="mt-4 font-sans text-base leading-snug text-ink">
        Our team consists of individuals with outstanding integrity and
        impressive track records. Their extensive professional experience
        provides a valuable foundation for shaping the company's policies and
        guiding its business strategy.
      </p>
    </>
  );
}
