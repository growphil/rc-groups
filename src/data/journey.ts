export interface JourneyMilestone {
  year: number;
  title: string;
  subtitle: string;
  description: string;
  ventures: string[];
  sectorName: string;
  isKeyHighlight?: boolean;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: 2004,
    title: "RC Rice Mandi",
    subtitle: "The Foundation of Our Enterprise",
    description: "RC Group begins its journey in agro commodities with RC Rice Mandi, establishing our foundational principles of quality, transparency, and deep community relationships.",
    ventures: ["RC Rice Mandi"],
    sectorName: "Food & Hospitality",
    isKeyHighlight: true,
  },
  {
    year: 2010,
    title: "RC Pharmaceuticals",
    subtitle: "Healthcare Footprint Begins",
    description: "Ventured into the healthcare sector with RC Pharmaceuticals to manufacture and supply high-integrity therapeutic formulations and essential medicines.",
    ventures: ["RC Pharmaceuticals"],
    sectorName: "Healthcare",
    isKeyHighlight: true,
  },
  {
    year: 2012,
    title: "RC Medical",
    subtitle: "Community Retail Expansion",
    description: "Expanded our healthcare footprint directly to families by launching RC Medical retail pharmacies, delivering trusted neighborhood consultations and quality medicines.",
    ventures: ["RC Medical"],
    sectorName: "Healthcare",
  },
  {
    year: 2013,
    title: "Health Pharmaceuticals",
    subtitle: "Supply Chain & Distribution Strength",
    description: "Strengthened regional pharmaceutical distribution networks with Health Pharmaceuticals, connecting manufacturers with clinics and dispensaries.",
    ventures: ["Health Pharmaceuticals"],
    sectorName: "Healthcare",
  },
  {
    year: 2014,
    title: "Inerts Pharmaceuticals",
    subtitle: "Specialized Formulation Capabilities",
    description: "Broadened specialized sourcing and active pharmaceutical formulation standards with the establishment of Inerts Pharmaceuticals.",
    ventures: ["Inerts Pharmaceuticals"],
    sectorName: "Healthcare",
  },
  {
    year: 2015,
    title: "Makkal Medicals",
    subtitle: "Affordable Healthcare for All",
    description: "Launched Makkal Medicals with a dedicated social commitment to making life-saving prescription medicines and daily healthcare accessible at affordable prices.",
    ventures: ["Makkal Medicals"],
    sectorName: "Healthcare",
    isKeyHighlight: true,
  },
  {
    year: 2016,
    title: "Sarayu Pharmaceuticals",
    subtitle: "Therapeutic Manufacturing Growth",
    description: "Expanded therapeutic reach in chronic disease care, lifestyle medications, and pediatric formulations through Sarayu Pharmaceuticals.",
    ventures: ["Sarayu Pharmaceuticals"],
    sectorName: "Healthcare",
  },
  {
    year: 2021,
    title: "Kyra Green Energy Solutions",
    subtitle: "Transition to Clean Renewable Power",
    description: "Marked a decisive diversification into sustainability and green energy with Kyra Green Energy Solutions, engineering commercial and industrial rooftop solar systems.",
    ventures: ["Kyra Green Energy Solutions"],
    sectorName: "Energy",
    isKeyHighlight: true,
  },
  {
    year: 2023,
    title: "Four-Sector Expansion",
    subtitle: "Diversification Across Key Verticals",
    description: "A monumental year of growth, launching Kyra Food Street (Hospitality), Flyout Trampoline (Active Entertainment), Medingen (Digital Pharmacy), and GrowPhil (Digital Acceleration).",
    ventures: ["Kyra Food Street", "Flyout Trampoline", "Medingen", "GrowPhil"],
    sectorName: "Multi-Sector Expansion",
    isKeyHighlight: true,
  },
  {
    year: 2024,
    title: "Solar EPC, Travel & Education",
    subtitle: "Broadening Institutional Reach",
    description: "Strengthened renewable infrastructure with RC Solars, launched curated global travel brand Affo Holidays, and laid the foundations of future learning with RC Academy.",
    ventures: ["RC Solars", "Affo Holidays", "RC Academy"],
    sectorName: "Energy, Travel & Education",
    isKeyHighlight: true,
  },
  {
    year: 2026,
    title: "Kyra Zam",
    subtitle: "Next-Gen Energy Storage & Clean Tech",
    description: "Pioneering the future of intelligent battery storage, commercial lithium systems, and hybrid clean energy technologies with Kyra Zam.",
    ventures: ["Kyra Zam"],
    sectorName: "Energy & Technology",
    isKeyHighlight: true,
  },
];
