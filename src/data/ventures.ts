export interface Venture {
  id: string;
  name: string;
  sectorSlug: string;
  sectorName: string;
  yearEstablished: number;
  shortDescription: string;
  fullDescription: string;
  image: string;
  logoText: string;
  isFeatured: boolean;
  status: "Active" | "Expanding" | "Upcoming";
  websiteUrl?: string;
}

export const ventures: Venture[] = [
  {
    id: "rc-rice-mandi",
    name: "RC Rice Mandi",
    sectorSlug: "food-hospitality",
    sectorName: "Food & Hospitality",
    yearEstablished: 2004,
    shortDescription: "The foundation of RC Group’s enterprise journey, supplying premium agro commodities and rice with unwavering community trust.",
    fullDescription:
      "Established in 2004, RC Rice Mandi represents the cornerstone of the RC Group legacy. Built on relationships of integrity with local agricultural growers and consumers, it continues to deliver clean, superior quality staple grains and agro commodities.",
    image: "/images/sector-food-hospitality.jpg",
    logoText: "RC Rice Mandi",
    isFeatured: true,
    status: "Active",
  },
  {
    id: "rc-pharmaceuticals",
    name: "RC Pharmaceuticals",
    sectorSlug: "healthcare",
    sectorName: "Healthcare",
    yearEstablished: 2010,
    shortDescription: "Leading manufacturing and supply of high-integrity pharmaceutical products and essential medications.",
    fullDescription:
      "In 2010, RC Pharmaceuticals marked our dedicated entry into healthcare. Focused on stringent regulatory compliance, rigorous formulation quality, and dependable therapeutic solutions, it serves clinics and hospitals across the region.",
    image: "/images/sector-healthcare.jpg",
    logoText: "RC Pharma",
    isFeatured: true,
    status: "Active",
  },
  {
    id: "rc-medical",
    name: "RC Medical",
    sectorSlug: "healthcare",
    sectorName: "Healthcare",
    yearEstablished: 2012,
    shortDescription: "Trusted community retail pharmacy network delivering genuine medications, health consultations, and patient care.",
    fullDescription:
      "RC Medical bridges pharmaceutical supply directly to everyday families. Founded in 2012, each location is staffed by certified pharmacists committed to patient education and compassionate guidance.",
    image: "/images/sector-healthcare.jpg",
    logoText: "RC Medical",
    isFeatured: true,
    status: "Active",
  },
  {
    id: "health-pharmaceuticals",
    name: "Health Pharmaceuticals",
    sectorSlug: "healthcare",
    sectorName: "Healthcare",
    yearEstablished: 2013,
    shortDescription: "Specialized distributor connecting reputable pharmaceutical manufacturers with hospitals and retail dispensaries.",
    fullDescription:
      "Formed in 2013 to optimize pharmaceutical logistics, Health Pharmaceuticals ensures timely, temperature-controlled distribution of life-saving medicines across urban and rural healthcare facilities.",
    image: "/images/sector-healthcare.jpg",
    logoText: "Health Pharma",
    isFeatured: true,
    status: "Active",
  },
  {
    id: "inerts-pharmaceuticals",
    name: "Inerts Pharmaceuticals",
    sectorSlug: "healthcare",
    sectorName: "Healthcare",
    yearEstablished: 2014,
    shortDescription: "Formulation excellence and sourcing of specialized pharmaceutical compounds and therapeutic care.",
    fullDescription:
      "Inerts Pharmaceuticals operates with a focus on specialized compounds, active pharmaceutical ingredients, and ethical formulation standards that meet rigorous therapeutic benchmarks.",
    image: "/images/sector-healthcare.jpg",
    logoText: "Inerts",
    isFeatured: false,
    status: "Active",
  },
  {
    id: "makkal-medicals",
    name: "Makkal Medicals",
    sectorSlug: "healthcare",
    sectorName: "Healthcare",
    yearEstablished: 2015,
    shortDescription: "Affordable neighborhood pharmacy initiative committed to making essential treatments accessible to all citizens.",
    fullDescription:
      "Named 'Makkal' (People's) Medicals, this network was created in 2015 to combat rising healthcare costs by providing generic medications, wellness checkups, and fair-priced healthcare essentials directly in local neighborhoods.",
    image: "/images/sector-healthcare.jpg",
    logoText: "Makkal Medicals",
    isFeatured: true,
    status: "Active",
  },
  {
    id: "sarayu-pharmaceuticals",
    name: "Sarayu Pharmaceuticals",
    sectorSlug: "healthcare",
    sectorName: "Healthcare",
    yearEstablished: 2016,
    shortDescription: "Expanding quality healthcare formulations and regional accessibility for acute and chronic care medications.",
    fullDescription:
      "Sarayu Pharmaceuticals strengthens RC Group’s manufacturing portfolio, specializing in therapeutic regimens for chronic lifestyle management, pediatrics, and preventive wellness.",
    image: "/images/sector-healthcare.jpg",
    logoText: "Sarayu Pharma",
    isFeatured: false,
    status: "Active",
  },
  {
    id: "kyra-green-energy",
    name: "Kyra Green Energy Solutions",
    sectorSlug: "energy",
    sectorName: "Energy",
    yearEstablished: 2021,
    shortDescription: "Pioneering commercial and industrial solar installations, rooftop photovoltaic systems, and clean energy.",
    fullDescription:
      "Founded in 2021, Kyra Green Energy Solutions is at the forefront of the clean energy transition. We design, engineer, and deploy high-yield solar rooftop plants and microgrid solutions that lower operating expenses and carbon emissions for commercial enterprises.",
    image: "/images/solar-install-hero.jpg",
    logoText: "Kyra Green",
    isFeatured: true,
    status: "Active",
  },
  {
    id: "kyra-food-street",
    name: "Kyra Food Street",
    sectorSlug: "food-hospitality",
    sectorName: "Food & Hospitality",
    yearEstablished: 2023,
    shortDescription: "Vibrant culinary destinations bringing together diverse cuisines, open-air ambience, and authentic hospitality.",
    fullDescription:
      "Launched in 2023, Kyra Food Street brings a lively open-air dining hub concept to modern towns. Featuring artisanal eateries, family seating, and spotless culinary standards, it has quickly become a community favorite.",
    image: "/images/sector-food-hospitality.jpg",
    logoText: "Kyra Food Street",
    isFeatured: true,
    status: "Active",
  },
  {
    id: "flyout-trampoline",
    name: "Flyout Trampoline",
    sectorSlug: "entertainment",
    sectorName: "Entertainment",
    yearEstablished: 2023,
    shortDescription: "Premier indoor active entertainment park with interconnected trampolines, ninja courses, and family fun.",
    fullDescription:
      "Flyout Trampoline offers state-of-the-art indoor active recreation arenas. Featuring trampoline courts, foam pits, aerial obstacle courses, and party zones, Flyout brings high-energy fitness and joy to youths and families.",
    image: "/images/sector-entertainment.jpg",
    logoText: "Flyout",
    isFeatured: true,
    status: "Active",
  },
  {
    id: "medingen",
    name: "Medingen",
    sectorSlug: "healthcare",
    sectorName: "Healthcare",
    yearEstablished: 2023,
    shortDescription: "Modern digital pharmacy and healthcare fulfillment platform bridging clinic prescriptions with doorstep delivery.",
    fullDescription:
      "Medingen combines modern software convenience with licensed pharmacy reliability. Patients can seamlessly upload prescriptions, track medication deliveries, and access certified pharmacist consultations from the comfort of home.",
    image: "/images/sector-healthcare.jpg",
    logoText: "Medingen",
    isFeatured: true,
    status: "Active",
  },
  {
    id: "growphil",
    name: "GrowPhil",
    sectorSlug: "digital-services",
    sectorName: "Digital & Services",
    yearEstablished: 2023,
    shortDescription: "Digital transformation, web & mobile engineering, and strategic enterprise acceleration for modern brands.",
    fullDescription:
      "GrowPhil partners with growing enterprises and institutions to craft world-class digital experiences, scalable cloud systems, and data-driven marketing campaigns that translate vision into measurable market traction.",
    image: "/images/sector-digital.jpg",
    logoText: "GrowPhil",
    isFeatured: true,
    status: "Active",
  },
  {
    id: "rc-solars",
    name: "RC Solars",
    sectorSlug: "energy",
    sectorName: "Energy",
    yearEstablished: 2024,
    shortDescription: "End-to-end solar EPC infrastructure development, utility-scale photovoltaic arrays, and solar engineering.",
    fullDescription:
      "RC Solars undertakes utility-scale engineering, procurement, and construction (EPC) for major industrial complexes, agricultural solar pumping, and institutional solar grids.",
    image: "/images/solar-panels-tracker.jpg",
    logoText: "RC Solars",
    isFeatured: true,
    status: "Active",
  },
  {
    id: "affo-holidays",
    name: "Affo Holidays",
    sectorSlug: "travel",
    sectorName: "Travel",
    yearEstablished: 2024,
    shortDescription: "Curated domestic and international vacation packages, luxury retreats, and bespoke travel concierge services.",
    fullDescription:
      "Affo Holidays crafts unforgettable travel experiences tailored to modern wanderlust. From tropical island escapes to cultural heritage circuits, we manage every flight, hotel, and private excursion with premium attention to detail.",
    image: "/images/sector-travel.jpg",
    logoText: "Affo Holidays",
    isFeatured: true,
    status: "Active",
  },
  {
    id: "rc-academy",
    name: "RC Academy",
    sectorSlug: "education",
    sectorName: "Education",
    yearEstablished: 2024,
    shortDescription: "Forward-looking educational institution fostering academic excellence, technical competencies, and values.",
    fullDescription:
      "RC Academy delivers comprehensive learning programs designed to equip students for global careers. With modern digital classrooms, interactive laboratory spaces, and seasoned faculty, we nurture future-ready innovators.",
    image: "/images/sector-education.jpg",
    logoText: "RC Academy",
    isFeatured: true,
    status: "Active",
  },
  {
    id: "kyra-zam",
    name: "Kyra Zam",
    sectorSlug: "energy",
    sectorName: "Energy",
    yearEstablished: 2026,
    shortDescription: "Next-generation energy storage, smart inverter technology, and advanced commercial battery systems.",
    fullDescription:
      "Kyra Zam spearheads RC Group's advanced energy storage research and development. From modular commercial lithium battery banks to intelligent hybrid inverters, Kyra Zam enables continuous zero-emission power resilience.",
    image: "/images/commercial-battery-bank.jpg",
    logoText: "Kyra Zam",
    isFeatured: true,
    status: "Upcoming",
  },
];
