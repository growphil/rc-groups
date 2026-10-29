export interface BusinessSector {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  heroImage: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  ventureIds: string[];
}

export const businessSectors: BusinessSector[] = [
  {
    id: "01",
    slug: "healthcare",
    name: "Healthcare",
    shortDescription: "Comprehensive medical and pharmaceutical solutions touching lives with accessible, reliable care.",
    fullDescription:
      "RC Group's healthcare vertical began with a human-centered mission: ensuring that quality healthcare, essential pharmaceuticals, and accessible clinical support reach every segment of society. Today, our healthcare footprint encompasses pharmaceutical manufacturing, trusted retail pharmacies, distribution networks, and digital healthcare platforms.",
    image: "/images/sector-healthcare.jpg",
    heroImage: "/images/sector-healthcare.jpg",
    stats: [
      { label: "Operating Entities", value: "7 Companies" },
      { label: "Community Reach", value: "Pan-India" },
      { label: "Legacy in Health", value: "Since 2010" },
    ],
    highlights: [
      "Ethical pharmaceutical manufacturing and quality control standards",
      "Expansive retail pharmacy chain serving local neighborhoods directly",
      "Integrated supply chain connecting manufacturers, clinics, and patients",
      "Digital health platforms facilitating prescription fulfillment and patient wellness",
    ],
    ventureIds: [
      "rc-pharmaceuticals",
      "rc-medical",
      "health-pharmaceuticals",
      "inerts-pharmaceuticals",
      "makkal-medicals",
      "sarayu-pharmaceuticals",
      "medingen",
    ],
  },
  {
    id: "02",
    slug: "energy",
    name: "Energy",
    shortDescription: "Clean, sustainable solar and green energy solutions accelerating the transition to a low-carbon tomorrow.",
    fullDescription:
      "Aligned with national and global sustainability goals, our energy division pioneers renewable solar power installations, commercial photovoltaic systems, and clean energy storage technologies. We empower industries, enterprises, and communities to achieve energy independence through sustainable, high-efficiency solar architectures.",
    image: "/images/solar-panels-tracker.jpg",
    heroImage: "/images/hero-solar-landscape.jpg",
    stats: [
      { label: "Clean Megawatts", value: "Utility & Rooftop" },
      { label: "Sector Focus", value: "100% Solar & Clean Tech" },
      { label: "Established", value: "2021" },
    ],
    highlights: [
      "Turnkey commercial and industrial rooftop solar installations",
      "High-efficiency photovoltaic tracking arrays and solar farm infrastructure",
      "Next-generation battery storage systems and microgrid management",
      "Long-term operation and maintenance ensuring peak generation efficiency",
    ],
    ventureIds: ["kyra-green-energy", "rc-solars", "kyra-zam"],
  },
  {
    id: "03",
    slug: "education",
    name: "Education",
    shortDescription: "Empowering future minds with world-class education, practical skills, and values-led learning.",
    fullDescription:
      "Education is the cornerstone of societal advancement. RC Academy was founded to bridge the gap between theoretical knowledge and real-world industrial capability, delivering forward-looking curricula, modern campus environments, and comprehensive mentorship programs for ambitious students.",
    image: "/images/sector-education.jpg",
    heroImage: "/images/sector-education.jpg",
    stats: [
      { label: "Primary Institution", value: "RC Academy" },
      { label: "Pedagogy", value: "STEM & Practical Arts" },
      { label: "Established", value: "2024" },
    ],
    highlights: [
      "Cutting-edge curricula focused on emerging industry disciplines",
      "State-of-the-art interactive digital classrooms and collaborative labs",
      "Industry immersion programs connecting academia with enterprise leaders",
      "Holistic character, leadership, and ethical values development",
    ],
    ventureIds: ["rc-academy"],
  },
  {
    id: "04",
    slug: "food-hospitality",
    name: "Food & Hospitality",
    shortDescription: "Exceptional dining, food street destinations, and authentic hospitality creating memorable experiences.",
    fullDescription:
      "From our earliest agricultural roots in wholesome agro commodities to vibrant food street concepts, RC Group’s food and hospitality sector celebrates quality, culinary diversity, and shared human connection. We create inviting environments where communities come together to savor exceptional food.",
    image: "/images/sector-food-hospitality.jpg",
    heroImage: "/images/sector-food-hospitality.jpg",
    stats: [
      { label: "Agro Origin", value: "Since 2004" },
      { label: "Culinary Formats", value: "Agro & Street Food" },
      { label: "Audience", value: "Families & Food Lovers" },
    ],
    highlights: [
      "Strict sourcing of pure, high-grade agricultural commodities and rice",
      "Innovative food street models hosting diverse authentic cuisines",
      "Hygiene-first food preparation standards with open kitchen formats",
      "Family-friendly community dining spaces designed for social connection",
    ],
    ventureIds: ["rc-rice-mandi", "kyra-food-street"],
  },
  {
    id: "05",
    slug: "entertainment",
    name: "Entertainment",
    shortDescription: "Dynamic recreational facilities, active sports arenas, and family entertainment centers.",
    fullDescription:
      "We believe recreation, fitness, and family bonding are essential to a thriving community. Through Flyout Trampoline, RC Group introduces world-class indoor sports and active recreation arenas featuring interconnected trampolines, ninja obstacle courses, and joyful entertainment for all age groups.",
    image: "/images/sector-entertainment.jpg",
    heroImage: "/images/sector-entertainment.jpg",
    stats: [
      { label: "Flagship Arena", value: "Flyout Trampoline" },
      { label: "Target Audience", value: "Youth & Families" },
      { label: "Focus", value: "Active Recreation" },
    ],
    highlights: [
      "Certified high-safety international standard trampoline courts",
      "Comprehensive obstacle courses, foam pits, and slam dunk zones",
      "Dedicated birthday, team-building, and community celebration spaces",
      "Trained safety marshals and certified equipment sanitization",
    ],
    ventureIds: ["flyout-trampoline"],
  },
  {
    id: "06",
    slug: "travel",
    name: "Travel",
    shortDescription: "Curated memorable domestic and international travel, holidays, and bespoke hospitality journeys.",
    fullDescription:
      "Affo Holidays provides traveler-centric holiday planning, corporate retreats, and international vacation packages. With meticulous attention to detail, personalized itineraries, and reliable end-to-end concierge services, we help individuals and families explore the world with ease.",
    image: "/images/sector-travel.jpg",
    heroImage: "/images/sector-travel.jpg",
    stats: [
      { label: "Key Brand", value: "Affo Holidays" },
      { label: "Destinations", value: "Domestic & Global" },
      { label: "Service", value: "End-to-End Concierge" },
    ],
    highlights: [
      "Handcrafted domestic holiday circuits across India",
      "Comprehensive international packages including visa and flight coordination",
      "Exclusive corporate retreats and incentive travel programs",
      "24/7 on-ground traveler assistance and local guide networks",
    ],
    ventureIds: ["affo-holidays"],
  },
  {
    id: "07",
    slug: "digital-services",
    name: "Digital & Services",
    shortDescription: "Transformative digital tools, tech-enabled enterprise solutions, and growth acceleration.",
    fullDescription:
      "Through ventures like GrowPhil, our digital services vertical partners with ambitious enterprises and startups to accelerate their technology roadmap. We provide modern software engineering, product design, marketing automation, and strategic digital consulting to scale businesses effectively in an interconnected digital economy.",
    image: "/images/sector-digital.jpg",
    heroImage: "/images/sector-digital.jpg",
    stats: [
      { label: "Key Venture", value: "GrowPhil" },
      { label: "Discipline", value: "Tech & Transformation" },
      { label: "Impact", value: "Enterprise Growth" },
    ],
    highlights: [
      "Custom full-stack software and cloud architecture development",
      "User-centered UI/UX design and design systems engineering",
      "Performance marketing, growth funnels, and brand positioning",
      "Enterprise workflow automation and data analytics intelligence",
    ],
    ventureIds: ["growphil"],
  },
];
