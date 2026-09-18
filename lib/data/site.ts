export const siteConfig = {
  fundName: "FDC Advisory Balanced Fund",
  managerName: "FDC Advisory Limited",
  managerShortName: "FDC Advisory",
  managerRC: "RC 979838",
  incorporated: "2011",
  secLicensed: "2025",

  description:
    "FDC Advisory Limited is a Lagos-based Fund and Portfolio Manager duly registered with the Securities and Exchange Commission (SEC) of Nigeria.",
  tagline:
    "Institutional discipline and modern technology for individuals and institutions.",

  heroImage:
    "https://website-content-953113807752-eu-west-1-an.s3.eu-west-1.amazonaws.com/advisory-logos-view.png",

  contact: {
    address:
      "9a Idejo Street, Off Adeola Odeku Street, Victoria Island, Lagos, Nigeria",
    phone: "+234 (0) 000 000 0000",
    email: "info@fdcadvisory.com",
    website: "www.fdcadvisory.com",
    officeHours: "Monday – Friday, 8:00 AM – 5:00 PM WAT",
  },

  documents: {
    prospectus: "https://fdcadvisory.com/funds/balancedfund.pdf",
    trustDeed: "/documents/fdc-balanced-fund-trust-deed.pdf",
    managerProfile: "/documents/fdc-advisory-profile.pdf",
    applicationForm: "/documents/fdc-balanced-fund-application.pdf",
  },

  affiliate: {
    name: "FDC Limited",
    url: "https://fdcng.com",
  },

  external: {
    sec: "https://sec.gov.ng",
    fman: "https://fman.org.ng",
  },
} as const;