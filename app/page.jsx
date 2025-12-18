"use client";

import Ballpit from "@/components/Ballpit";

import HeroSection from "@/components/home/hero-section";
import FeaturedProjects from "@/components/home/featured-projects";
import SkillsOverview from "@/components/home/skills-overview";
import CTASection from "@/components/home/cta-section";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      {/* ================= GLOBAL BALLPIT BACKGROUND ================= */}
      <div className="fixed inset-0 z-0">
        <Ballpit
          className="w-full h-full pointer-events-none"
          count={75}
          gravity={0.0}
          friction={1.0}
          wallBounce={0.95}
          followCursor={true}
        />
      </div>

      {/* ================= CONTENT LAYER ================= */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="relative">
          <BackgroundOverlay />
          <HeroSection />
        </section>

        {/* FEATURED PROJECTS */}
        <section className="relative">
          <BackgroundOverlay />
          <FeaturedProjects />
        </section>

        {/* SKILLS */}
        <section className="relative">
          <BackgroundOverlay />
          <SkillsOverview />
        </section>

        {/* CTA */}
        <section className="relative">
          <BackgroundOverlay />
          <CTASection />
        </section>
      </div>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Soft readability layer used by all sections                         */
/* ------------------------------------------------------------------ */
function BackgroundOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/85 via-background/65 to-background/85" />
  );
}
