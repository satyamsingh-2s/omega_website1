import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/omega/Navigation";
import { HeroSection, ProblemSection, ShiftSection } from "@/components/omega/StorySections";
import { FeatureSection } from "@/components/omega/FeatureSection";
import {
  FinalStatementSection,
  Footer,
  HorizonSection,
  LocalFirstSection,
  PricingSection,
  ProductSpacesSection,
  SystemFlowSection,
} from "@/components/omega/ClosingSections";
import { features } from "@/data/landingContent";

const title = "Omega — Personal Journey Assistant";
const description =
  "Structure. Focus. Flow. Omega is a local-first personal journey assistant that preserves the structure, work, and context of long projects so you can always continue.";

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
  return (
    <div className="min-h-screen bg-void">
      <Navigation />
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
        <PricingSection />
        <FinalStatementSection />
      </main>
      <Footer />
    </div>
  );
}
