export const site = {
  name: "TBPM",
  legalName: "Total Building & Property Management Pty Ltd",
  phone: "(02) 7240 1700",
  phoneHref: "tel:+61272401700",
  email: "info@tbpm.com.au",
  address: "39 Taunton Rd, Hurstville, NSW (by appointment only)",
  location: "Sydney, NSW, Australia",
  hours: "Mon–Fri 08:00–17:00",
  tagline:
    "Sydney's trusted partner for building management, cleaning, gardening, concierge services, and project management. We protect property assets and enhance resident satisfaction.",
  social: {
    facebook: "https://www.facebook.com/people/Total-Building-Property-Management/61560972854208/",
    instagram: "https://www.instagram.com/tbpm_sydney",
    linkedin: "https://www.linkedin.com/company/tbpm/",
  },
  external: {
    mybos: "https://app.mybos.com/",
    buildingLink: "https://auth.buildinglink.com/",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Full-Time On-Site Building Management", href: "/on-site-building-management" },
      { label: "Part-Time / Hybrid Building Management", href: "/remote-building-management" },
      { label: "Cleaning Services", href: "/cleaning-services" },
      { label: "Gardening Services", href: "/gardening-services" },
      { label: "Concierge Services", href: "/concierge-services" },
      { label: "Project Management", href: "/project-management" },
    ],
  },
  { label: "Knowledge", href: "/knowledge" },
  { label: "Contact", href: "/contact" },
];

export type ServicePage = {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  cardImage: string;
  gallery?: string[];
  icon: string;
  title: string;
  intro: string[];
  onboarding?: { title: string; description: string }[];
  included: string[];
  process: { title: string; description: string }[];
  bestSuited: string[];
  whyTbpm: { title: string; description: string }[];
};

export const services: ServicePage[] = [
  {
    slug: "on-site-building-management",
    navLabel: "Full-Time On-Site Building Management",
    metaTitle: "On-Site Building Management Sydney | TBPM",
    metaDescription:
      "Dedicated full-time on-site building managers for Sydney strata buildings — 5 days a week with 24/7 emergency support, contractor coordination and compliance reporting.",
    heroImage: "/images/construction-workers.jpg",
    cardImage: "/images/tbpm-icon-full-time-on-site.png",
    gallery: ["/images/9.png", "/images/8.png", "/images/7.png"],
    icon: "/images/tbpm-icon-full-time-on-site-white-2.png",
    title: "Full-Time On-Site Building Management",
    intro: [
      "Your building deserves a dedicated professional on the ground. Daily issues — leaks, lift faults, contractor no-shows, resident complaints — directly impact property value and resident satisfaction when they aren't dealt with immediately.",
      "TBPM places an experienced Building Manager at your property five days a week, backed by office support and after-hours emergency response. Our construction background means committees get informed advice when evaluating contractor proposals and defect rectification costs — not just facilities administration.",
    ],
    onboarding: [
      {
        title: "Free Energy & Financial Audit",
        description:
          "We identify cost savings in your building's energy use and service contracts at the start of every engagement.",
      },
      {
        title: "8 Hours Free Handyman Service Monthly",
        description:
          "Minor maintenance on common property each month — excludes licensed trades, works within individual lots, and capital projects. Available for 100+ lot buildings.",
      },
      {
        title: "Free Dedicated Building Website",
        description:
          "A professionally hosted website for your building with domain and hosting included — for resident information, notices and building updates.",
      },
    ],
    included: [
      "Dedicated on-site Building Manager, five days per week",
      "After-hours emergency phone support",
      "Daily common-property supervision across all building areas",
      "Single point of contact for residents, contractors and committees",
      "Regular site inspections identifying maintenance and safety issues",
      "Contractor coordination, supervision and compliance verification",
      "Maintenance and defect tracking through to completion",
      "Resident communication management",
      "Security and access control oversight",
      "Compliance support and documentation assistance",
      "Monthly building reports documenting completed works and recommendations",
      "Preventive maintenance planning",
      "Quarterly committee review meetings",
    ],
    process: [
      {
        title: "Free site assessment",
        description: "We inspect your building and meet your committee — no cost, no obligation.",
      },
      {
        title: "Tailored proposal",
        description: "A proposal built around your building's size, amenities and budget.",
      },
      {
        title: "Smooth transition",
        description: "Managed handover of records, keys, contractor relationships and resident communications.",
      },
    ],
    bestSuited: [
      "100+ lot residential buildings",
      "Mixed-use or premium-amenity properties",
      "Buildings requiring daily resident contact and immediate response capability",
    ],
    whyTbpm: [
      {
        title: "Real construction knowledge",
        description:
          "Our construction and remedial works background means defects and contractor quotes are assessed by people who know what the work should cost.",
      },
      {
        title: "Fully insured & vetted staff",
        description: "Public Liability and Workers Compensation cover, with police-checked personnel.",
      },
      {
        title: "Local Sydney operations",
        description: "A Sydney-based team servicing buildings across the metropolitan area.",
      },
      {
        title: "Team-based support",
        description:
          "Office backup behind every manager — no single-point dependency when someone is sick or on leave.",
      },
    ],
  },
  {
    slug: "remote-building-management",
    navLabel: "Part-Time / Hybrid Building Management",
    metaTitle: "Part-Time & Hybrid Building Management Sydney | TBPM",
    metaDescription:
      "Structured part-time and hybrid building management for 30–100 lot Sydney strata schemes — weekly rosters of 8–20 hours backed by remote office support.",
    heroImage: "/images/46993211_l-1-scaled-1.jpg",
    cardImage: "/images/tbpm-icon-part-time-hybrid.png",
    gallery: ["/images/9.png", "/images/tbpm-building-asset.jpg", "/images/7.png"],
    icon: "/images/tbpm-icon-part-time-hybrid-white-2.png",
    title: "Part-Time & Hybrid Building Management",
    intro: [
      "Mid-sized strata schemes often need more support than occasional oversight — but can't justify the cost of a full-time manager. The result is usually a committee carrying the load themselves, or a building slowly falling behind on maintenance and compliance.",
      "TBPM closes that gap with a dedicated Building Manager on a structured weekly roster, typically 8–20 hours, backed by our remote team between visits. Your building gets professional oversight, compliance management and contractor coordination — scaled to what it actually needs.",
    ],
    onboarding: [
      {
        title: "Free Energy & Financial Audit",
        description:
          "We identify cost savings in your building's energy use and service contracts at the start of every engagement.",
      },
      {
        title: "Building Asset Register",
        description:
          "Comprehensive documentation of your building's plant, equipment and major components.",
      },
      {
        title: "Free Dedicated Building Website",
        description:
          "A permanent, professionally hosted site for notices and building information — included at no cost.",
      },
    ],
    included: [
      "Dedicated Building Manager with consistent weekly attendance",
      "Structured weekly roster aligned with inspections and maintenance",
      "Remote office support between site visits",
      "Hands-on contractor supervision and coordination",
      "Compliance documentation and monthly reporting",
      "Clear resident communication pathway",
      "After-hours emergency phone support",
      "Fully remote option available for smaller schemes",
      "Quarterly committee review meetings",
    ],
    process: [
      {
        title: "Free site assessment",
        description: "We inspect your building and meet your committee — no cost, no obligation.",
      },
      {
        title: "Tailored proposal",
        description: "A roster and scope built around your building's specific needs.",
      },
      {
        title: "Seamless handover",
        description: "We take over records, contractor relationships and resident communications.",
      },
    ],
    bestSuited: [
      "30–100 lot residential or mixed-use buildings",
      "Buildings with moderate amenities",
      "Active committees seeking structured support without full-time costs",
    ],
    whyTbpm: [
      {
        title: "Construction & remedial expertise",
        description: "Defects and quotes assessed by people with real building experience.",
      },
      {
        title: "Fully insured & vetted staff",
        description: "Public Liability and Workers Compensation cover, with police-checked personnel.",
      },
      {
        title: "Local to Sydney",
        description: "Servicing strata schemes across the Sydney metropolitan area.",
      },
      {
        title: "Full team support",
        description: "Office backup behind every manager for genuine service continuity.",
      },
    ],
  },
  {
    slug: "cleaning-services",
    navLabel: "Cleaning Services",
    metaTitle: "Strata Cleaning Services Sydney | TBPM",
    metaDescription:
      "Structured strata cleaning programs for Sydney buildings — common areas, waste rooms, fire stairs and car parks, up to 7 days per week with vetted staff.",
    heroImage: "/images/shutterstock_2453839265-1.jpg",
    cardImage: "/images/tbpm-line-cleaning.png",
    gallery: ["/images/tbpm-cleaning-1.jpg", "/images/tbpm-cleaning-2.jpg", "/images/tbpm-cleaning-3.jpg"],
    icon: "/images/tbpm-line-cleaning-2.png",
    title: "Strata Cleaning Services for Sydney Buildings",
    intro: [
      "A clean building is a well-managed building. TBPM delivers structured cleaning programs designed around your building's size, traffic and amenities — not a one-size-fits-all schedule.",
      "Our cleaners are another set of eyes on the building — flagging leaks, damage and maintenance issues early, before they become expensive problems.",
    ],
    included: [
      "Customised cleaning schedules based on your building's needs",
      "Service frequency up to 7 days per week",
      "Common area cleaning — foyers, corridors, lift lobbies and mail areas",
      "Waste room and bin area management",
      "External area upkeep — entrances, footpaths and pathways",
      "Fire stairs and car park cleaning",
      "Consistent, vetted staff with police checks",
      "Environmentally responsible cleaning products",
      "Quarterly committee performance reviews",
    ],
    process: [
      {
        title: "Free building assessment",
        description: "We walk your building and assess its cleaning requirements — no obligation.",
      },
      {
        title: "Tailored proposal",
        description: "A program matched to your building's traffic, amenities and budget.",
      },
      {
        title: "Program setup",
        description: "Team briefing, schedule established and regular updates to your committee.",
      },
    ],
    bestSuited: [
      "Residential and mixed-use strata buildings",
      "Properties requiring regular common-area upkeep",
      "Buildings with high resident traffic, waste facilities and shared amenities",
    ],
    whyTbpm: [
      {
        title: "Proactive eyes on your building",
        description: "Our staff flag maintenance issues early — not just clean around them.",
      },
      {
        title: "Fully insured & vetted personnel",
        description: "Police-checked staff with full insurance coverage.",
      },
      {
        title: "Local Sydney coverage",
        description: "Servicing buildings across Sydney's suburbs.",
      },
      {
        title: "Office team support",
        description: "Reliability that doesn't depend on a single staff member.",
      },
    ],
  },
  {
    slug: "gardening-services",
    navLabel: "Gardening Services",
    metaTitle: "Strata Gardening & Landscape Maintenance Sydney | TBPM",
    metaDescription:
      "Professional garden and landscape maintenance for Sydney strata buildings — lawns, hedging, irrigation, pest control and horticultural advice.",
    heroImage: "/images/unnamed.jpg",
    cardImage: "/images/tbpm-line-gardening.png",
    gallery: ["/images/tbpm-gardening-1.png", "/images/tbpm-gardening-2.png"],
    icon: "/images/tbpm-line-gardening-2.png",
    title: "Strata Gardening & Landscape Maintenance in Sydney",
    intro: [
      "Well-maintained gardens lift your property's presentation and value. Neglected ones drag both down — and create safety and drainage issues along the way.",
      "TBPM provides professional garden and landscape maintenance for residential and mixed-use strata buildings across Sydney, combining regular maintenance with expert horticultural advice to keep your grounds looking their best year-round.",
    ],
    included: [
      "Lawn maintenance with regular mowing and edging",
      "Hedging and pruning to maintain appearance and safety",
      "Garden bed upkeep including weeding and debris removal",
      "Irrigation system monitoring for leaks and efficiency",
      "Pest and weed control to prevent plant damage",
      "Green waste management and removal",
      "Landscape presentation at entrances and pathways",
      "Maintenance guidance for capital works planning",
      "Quarterly committee reviews for service adjustments",
    ],
    process: [
      {
        title: "Free assessment",
        description: "We review your property's grounds at no cost.",
      },
      {
        title: "Customised proposal",
        description: "A maintenance scope tailored to your landscaping and budget.",
      },
      {
        title: "Service launch",
        description: "Schedule established and team briefed on your property.",
      },
    ],
    bestSuited: [
      "Residential and mixed-use strata buildings",
      "Properties with lawns, hedges and landscaped common areas",
      "Buildings requiring regular care and long-term landscape planning",
    ],
    whyTbpm: [
      {
        title: "Proactive issue identification",
        description: "Our staff spot irrigation and drainage problems before they cause damage.",
      },
      {
        title: "Fully insured & vetted personnel",
        description: "Public liability coverage and vetted staff on every job.",
      },
      {
        title: "Local Sydney service",
        description: "Coverage across Sydney's suburbs.",
      },
      {
        title: "Office team support",
        description: "Continuity beyond any individual staff member.",
      },
    ],
  },
  {
    slug: "concierge-services",
    navLabel: "Concierge Services",
    metaTitle: "Concierge Services Sydney | TBPM",
    metaDescription:
      "Professional concierge services for Sydney residential and mixed-use buildings — front-of-house presence, parcel management, visitor coordination and amenity bookings.",
    heroImage: "/images/hotel-concierge.jpg",
    cardImage: "/images/tbpm-icon-concierge.png",
    gallery: ["/images/9.png", "/images/building-asset-lifecycle.jpg", "/images/7.png"],
    icon: "/images/tbpm-icon-concierge-white-2.png",
    title: "Concierge Services for Sydney Residential & Mixed-Use Buildings",
    intro: [
      "First impressions matter. A well-presented, reliable front-of-house team sets the tone for your building — for residents, visitors and prospective buyers alike.",
      "TBPM's concierge teams manage lobby operations, welcome residents and visitors, handle deliveries and support building security. The service runs standalone or pairs with our full-time building management.",
    ],
    onboarding: [
      {
        title: "Free Energy & Financial Audit",
        description: "We identify operational cost reductions at the start of every engagement.",
      },
      {
        title: "Building Asset Register",
        description: "Comprehensive documentation of equipment and major components.",
      },
      {
        title: "Free Dedicated Building Website",
        description: "Custom domain with hosting and annual renewal included.",
      },
    ],
    included: [
      "Professional lobby presence and guest reception",
      "Parcel receipt, logging and secure storage",
      "Visitor and contractor management",
      "Resident enquiry support",
      "Shared amenity booking coordination",
      "Building communication distribution",
      "Flexible shift coverage with customised scheduling",
      "Maintenance issue escalation",
      "Quarterly committee performance reviews",
    ],
    process: [
      {
        title: "Free site assessment",
        description: "We assess your lobby operations and resident needs — no obligation.",
      },
      {
        title: "Tailored proposal",
        description: "Shift coverage and service scope matched to your building.",
      },
      {
        title: "Service launch",
        description: "Team briefed, standards set, committee kept informed.",
      },
    ],
    bestSuited: [
      "Active residential and mixed-use lobbies",
      "Buildings with high parcel delivery volumes",
      "Premium properties prioritising a professional resident-facing presence",
    ],
    whyTbpm: [
      {
        title: "Professional presentation standards",
        description: "Front-of-house staff who reflect the standard of your building.",
      },
      {
        title: "Fully insured & police-vetted staff",
        description: "Every team member vetted and covered.",
      },
      {
        title: "Local Sydney operation",
        description: "Coverage across multiple Sydney suburbs.",
      },
      {
        title: "Office team backing",
        description: "Site personnel supported by our office team for full continuity.",
      },
    ],
  },
  {
    slug: "project-management",
    navLabel: "Project Management",
    metaTitle: "Strata Project Management & Defect Works Sydney | TBPM",
    metaDescription:
      "Strata project management for Sydney buildings — defect rectification, capital works and common-area upgrades managed by construction-experienced teams.",
    heroImage: "/images/construction-project-management-guide-768x432-1.jpg",
    cardImage: "/images/tbpm-line-project-management.png",
    gallery: ["/images/tbpm-project-management-1.jpg", "/images/tbpm-project-management-2.png"],
    icon: "/images/tbpm-line-project-management-2.png",
    title: "Strata Project Management & Defect Works in Sydney",
    intro: [
      "Building improvement works, defect rectification and capital projects fail when nobody with construction experience is watching the contractor. Scope creep, variations and poor workmanship cost Owners Corporations real money.",
      "With a co-founder bringing more than 20 years of specialist building and construction experience, TBPM manages improvement projects from conception to completion — practical coordination and oversight by people who have actually built and remediated buildings.",
    ],
    included: [
      "Project scoping — defining works and objectives before contractor engagement",
      "Contractor procurement — licensed contractors and competitive quotations",
      "Contractor coordination — communication, site access and scheduling",
      "Site progress monitoring — quality and progress checks at key stages",
      "Defect rectification management — identification through inspection to close-out",
      "Capital works support — oversight of larger upgrades, repairs and planned maintenance",
      "Progress reporting — regular updates on completed work, issues and next steps",
      "Completion reporting — final handover records with warranty documentation",
      "Quarterly committee reviews",
    ],
    process: [
      {
        title: "Scope & site assessment",
        description: "We review the required works and project objectives at no cost.",
      },
      {
        title: "Procurement & proposal",
        description: "We source contractors and present competitive options.",
      },
      {
        title: "Delivery, monitoring & reporting",
        description: "Coordination and supervision through to completion and handover.",
      },
    ],
    bestSuited: [
      "Defect rectification and remedial works",
      "Common-area upgrades and building improvement projects",
      "Owners Corporations requiring hands-on oversight from construction-experienced teams",
    ],
    whyTbpm: [
      {
        title: "Real construction knowledge",
        description: "Defect and remedial expertise — we know what the work should cost and look like.",
      },
      {
        title: "Fully insured & vetted staff",
        description: "Public Liability and Workers Compensation coverage.",
      },
      {
        title: "Local to Sydney",
        description: "Servicing buildings across the Sydney metropolitan area.",
      },
      {
        title: "Full team support",
        description: "Service continuity backed by our whole team.",
      },
    ],
  },
];

export const whyChoose = [
  {
    title: "Construction & Building Expertise",
    description:
      "Founded by professionals with 30+ years combined experience in building management and construction — we understand buildings from the slab up.",
  },
  {
    title: "24/7 Availability",
    description:
      "After-hours emergency phone support for water, fire, security and lift entrapment issues — every building, every night.",
  },
  {
    title: "One Building, One Manager",
    description:
      "A dedicated manager who knows your building, your residents and your contractors — not a rotating roster of strangers.",
  },
  {
    title: "Proactive Approach",
    description:
      "Regular inspections and preventive maintenance planning that catch issues before they become expensive repairs.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Monthly building reports and quarterly committee reviews — you always know what's been done and what's coming.",
  },
  {
    title: "Compliance & Safety",
    description:
      "AFSS, WHS and contractor compliance verification handled systematically, not as an afterthought.",
  },
];

export const knowledgeItems = [
  {
    title: "How Strata Works in NSW",
    body: "Strata buildings are managed by the Owners Corporation — every lot owner collectively, usually acting through an elected Strata Committee. The Owners Corporation is responsible for maintaining common property, managing the scheme's finances, holding the required insurances and complying with the Strata Schemes Management Act 2015. Reforms taking effect on 1 April 2026 strengthen obligations around repairs and long-term maintenance planning.",
    links: [
      { label: "NSW Government — Strata overview", href: "https://www.nsw.gov.au/housing-and-construction/strata" },
      { label: "Strata living guide", href: "https://www.nsw.gov.au/housing-and-construction/strata/strata-living-guide" },
      { label: "Guide to recent strata law changes", href: "https://www.nsw.gov.au/housing-and-construction/strata/guide-to-strata-law-changes-for-strata-committees-and-owners" },
      { label: "Strata Schemes Management Act 2015", href: "https://legislation.nsw.gov.au/view/html/inforce/current/act-2015-050" },
    ],
  },
  {
    title: "Who Is Responsible for What — Owners Corporation vs Lot Owners",
    body: "The Owners Corporation maintains common property — the building structure, roof, foundations, external walls, common pipes, balcony slabs, waterproofing, lobbies, lifts, stairwells, driveways and gardens. Individual lot owners look after their interiors — floor finishes, internal walls, fixtures, fittings and anything they have installed themselves. The exact boundary depends on your registered strata plan, and grey areas such as original windows, balcony tiling and waterproofing are a common source of disputes. Clear maintenance planning and an up-to-date asset register help resolve these before they escalate.",
    links: [
      { label: "Strata living guide", href: "https://www.nsw.gov.au/housing-and-construction/strata/strata-living-guide" },
      { label: "Living in strata (rights and obligations)", href: "https://www.nsw.gov.au/housing-and-construction/strata/living" },
      { label: "Strata Schemes Management Act 2015", href: "https://legislation.nsw.gov.au/view/html/inforce/current/act-2015-050" },
    ],
  },
  {
    title: "The Strata Hub & Annual Reporting",
    body: "All NSW strata schemes — including two-lot duplexes — must report annually to the NSW Strata Hub within three months of their Annual General Meeting. Reports cover contact details, insurance and key building information, and late or missed reporting attracts penalties. Keeping accurate, current records is a hallmark of good building management.",
    links: [
      { label: "NSW Strata Hub", href: "https://www.nsw.gov.au/housing-and-construction/strata/strata-hub" },
      { label: "Strata annual reporting", href: "https://www.nsw.gov.au/housing-and-construction/strata/annual-reporting" },
      { label: "Submit strata annual report", href: "https://www.service.nsw.gov.au/transaction/submit-strata-scheme-annual-report" },
    ],
  },
  {
    title: "Levies, the Capital Works Fund & Budgeting",
    body: "Buildings are funded through quarterly levies, split between the administrative fund (day-to-day running costs) and the capital works fund (major repairs and replacements such as roofs, lifts, painting and waterproofing). Sound capital works planning — guided by a maintenance strategy and accurate asset records — is what prevents nasty surprises in the form of special levies.",
    links: [
      { label: "Strata levies, finances and insurance", href: "https://www.nsw.gov.au/housing-and-construction/strata/living/levies-finances-insurance" },
      { label: "Strata Schemes Management Act 2015", href: "https://legislation.nsw.gov.au/view/html/inforce/current/act-2015-050" },
    ],
  },
  {
    title: "Fire Safety & the Annual Fire Safety Statement (AFSS)",
    body: "Most strata buildings must have their essential fire safety measures inspected each year by an accredited practitioner, who issues an Annual Fire Safety Statement (AFSS) that is lodged with the local council and Fire and Rescue NSW. The current fire safety schedule and statement must be displayed prominently in the building. Missing or late statements are one of the most common compliance failures in self-managed buildings.",
    links: [
      { label: "Fire safety certification (NSW Planning Portal)", href: "https://www.planning.nsw.gov.au/policy-and-legislation/buildings/fire-safety-in-buildings/fire-safety-certification" },
      { label: "Lodge a fire safety statement (Fire and Rescue NSW)", href: "https://www.fire.nsw.gov.au/fire-safety/building-fire-safety/service-type-tool/lodge-a-fire-safety-statement" },
      { label: "Fire and Rescue NSW", href: "https://www.fire.nsw.gov.au/" },
    ],
  },
  {
    title: "Building Defects & the Strata Building Bond",
    body: "For newer Class 2 apartment buildings, the Strata Building Bond and Inspections Scheme requires developers to lodge a bond that funds defect rectification through independent inspections. Older buildings deal with defects — concrete spalling, waterproofing failure, render cracking and balcony issues — through remedial projects. Careful scope definition and contractor accountability protect the Owners Corporation throughout.",
    links: [
      { label: "Strata Building Bond and Inspections Scheme", href: "https://www.nsw.gov.au/housing-and-construction/building/strata-building-bond-and-inspections-scheme" },
      { label: "Building Commission NSW", href: "https://www.nsw.gov.au/departments-and-agencies/building-commission" },
    ],
  },
  {
    title: "Work Health & Safety on Common Property",
    body: "Under NSW work health and safety law, an Owners Corporation is a person conducting a business or undertaking (PCBU) and has legal duties to keep common property safe for residents, visitors and contractors. In practice that means verifying contractor licences and insurances and obtaining Safe Work Method Statements (SWMS) before any work begins on site.",
    links: [
      { label: "SafeWork NSW", href: "https://www.safework.nsw.gov.au/" },
    ],
  },
  {
    title: "By-Laws & Resolving Disputes",
    body: "By-laws govern day-to-day life in the scheme — covering pets, parking, renovations and noise — and must be registered to be enforceable. Where disputes can't be resolved internally, they go to mediation through NSW Fair Trading before any application to the NSW Civil and Administrative Tribunal (NCAT).",
    links: [
      { label: "Living in strata", href: "https://www.nsw.gov.au/housing-and-construction/strata/living" },
      { label: "NCAT — Strata schemes orders", href: "https://ncat.nsw.gov.au/case-types/housing-and-property/strata-and-community-living/strata-schemes/strata-schemes-orders.html" },
    ],
  },
  {
    title: "Building Manager vs Strata Manager — What's the Difference?",
    body: "Well-run buildings usually have both. A strata manager (licensed in NSW) handles administration and governance — issuing levies, arranging insurance, organising meetings, keeping records and ensuring compliance — typically from an office while managing multiple schemes. A building manager (caretaker / facilities manager) looks after the physical building — an on-site presence coordinating contractors, monitoring common areas, organising maintenance and dealing with residents. In short, the strata manager handles the paperwork and finances; the building manager looks after the infrastructure and the people.",
    links: [
      { label: "Strata in NSW — overview", href: "https://www.nsw.gov.au/housing-and-construction/strata" },
      { label: "Strata living guide", href: "https://www.nsw.gov.au/housing-and-construction/strata/strata-living-guide" },
    ],
  },
];

export const testimonial = {
  quote:
    "TBPM tailored a service package that fit our budget exactly, and their responsiveness has been outstanding. Issues that used to sit for weeks are now resolved in days.",
  author: "Strata Committee Chair",
  location: "Granville, NSW",
};
