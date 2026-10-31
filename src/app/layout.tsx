import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RC Group of Companies | Driven by Purpose. Focused on People.",
    template: "%s | RC Group of Companies",
  },
  description:
    "A diversified business group operating across seven sectors: Healthcare, Energy, Education, Food & Hospitality, Entertainment, Travel, and Digital Services.",
  keywords: [
    "RC Group of Companies",
    "Healthcare",
    "Solar Energy",
    "Renewable Energy",
    "Education",
    "Hospitality",
    "Entertainment",
    "Travel",
    "Digital Services",
    "India",
  ],
  authors: [{ name: "RC Group of Companies" }],
  openGraph: {
    title: "RC Group of Companies | Driven by Purpose. Focused on People.",
    description:
      "A diversified business group creating lasting value across healthcare, clean energy, education, and innovative industries.",
    url: "https://rcgroupofcompanies.com",
    siteName: "RC Group of Companies",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/Logo/RC Pharmaceuticals.webp" },
      { url: "/icon.png", sizes: "64x64", type: "image/png" },
    ],
    shortcut: "/images/Logo/RC Pharmaceuticals.webp",
    apple: "/images/Logo/RC Pharmaceuticals.webp",
  },
};

export const viewport: Viewport = {
  themeColor: "#1E90FF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${outfit.className}`}>
      <body className={`${outfit.className} min-h-screen flex flex-col bg-white text-brand-text font-sans antialiased`}>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
