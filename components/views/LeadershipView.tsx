import CardHeading from "@/components/ui/CardHeading";

const PEOPLE = [
  {
    name: "Chukwuma Adeyemi",
    role: "Founder & Chief Executive Officer",
    bio: "Mr. Adeyemi founded FDC Advisory in 2015 and serves as the firm's lead portfolio manager.",
  },
  {
    name: "Folake Ogundipe",
    role: "Managing Director, Investments",
    bio: "Mrs. Ogundipe oversees the firm's equity and balanced strategies. She joined in 2016.",
  },
  {
    name: "Ibrahim Danjuma",
    role: "Chief Operating Officer",
    bio: "Mr. Danjuma leads operations, technology, and client servicing across the firm.",
  },
  {
    name: "Ngozi Okonkwo",
    role: "Chief Financial Officer",
    bio: "Mrs. Okonkwo is responsible for finance, compliance, and regulatory reporting.",
  },
  {
    name: "Tunde Balogun",
    role: "Head of Research",
    bio: "Mr. Balogun leads the firm's bottom-up research process across Nigerian equities.",
  },
  {
    name: "Adaeze Nwosu",
    role: "Head of Risk",
    bio: "Mrs. Nwosu oversees portfolio risk, stress testing, and investment committee reporting.",
  },
  {
    name: "Yemi Adebayo",
    role: "Portfolio Manager, Fixed Income",
    bio: "Mr. Adebayo manages the firm's FGN and corporate bond mandates.",
  },
];

export default function LeadershipView() {
  return (
    <>
      <CardHeading>Managing Directors</CardHeading>

      <ul className="mt-8 space-y-7">
        {PEOPLE.map((person) => (
          <li key={person.name}>
            <h3 className="font-sans text-base font-bold text-ink">
              {person.name}
            </h3>
            <p className="mt-1 font-sans text-base leading-snug text-ink">
              {person.bio}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
