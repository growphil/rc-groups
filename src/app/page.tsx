import React from "react";
import { HomeHero } from "@/components/sections/HomeHero";
import { AboutSection } from "@/components/home/AboutSection";
import { BusinessPortfolio } from "@/components/home/BusinessPortfolio";
import { CinematicMilestones } from "@/components/sections/CinematicMilestones";
import { FeaturedVentures } from "@/components/home/FeaturedVentures";
import { ImpactSection } from "@/components/home/ImpactSection";
import { LeadershipSection } from "@/components/home/LeadershipSection";
import { PartnershipSection } from "@/components/home/PartnershipSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Cinematic 480-Frame Hero */}
      <HomeHero />

      {/* 2. About RC Group */}
      <AboutSection />

      {/* 3. Business Portfolio */}
      <BusinessPortfolio />

      {/* 4. Our Milestones Cinematic Scroll */}
      <CinematicMilestones />

      {/* 5. Featured Ventures */}
      <FeaturedVentures />

      {/* 6. Our Impact */}
      <ImpactSection />

      {/* 7. Leadership */}
      <LeadershipSection />

      {/* 8. Partnership */}
      <PartnershipSection />

      {/* 9. Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
