import CardHeading from "@/components/ui/CardHeading";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/data";

export default function ContactView() {
  return (
    <>
      <CardHeading>Contact Us</CardHeading>

      <p className="mt-4 font-sans text-sm leading-snug text-ink">
        To learn more about what we do, our services, or partnership
        opportunities, please complete the form below. Our investor services
        team will respond to your enquiry promptly.
      </p>

      <div className="mt-6">
        <ContactForm />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 border-t border-ink/10 pt-6 sm:grid-cols-2">
        <div>
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-ink">
            Office
          </p>
          <p className="mt-2 font-sans text-sm leading-snug text-ink">
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
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-ink">
            Reach Us
          </p>
          <p className="mt-2 font-sans text-sm leading-snug text-ink">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hover:text-primary"
            >
              {siteConfig.contact.phone}
            </a>
            <br />
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="underline underline-offset-4 hover:text-primary"
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
