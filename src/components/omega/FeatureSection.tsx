import { AssetFrame, Eyebrow, FeatureBullets, Reveal, SectionContainer } from "./primitives";
import type { Feature } from "@/data/landingContent";

export function FeatureSection({ feature, index }: { feature: Feature; index: number }) {
  const flipped = index % 2 === 1;

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
              <p className="display-text mt-3 text-[20px] text-amber italic md:text-[24px]">{feature.subline}</p>
            ) : null}
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
                  <div className="h-full rounded-xl border border-slate bg-carbon/60 p-6 transition-colors duration-200 hover:border-muted-text/50">
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
          delay={160}
          className={flipped ? "lg:col-span-6 lg:order-1" : "lg:col-span-6 lg:justify-self-end"}
        >
          <div className="relative">
            <AssetFrame {...feature.asset} glow={feature.glow ?? false} />
            {feature.extra ? (
              <div className="mt-6 sm:absolute sm:-bottom-10 sm:-right-8 sm:mt-0 sm:w-[320px]">
                <AssetFrame {...feature.extra} />
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
