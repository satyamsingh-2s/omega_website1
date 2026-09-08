import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navigation } from "@/components/omega/Navigation";
import { HeroSection, ProblemSection, ShiftSection } from "@/components/omega/StorySections";
import { FeatureSection } from "@/components/omega/FeatureSection";
import {
  AboutMeSection,
  BuilderTransition,
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
  { id: "future", label: "06 · Future" },
  { id: "join", label: "07 · Join" },
  { id: "builder", label: "08 · Builder" },
];

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    let frameId: number | null = null;
    const updateActiveSection = () => {
      frameId = null;
      const readingPosition = window.scrollY + window.innerHeight * 0.45;
      let nextActive = 0;

      elements.forEach((element, index) => {
        if (element.offsetTop <= readingPosition) nextActive = index;
      });
      setActive(nextActive);
    };
    const requestUpdate = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(updateActiveSection);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
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
        <div id="features">
          {features.map((feature, index) => (
            <FeatureSection key={feature.number} feature={feature} index={index} />
          ))}
          <ProductSpacesSection />
          <SystemFlowSection />
          <LocalFirstSection />
        </div>
        <HorizonSection />
        <FinalStatementSection />
        <FundingSection />
        <BuilderTransition />
        <AboutMeSection />
      </main>
      <Footer />
    </div>
  );
}
