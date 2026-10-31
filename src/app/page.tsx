import React from "react";
import { HomeHero } from "@/components/sections/HomeHero";
import { AboutSection } from "@/components/home/AboutSection";
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

      {/* 3. Our Milestones Cinematic Scroll */}
      <CinematicMilestones />

      {/* 4. Featured Ventures */}
      <FeaturedVentures />

      {/* 5. Our Impact */}
      <ImpactSection />

      {/* 6. Leadership */}
      <LeadershipSection />

      {/* 7. Partnership */}
      <PartnershipSection />

      {/* 8. Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
