export type NavigationItem = {
  label: string;
  href: string;
};

export type SiteHighlight = {
  value: string;
  label: string;
  description: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: "briefcase" | "bolt" | "clipboard" | "hardhat" | "shield" | "users";
  points: string[];
};

export type ProjectItem = {
  title: string;
  category: string;
  location: string;
  duration: string;
  status: string;
  scope: string;
  note: string;
};

export type GalleryItem = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const siteInfo = {
  brandName: "PrimeGrid Electrical Works",
  shortLabel: "PrimeGrid",
  tagline: "Electrical contracting and execution support",
  phone: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  email: "hello@firmname.in",
  location: "Hardoi, Uttar Pradesh",
  whatsAppHref:
    "https://wa.me/919000000000?text=Hello%2C%20I%20want%20to%20discuss%20an%20electrical%20or%20tender-related%20project%20with%20your%20firm.",
  footerNote:
    "Demo content is intentionally written as a professional placeholder. Replace the firm identity, work history, contact details, and document references with verified client information before publishing.",
  navigation: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Certificates", href: "/certificates" },
    { label: "Tender Capabilities", href: "/tender-capabilities" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavigationItem[],
  heroPanels: [
    {
      title: "Field execution focus",
      description:
        "Built to present line work, installation, maintenance, and utility-support capability with strong operational clarity.",
      icon: "hardhat",
    },
    {
      title: "Tender-ready documentation",
      description:
        "Prepared for company profile sharing, registration summaries, and work-completion credibility without exposing sensitive records.",
      icon: "clipboard",
    },
    {
      title: "Partner-facing trust",
      description:
        "Useful for material suppliers, subcontractors, consultants, and private clients who need a serious first impression.",
      icon: "shield",
    },
    {
      title: "Scalable business system",
      description:
        "The same structure can later grow into enquiry automation, gallery management, profile downloads, or an admin panel.",
      icon: "users",
    },
  ] as const,
  heroOutcomes: [
    { value: "01", label: "Credibility-led first impression" },
    { value: "02", label: "Project showcase with safe wording" },
    { value: "03", label: "Lead and profile request readiness" },
  ],
  certificationHighlights: [
    "GST Registered",
    "Udyam or MSME Registered",
    "Licensed Electrical Contractor",
    "Work Completion Proof Available On Request",
  ],
  galleryCategories: [
    "Site work and active field teams",
    "Electrical panels and installation details",
    "Cable laying and line-side execution",
    "Safety equipment and compliance habits",
    "Vehicles, tools, and project support assets",
    "Completed installations and maintenance snapshots",
  ],
  formFields: [
    "Name",
    "Phone",
    "Email",
    "Company or department",
    "Work type",
    "Location",
    "Message",
    "Attachment upload",
  ],
};

export const siteImages = {
  heroBackdrop: "/images/dmitriy-zarivniy-N5okH8Hd3OM-unsplash.jpg",
  fieldCrew: "/images/shubham-nayak-6QzjlyY9XOM-unsplash.jpg",
  substationWide: "/images/le-toan-oN58dQxNsZE-unsplash.jpg",
  switchgearDetail: "/images/michael-pointner-fP5LU1iD5p4-unsplash.jpg",
};

export const heroTopUtilityItems = [
  "GST Registered",
  "MSME Registered",
  "Multi-District Operations",
];

export const heroActionBarPrompt =
  "Need manpower, maintenance, or cable laying support?";

export const heroActionBarShortcuts = [
  { label: "Manpower Support", href: "/services" },
  { label: "Maintenance Work", href: "/projects" },
  { label: "Cable Laying", href: "/contact" },
];

export const heroQuickActions = [
  { label: "Request Company Profile", href: "/contact#request-profile" },
  { label: "Need urgent manpower", href: "/contact" },
  { label: "Need material supply", href: "/contact" },
  { label: "Talk to Project Manager", href: siteInfo.phoneHref },
  { label: "WhatsApp Now", href: siteInfo.whatsAppHref },
];

export const heroProofPoints = [
  {
    value: "Utility",
    label: "Sector focus",
    description:
      "Aligned for power distribution, infrastructure, and field operations support work.",
  },
  {
    value: "Timed",
    label: "Execution approach",
    description:
      "Built to communicate readiness, discipline, and timely delivery without inflated claims.",
  },
  {
    value: "Ready",
    label: "Profile support",
    description:
      "Prepared for company profile requests, partner conversations, and document-based enquiries.",
  },
];

export const companyHighlights = [
  {
    value: "7+",
    label: "Core site sections",
    description:
      "Covers business profile, services, projects, certificates, gallery, tender capabilities, and contact.",
  },
  {
    value: "5",
    label: "Primary service groups",
    description:
      "Built around contracting, maintenance, supply, tender support, and manpower deployment.",
  },
  {
    value: "6",
    label: "Project placeholders",
    description:
      "Ready to swap with verified work cards once the client shares real completed or ongoing work details.",
  },
  {
    value: "MVP",
    label: "Fast launch scope",
    description:
      "Enough to pitch the client, collect content, and publish a polished first version without backend complexity.",
  },
] satisfies SiteHighlight[];

export const homepageReasons = [
  "Trust matters more than flash for contractor and government-linked business websites.",
  "Safe wording avoids unverified official affiliation while still showing domain experience.",
  "Services and projects are organized to help procurement and partner conversations start faster.",
  "The same content can later power a company profile PDF, proposal pack, or admin upgrade.",
];

export const aboutPoints = [
  {
    title: "Who the website is for",
    description:
      "This design is ideal for an electrical contractor, subcontractor, tender-support firm, or utility-sector service provider that wants a stronger digital presence without pretending to be an official government portal.",
  },
  {
    title: "How the copy should feel",
    description:
      "Clear, grounded, and professional. It should sound like a capable business that respects site discipline, documentation, timelines, and safety rather than a flashy marketing brand.",
  },
  {
    title: "What clients and partners should understand quickly",
    description:
      "What the firm does, where it works, what type of projects it can support, what certificates it holds, and how to contact the team for a serious enquiry or company profile request.",
  },
  {
    title: "Why this structure works",
    description:
      "Most contractor firms have enough operational substance but weak online presentation. This layout turns existing work, photos, registrations, and contact details into a convincing business asset.",
  },
];

export const services = [
  {
    title: "Electrical contracting",
    description:
      "Structured to present LT and HT line work, cable support, pole-side execution, earthing, transformer-related support, and installation activity with clean business language.",
    icon: "bolt",
    points: ["LT and HT support", "Cable laying", "Panel installation"],
  },
  {
    title: "Maintenance and repair",
    description:
      "Covers planned maintenance, fault rectification, inspection, breakdown response, and AMC-oriented site support for ongoing operational requirements.",
    icon: "shield",
    points: ["Maintenance visits", "Fault response", "AMC support"],
  },
  {
    title: "Supply and procurement",
    description:
      "Useful for firms that supply cables, poles, panels, hardware, safety items, or BOQ-based project materials as part of electrical execution work.",
    icon: "briefcase",
    points: ["Material supply", "BOQ items", "Safety equipment"],
  },
  {
    title: "Tender execution support",
    description:
      "Explains how the firm supports site coordination, BOQ understanding, documentation, measurement, billing assistance, and execution planning.",
    icon: "clipboard",
    points: ["Documentation", "Measurement support", "Billing coordination"],
  },
  {
    title: "Manpower deployment",
    description:
      "A strong category for electricians, supervisors, helpers, site engineers, or safety staff supplied for installation and maintenance assignments.",
    icon: "users",
    points: ["Electricians", "Helpers", "Site engineers"],
  },
  {
    title: "Field supervision and safety",
    description:
      "Highlights disciplined execution culture, team coordination, and safety-first working methods that are especially important in utility and infrastructure environments.",
    icon: "hardhat",
    points: ["Site supervision", "Safety approach", "Execution discipline"],
  },
] satisfies ServiceItem[];

export const projects = [
  {
    title: "11KV line maintenance support",
    category: "Electrical maintenance",
    location: "Hardoi, Uttar Pradesh",
    duration: "3 months",
    status: "Completed",
    scope:
      "Field maintenance coordination, line-side inspection, cable support activity, and manpower deployment for utility-support work.",
    note:
      "Use real work-order-backed project titles when available. Otherwise present the work as utility-sector support or tender-based electrical execution.",
  },
  {
    title: "Rural feeder cable and pole-side execution",
    category: "Line work",
    location: "Sitapur, Uttar Pradesh",
    duration: "Ongoing package",
    status: "Ongoing",
    scope:
      "Execution assistance covering cable movement, pole-side work support, field supervision, and site coordination across distributed work points.",
    note:
      "A project like this benefits greatly from field photos, district mention, and carefully worded client-type references.",
  },
  {
    title: "Metering and field installation assistance",
    category: "Metering support",
    location: "Lucknow Division",
    duration: "45 days",
    status: "Completed",
    scope:
      "Support for installation activity, manpower alignment, site records, and execution follow-up for meter and related field tasks.",
    note:
      "Where direct department naming is not approved, use service-oriented descriptions rather than formal ownership claims.",
  },
  {
    title: "Electrical panel and earthing package",
    category: "Installation work",
    location: "Kanpur, Uttar Pradesh",
    duration: "2 months",
    status: "Completed",
    scope:
      "Panel installation support, earthing coordination, safety compliance, and site progress management for electrical infrastructure work.",
    note:
      "This card layout is ideal for showing before-and-after visuals or equipment imagery once real media is available.",
  },
  {
    title: "Breakdown response and inspection support",
    category: "Maintenance response",
    location: "Barabanki district",
    duration: "Annual support",
    status: "Ongoing",
    scope:
      "Inspection visits, field troubleshooting coordination, maintenance records, and execution readiness for recurring operational needs.",
    note:
      "A recurring service card like this helps position the firm as dependable rather than one-time only.",
  },
  {
    title: "Tender-based manpower and materials package",
    category: "Tender support",
    location: "Multiple districts",
    duration: "Package basis",
    status: "Completed",
    scope:
      "Skilled manpower support, essential material coordination, and documentation assistance aligned with tender-based project needs.",
    note:
      "This is a useful portfolio format for firms that work across several locations under similar scopes.",
  },
] satisfies ProjectItem[];

export const certificates = [
  {
    title: "GST registration",
    status: "Public summary",
    description:
      "Display registered status, state of registration, and verification readiness while keeping full certificate copies private until a genuine business discussion starts.",
  },
  {
    title: "PAN and Udyam or MSME profile",
    status: "On request",
    description:
      "These help strengthen credibility but should be presented carefully with masking or request-based sharing where appropriate.",
  },
  {
    title: "Electrical contractor license",
    status: "Priority highlight",
    description:
      "One of the strongest trust-building items for a contractor website. A public summary is usually enough unless document sharing is requested.",
  },
  {
    title: "Completion records and work-order references",
    status: "Controlled access",
    description:
      "These are powerful proof assets, but should only be published if permissions are clear. Otherwise, mention availability on request.",
  },
];

export const tenderCapabilities = [
  "BOQ understanding and scope breakdown",
  "Site survey support and execution planning",
  "Material estimation and procurement coordination",
  "Vendor and manpower alignment",
  "Measurement, billing, and progress documentation support",
  "Compliance-first execution for utility and infrastructure assignments",
];

export const tenderCategories = [
  "Electrical installation",
  "Maintenance contracts",
  "Material supply",
  "Manpower-based work",
  "Utility infrastructure support",
  "Repair and replacement work",
];

export const officialTenderLinks = [
  {
    title: "UPPCL tenders",
    href: "https://uppcl.org/uppcl/en/page/tender",
    description:
      "Direct users to the official tender page for authentic notices, departmental information, and current procurement references.",
  },
  {
    title: "UP Government eProcurement portal",
    href: "https://etender.up.nic.in",
    description:
      "A useful official procurement reference point for government-related tender listings and bidding workflows in Uttar Pradesh.",
  },
];

export const projectTimeline = [
  {
    title: "Tender or work package intake",
    description:
      "Initial scope review, work-type understanding, and site-readiness assessment before operational planning begins.",
  },
  {
    title: "Survey and mobilization planning",
    description:
      "Field survey inputs, manpower alignment, material planning, and execution sequencing for a cleaner start.",
  },
  {
    title: "Execution and supervision",
    description:
      "The core site phase covering installation, line work, maintenance activity, coordination, and daily progress discipline.",
  },
  {
    title: "Measurement and documentation",
    description:
      "Measurement support, reporting, billing records, and compliance-oriented project closeout preparation.",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Active site work",
    description:
      "Best used for real images showing electricians, supervisors, and line-side activity during live project execution.",
    imageSrc: siteImages.fieldCrew,
    imageAlt:
      "Electrical field team working together beside transformer equipment.",
  },
  {
    title: "Electrical panels and components",
    description:
      "Supports installation credibility when the client has clean visuals of panels, hardware, and finished electrical assemblies.",
    imageSrc: siteImages.switchgearDetail,
    imageAlt:
      "Close-up of electrical switchgear and insulated components at a utility installation.",
  },
  {
    title: "Cable laying snapshots",
    description:
      "Useful for demonstrating labor intensity, field scale, and coordinated progress in trenching or routing work.",
    imageSrc: siteImages.heroBackdrop,
    imageAlt:
      "High-voltage transmission towers and overhead lines against the sky.",
  },
  {
    title: "Safety and PPE culture",
    description:
      "Photos showing helmets, gloves, barricading, supervision, and disciplined site practice improve trust immediately.",
    imageSrc: siteImages.fieldCrew,
    imageAlt:
      "Workers in safety helmets and reflective gear during live field activity.",
  },
  {
    title: "Vehicles and equipment",
    description:
      "A practical category for ladders, transport, tools, measuring devices, and on-site support resources.",
    imageSrc: siteImages.substationWide,
    imageAlt:
      "Wide view of high-voltage equipment and structural frames in an electrical yard.",
  },
  {
    title: "Completed installations",
    description:
      "Finishing visuals help visitors understand that the firm is not only active on site but capable of delivering complete results.",
    imageSrc: siteImages.switchgearDetail,
    imageAlt:
      "Completed electrical infrastructure hardware in warm evening light.",
  },
];

  export const contactReasons = [
  "Electrical work enquiry",
  "Tender partnership discussion",
  "Material supply proposal",
  "Manpower requirement",
  "Maintenance contract request",
  "Company profile request",
];
