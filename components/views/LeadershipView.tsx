import CardHeading from "@/components/ui/CardHeading";

const PEOPLE = [
  {
    name: "Olorogun Moses O. Taiga",
    role: "Board Chairman",
    bio: "Mr. Taiga is the chairman of Modant Marine Limited, Execon Holdings Limited, and Niger-Benue Transport Company Limited. A graduate of Finance & Accounting from the University of Lagos (1969), he qualified as a Chartered Accountant in 1978. He brings over 30 years of managerial experience across banking, conglomerates, and the oil and gas sector.",
  },
  {
    name: "Folakemi Makinde",
    role: "Managing Director",
    bio: "Mrs. Makinde is a seasoned professional with a strong background in finance and accounting. She graduated from the University of Kent, Canterbury, in 2001 with a BSc in Accounting and Finance, and is an Associate of the ACCA. She served as team lead for a capital raising exercise that raised ₦1 billion via Rights Issue, and chaired the steering committee responsible for strategically repositioning the company.",
  },
  {
    name: "Bismarck J. Rewane",
    role: "Director",
    bio: "Mr. Rewane is the Managing Director and CEO of Financial Derivatives Company. He graduated from the University of Ibadan with a Bachelor's degree in Economics in 1972 and has more than thirty years' experience as an economist, banker, and financial analyst. He is a Fellow of the Nigerian Institute of Bankers.",
  },
  {
    name: "Ngozi Nzegwu",
    role: "Director",
    bio: "Mrs. Nzegwu is a banker turned entrepreneur with close to 30 years of experience. She holds a BSc in Sociology (1980) and an MBA from the University of Lagos (1988). She was part of the team that set up Oceanic Bank as pioneer Treasurer, and is founder and CEO of Dugo Ltd. She is the founding President of APPSON.",
  },
  {
    name: "Tolulope Odugbemi",
    role: "Director",
    bio: "Ms. Odugbemi leads Performance Management and Strategy at Financial Derivatives Company. She is a seasoned accountant with over 10 years of experience in financial planning and strategy. She earned an MBA from Lagos Business School (2012) and holds a Bachelor's degree in Physiology from the University of Ibadan (2002).",
  },
];

export default function LeadershipView() {
  return (
    <>
      <CardHeading>Leadership</CardHeading>

      <ul className="mt-6 space-y-6">
        {PEOPLE.map((person) => (
          <li key={person.name}>
            <h3 className="font-sans text-sm font-bold text-ink">
              {person.name}
            </h3>
            <p className="mt-0.5 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
              {person.role}
            </p>
            <p className="mt-2 font-sans text-xs leading-snug text-ink/80">
              {person.bio}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
