import CardHeading from "@/components/ui/CardHeading";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/data";

export default function ContactView() {
  return (
    <>
      <CardHeading>Contact</CardHeading>

      <p className="mt-4 font-sans text-sm leading-snug text-ink">
        Explore our services, discuss a partnership, or speak with our team.
        Just say the word.
      </p>

      <div className="mt-6">
        <ContactForm />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 border-t border-[#273469]/15 pt-6 sm:grid-cols-2">
        <div>
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
            Office
          </p>
          <p className="mt-2 font-sans text-xs leading-snug text-ink">
            {siteConfig.managerName}
            <br />
            9a Idejo Street
            <br />
            Off Adeola Odeku Street
            <br />
            Victoria Island, Lagos
            <br />
            Nigeria
          </p>
        </div>

        <div>
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
            Reach Us
          </p>
          <p className="mt-2 font-sans text-xs leading-snug text-ink">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="font-semibold text-primary transition-colors duration-200 hover:text-[#4C63D2]"
            >
              {siteConfig.contact.phone}
            </a>
            <br />
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-semibold text-primary underline underline-offset-4 transition-colors duration-200 hover:text-[#4C63D2]"
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
