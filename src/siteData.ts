export type Service = {
  number: string
  title: string
  shortDescription: string
  description: string
}

export type Project = {
  slug: string
  title: string
  location: string
  sector: string
  services: string[]
  year: string
  status: string
  summary: string
  scope: string
  image: string
  gallery: string[]
  placeholder: true
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
  bbbeeLevel: "Level 1",
  cidbGrade: "Grade 7 GB",
  strongerPresence: ["Gauteng", "KwaZulu-Natal", "Mpumalanga", "Free State"],
}

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/projects" },
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

export const partnerPlaceholders = [
  { mark: "P01", name: "Partner logo placeholder 1" },
  { mark: "P02", name: "Partner logo placeholder 2" },
  { mark: "P03", name: "Partner logo placeholder 3" },
  { mark: "P04", name: "Partner logo placeholder 4" },
  { mark: "P05", name: "Partner logo placeholder 5" },
  { mark: "P06", name: "Partner logo placeholder 6" },
]

export const projects: Project[] = [
  {
    slug: "commercial-building-example",
    title: "Commercial Building Project",
    location: "Gauteng — placeholder",
    sector: "Commercial — placeholder",
    services: ["General Building", "Project Management"],
    year: "2026 — placeholder",
    status: "Completed — placeholder",
    summary:
      "Dummy project summary showing how a selected commercial construction project will be presented.",
    scope:
      "Placeholder scope covering coordinated building works, site management, programme coordination and project close-out. Replace this content with an approved project record before launch.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=950&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=850&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=850&fit=crop&auto=format",
    ],
    placeholder: true,
  },
  {
    slug: "industrial-upgrade-example",
    title: "Industrial Facility Upgrade",
    location: "Mpumalanga — placeholder",
    sector: "Industrial — placeholder",
    services: ["Factory Maintenance & Upgrades", "Construction & Civil Works"],
    year: "2025 — placeholder",
    status: "Completed — placeholder",
    summary:
      "Dummy project summary demonstrating an industrial maintenance and facility-upgrade case study.",
    scope:
      "Placeholder scope covering maintenance works, refurbishment, civil works and coordination around an operating facility. Replace this content with approved project evidence before launch.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1400&h=950&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=850&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=850&fit=crop&auto=format",
    ],
    placeholder: true,
  },
  {
    slug: "public-sector-refurbishment-example",
    title: "Public-Sector Refurbishment",
    location: "KwaZulu-Natal — placeholder",
    sector: "Public Sector — placeholder",
    services: ["Turnkey Projects", "Drywall & Ceiling Installations"],
    year: "2025 — placeholder",
    status: "Completed — placeholder",
    summary:
      "Dummy project summary illustrating how a public-sector refurbishment project may be showcased.",
    scope:
      "Placeholder scope covering refurbishment, interior partitioning, ceiling installations and coordinated handover. Replace this content with an approved project record before launch.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&h=950&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=850&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1200&h=850&fit=crop&auto=format",
    ],
    placeholder: true,
  },
]
