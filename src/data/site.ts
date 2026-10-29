export interface NavItem {
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Businesses", href: "/businesses" },
  { label: "Our Journey", href: "/journey" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];

export const contactDetails = {
  headquarters: "RC Towers, [City], Tamil Nadu, India",
  phone: "+91 97911 88770",
  phoneFormatted: "+91 97911 88770",
  email: "yuvaraj@rcgroupofcompanies.com",
  workingHours: "Monday - Saturday: 9:00 AM - 6:00 PM IST",
  socials: {
    linkedin: "https://linkedin.com/company/rc-group-of-companies",
    twitter: "https://twitter.com/rcgroupcompanies",
    instagram: "https://instagram.com/rcgroupofcompanies",
    youtube: "https://youtube.com/@rcgroupofcompanies",
    facebook: "https://facebook.com/rcgroupofcompanies",
  },
};

export const corporateValues = [
  {
    id: "people-first",
    title: "People First",
    description: "Putting human needs, employee dignity, and community welfare at the heart of every business decision.",
    icon: "Users",
  },
  {
    id: "sustainable-growth",
    title: "Sustainable Growth",
    description: "Building responsibly for tomorrow through renewable energy, ethical supply chains, and lasting enterprise value.",
    icon: "TrendingUp",
  },
  {
    id: "diverse-opportunities",
    title: "Diverse Opportunities",
    description: "Creating resilient cross-sector economic value across healthcare, clean tech, education, and services.",
    icon: "Layers",
  },
  {
    id: "positive-impact",
    title: "Positive Impact",
    description: "Delivering tangible societal benefits, accessible essential services, and lasting trust in communities we serve.",
    icon: "HeartHandshake",
  },
];

export const corporateStats = [
  { label: "Years of Legacy", value: "20+", subtext: "Serving communities since 2004" },
  { label: "Business Sectors", value: "7", subtext: "Diversified industry leadership" },
  { label: "Active Ventures", value: "16", subtext: "Specialized portfolio entities" },
  { label: "Geographic Reach", value: "Pan-India", subtext: "Growing regional & national presence" },
];
