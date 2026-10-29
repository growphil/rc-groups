export interface Leader {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  fullBio: string;
  image: string;
  linkedIn?: string;
  areasOfExpertise: string[];
}

export const leadershipTeam: Leader[] = [
  {
    id: "yuvaraj-c",
    name: "Yuvaraj C",
    role: "Founder & Chairman",
    title: "Founder & Chairman, RC Group",
    bio: "Visionary entrepreneur who guided RC Group from its foundational agro origins in 2004 into a multi-sector enterprise spanning seven essential industries.",
    fullBio:
      "Yuvaraj C has spearheaded the strategic vision and continuous diversification of RC Group over more than two decades. Driven by the philosophy that enduring businesses must create genuine social value, he has championed ethical enterprise practices, continuous reinvestment in community welfare, and strategic expansion into healthcare, clean energy, and education.",
    image: "/images/Our Leadership/Yuvaraj C.webp",
    linkedIn: "https://linkedin.com/company/rc-group-of-companies",
    areasOfExpertise: [
      "Enterprise Strategy & Capital Allocation",
      "Diversified Industry Expansion",
      "Ethical Governance & Corporate Integrity",
      "Sustainable Infrastructure Development",
    ],
  },
  {
    id: "ashash-y",
    name: "Ashash Y",
    role: "Managing Director",
    title: "Managing Director, Operations & Strategy",
    bio: "Steers strategic operations, large-scale execution, and renewable energy innovation across the group's commercial portfolio.",
    fullBio:
      "Ashash Y oversees operational excellence, cross-sector integration, and corporate strategy across the group. He played an instrumental role in launching Kyra Green Energy Solutions, RC Solars, and modern entertainment arenas, instilling modern performance metrics and engineering precision throughout the organization.",
    image: "/images/Our Leadership/Ashash Y.webp",
    linkedIn: "https://linkedin.com/company/rc-group-of-companies",
    areasOfExpertise: [
      "Operational Excellence & Supply Chain",
      "Renewable Energy Infrastructure (Solar & EPC)",
      "Venture Scaling & Cross-Sector Integration",
      "Strategic Business Partnerships",
    ],
  },
  {
    id: "padmaja-y",
    name: "Padmaja Y",
    role: "Executive Director",
    title: "Executive Director, People & Culture",
    bio: "Champions human-centric values, organizational culture, workforce empowerment, and social responsibility across all business units.",
    fullBio:
      "Padmaja Y leads the group's talent architecture, employee wellness, and corporate social impact initiatives. Under her leadership, RC Group has nurtured an inclusive culture that values frontline healthcare workers, engineers, educators, and service personnel equally, ensuring community welfare remains central to growth.",
    image: "/images/Our Leadership/Padmaja Y.webp",
    linkedIn: "https://linkedin.com/company/rc-group-of-companies",
    areasOfExpertise: [
      "Human Capital Strategy & Culture",
      "Community Outreach & Corporate Social Impact",
      "Inclusive Workplace Governance",
      "Organizational Development",
    ],
  },
  {
    id: "lukshita-y",
    name: "Lukshita Y",
    role: "Director",
    title: "Director, Digital & Future Initiatives",
    bio: "Leads modern technology adoption, digital consumer platforms, branding, and next-generation venture innovation.",
    fullBio:
      "Lukshita Y drives the technological and customer experience transformation across RC Group. Guiding future-oriented ventures such as GrowPhil, digital pharmacy solutions at Medingen, and next-generation battery architectures at Kyra Zam, she focuses on bridging physical industries with modern software interfaces.",
    image: "/images/Our Leadership/Lukshita Y.webp",
    linkedIn: "https://linkedin.com/company/rc-group-of-companies",
    areasOfExpertise: [
      "Digital Transformation & Software Platforms",
      "Brand Experience & Modern UI/UX",
      "Customer-Centric Innovation",
      "Next-Generation Clean Tech",
    ],
  },
];
