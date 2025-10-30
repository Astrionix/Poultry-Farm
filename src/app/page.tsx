import { ContactSection } from "@/components/contact-section";
import { FarmMap } from "@/components/farm-map";
import { GalleryGrid } from "@/components/gallery-grid";
import { Hero } from "@/components/hero";
import { InfrastructureShowcase } from "@/components/infrastructure-showcase";
import { QualityProcess } from "@/components/quality-process";
import { ReachMap } from "@/components/reach-map";
import { StatCards } from "@/components/stat-cards";
import { StoryTimeline } from "@/components/story-timeline";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <StatCards />
      <StoryTimeline />
      <FarmMap />
      <QualityProcess />
      <InfrastructureShowcase />
      <ReachMap />
      <GalleryGrid />
      <ContactSection />
      <footer className="bg-slate-950 py-10 text-center text-sm text-white/70">
        <p className="mb-2 font-semibold uppercase tracking-[0.3em] text-white/50">
          Mahalakshmi Poultry Complex
        </p>
        <p>© {new Date().getFullYear()} All rights reserved. Crafted in East Godavari.</p>
      </footer>
    </div>
  );
}
