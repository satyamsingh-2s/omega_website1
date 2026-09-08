import {
  AssetFrame,
  Eyebrow,
  FeatureBullets,
  Reveal,
  SectionContainer,
  FootprintsDiagram,
  ActiveFlowIndicator,
} from "./primitives";
import type { Feature } from "@/data/landingContent";
import { useMemo } from "react";

function getDiagramForFeature(number: string) {
  switch (number) {
    case "06":
      return <FootprintsDiagram />;
    default:
      return null;
  }
}

export function FeatureSection({ feature, index }: { feature: Feature; index: number }) {
  const flipped = index % 2 === 1;
  const diagram = useMemo(() => getDiagramForFeature(feature.number), [feature.number]);
  const hasActiveFlowIndicator = feature.number === "03";

  return (
    <SectionContainer tone={flipped ? "deep" : "void"}>
      <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-16">
        <div className={flipped ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"}>
          <Reveal>
            <Eyebrow number={feature.number}>{feature.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-text mt-6 text-[32px] text-crisp md:text-[44px] xl:text-[48px]">
              {feature.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            {feature.subline ? (
              <p className="display-text mt-3 text-[20px] text-amber italic md:text-[24px]">
                {feature.subline}
              </p>
            ) : null}
            {hasActiveFlowIndicator ? <ActiveFlowIndicator className="mt-5" /> : null}
          </Reveal>

          <div className="mt-7 max-w-[520px] space-y-5">
            {feature.copy.map((p, i) => (
              <Reveal key={p} delay={140 + i * 60}>
                <p className="text-[17px] leading-relaxed text-crisp/65 md:text-[18px]">{p}</p>
              </Reveal>
            ))}
          </div>

          {feature.paths ? (
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {feature.paths.map((path, i) => (
                <Reveal key={path.title} delay={200 + i * 100}>
                  <div className="interactive-card h-full rounded-xl border border-slate bg-carbon/60 p-6">
                    <p className="text-[16px] font-medium text-crisp">{path.title}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-crisp/60">{path.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : null}

          {feature.bullets.length > 0 ? (
            <Reveal delay={220}>
              <FeatureBullets items={feature.bullets} />
            </Reveal>
          ) : null}
        </div>

        <Reveal
          variant={diagram ? "soft" : "asset"}
          delay={160}
          className={flipped ? "lg:col-span-6 lg:order-1" : "lg:col-span-6 lg:justify-self-end"}
        >
          <div className="relative">
            <AssetFrame
              {...feature.asset}
              glow={feature.glow ?? false}
              diagram={diagram ?? undefined}
            />
            {feature.extra ? (
              <div className="mt-6 sm:absolute sm:-bottom-10 sm:-right-8 sm:mt-0 sm:w-[320px]">
                <Reveal delay={320}>
                  <AssetFrame {...feature.extra} />
                </Reveal>
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
