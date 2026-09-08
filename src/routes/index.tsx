import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navigation } from "@/components/omega/Navigation";
import { HeroSection, ProblemSection, ShiftSection } from "@/components/omega/StorySections";
import { FeatureSection } from "@/components/omega/FeatureSection";
import {
  FinalStatementSection,
  Footer,
  FundingSection,
  HorizonSection,
  LocalFirstSection,
  ProductSpacesSection,
  SystemFlowSection,
} from "@/components/omega/ClosingSections";
import { JourneyIndicator } from "@/components/omega/primitives";
import { features } from "@/data/landingContent";

const title = "Omega — Personal Journey Assistant";
const description =
  "Structure. Focus. Flow. Omega is a local-first personal journey assistant that preserves the structure, work, and context of long projects so you can always continue.";

const journeySections = [
  { id: "top", label: "01 · Omega" },
  { id: "problem", label: "02 · The Loop" },
  { id: "system", label: "03 · The Shift" },
  { id: "features", label: "04 · Features" },
  { id: "horizon", label: "05 · The Horizon" },
  { id: "join", label: "06 · Join" },
];

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible: { index: number; ratio: number }[] = [];
        entries.forEach((entry) => {
          const idx = sectionIds.indexOf(entry.target.id);
          if (idx >= 0 && entry.isIntersecting) {
            visible.push({ index: idx, ratio: entry.intersectionRatio });
          }
        });
        if (visible.length > 0) {
          visible.sort((a, b) => b.ratio - a.ratio);
          setActive(visible[0].index);
        }
      },
      {
        threshold: [0.15, 0.25, 0.4, 0.6],
        rootMargin: "-20% 0px -40% 0px",
      },
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sectionIds]);

  return active;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const activeSection = useActiveSection(journeySections.map((s) => s.id));

  return (
    <div className="min-h-screen bg-void">
      <Navigation />
      <JourneyIndicator sections={journeySections} activeIndex={activeSection} />
      <main>
        <HeroSection />
        <ProblemSection />
        <ShiftSection />
        {features.map((feature, index) => (
          <FeatureSection key={feature.number} feature={feature} index={index} />
        ))}
        <ProductSpacesSection />
        <SystemFlowSection />
        <LocalFirstSection />
        <HorizonSection />
        <FundingSection />
        <FinalStatementSection />
      </main>
      <Footer />
    </div>
  );
}
