import CardHeading from "@/components/ui/CardHeading";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/data";

export default function ContactView() {
  return (
    <>
      <CardHeading>Contact</CardHeading>

      <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div>
          <p className="font-sans text-base font-bold text-ink">
            {siteConfig.managerName}
          </p>
          <p className="mt-1 font-sans text-base leading-snug text-ink">
            {siteConfig.contact.address}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-sans text-base text-ink">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hover:text-primary"
            >
              {siteConfig.contact.phone}
            </a>
          </p>
          <p className="font-sans text-base text-ink">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="underline underline-offset-4 hover:text-primary"
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-ink/10 pt-8">
        <ContactForm />
      </div>

      <p className="mt-8 border-t border-ink/10 pt-6 font-sans text-xs leading-relaxed text-ink/60">
        Part of the{" "}
        <a
          href="https://fdcng.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-primary"
        >
          FDC Ltd
        </a>{" "}
        group — fdcng.com
      </p>
    </>
  );
}
