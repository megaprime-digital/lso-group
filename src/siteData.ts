export type Service = {
  number: string
  title: string
  shortDescription: string
  description: string
}

export const company = {
  name: "LSO Group",
  legalName: "LSO GROUP (Pty) Ltd",
  enterpriseNumber: "2015/184104/07",
  established: "2015",
  email: "admin@lsogroup.co.za",
  phoneDisplay: "+27 71 7740 674",
  phoneHref: "+27717740674",
  website: "lsoprojects.co.za",
  addressLines: ["1 Protea Pl", "Sandown, Sandton, 2191", "South Africa"],
  strongerPresence: ["Gauteng", "KwaZulu-Natal", "Mpumalanga", "Free State"],
}

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
]

export const services: Service[] = [
  {
    number: "01",
    title: "General Building",
    shortDescription:
      "Building works shaped around the requirements of each project.",
    description:
      "General building services for commercial, public-sector, industrial and residential requirements, delivered with attention to scope, quality and coordination.",
  },
  {
    number: "02",
    title: "Construction & Civil Works",
    shortDescription:
      "Coordinated construction and civil works for built-environment projects.",
    description:
      "Construction and civil works delivered as coordinated project packages for public-sector, commercial, industrial and infrastructure environments.",
  },
  {
    number: "03",
    title: "Turnkey Projects",
    shortDescription:
      "Integrated project delivery from planning through completion.",
    description:
      "Turnkey project support that brings planning, construction coordination and completion under a single delivery approach.",
  },
  {
    number: "04",
    title: "Project Management",
    shortDescription:
      "Professional coordination across programme, quality, cost and communication.",
    description:
      "Project management focused on coordinating programme, quality, cost, stakeholders and communication throughout the delivery lifecycle.",
  },
  {
    number: "05",
    title: "Drywall & Ceiling Installations",
    shortDescription:
      "Interior partition and ceiling installations for new and existing spaces.",
    description:
      "Drywall, partition and ceiling installation services for new-build, fit-out, refurbishment and upgrade requirements.",
  },
  {
    number: "06",
    title: "Factory Maintenance & Upgrades",
    shortDescription:
      "Maintenance and upgrade work for industrial and factory environments.",
    description:
      "Maintenance, refurbishment and upgrade services planned around the practical requirements of industrial and factory environments.",
  },
]

export const audiences = [
  "Government departments, municipalities and SOEs",
  "Private companies and property developers",
  "Industrial and factory clients",
  "Homeowners and residential clients",
]
