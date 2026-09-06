import { Eyebrow, PrimaryButton, Reveal, SecondaryButton, SectionContainer, StoryPanel } from "./primitives";
import { hero, problem, shift } from "@/data/landingContent";
import { AssetFrame } from "./primitives";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-void pt-32 pb-[88px] md:pt-44 md:pb-[140px]">
      <div className="container-omega grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <p className="micro-label mt-8 text-[13px] tracking-[0.36em] text-crisp">{hero.product}</p>
          </Reveal>
          <Reveal delay={240}>
            <h1 className="display-text mt-5 text-[38px] leading-[1.06] sm:text-[48px] md:text-[72px] md:leading-[1.02] xl:text-[88px]">
              <span className="block text-crisp">{hero.headlineLead}</span>
              <span className="block text-amber">{hero.headlineAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={380}>
            <p className="micro-label mt-7">{hero.identity}</p>
            <p className="mt-5 max-w-[560px] text-[18px] leading-relaxed text-crisp/70 md:text-[22px]">
              {hero.copy}
            </p>
          </Reveal>
          <Reveal delay={520}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg">{hero.cta}</PrimaryButton>
              <SecondaryButton href="#problem">See the story</SecondaryButton>
            </div>
            <p className="micro-label mt-6">{hero.micro}</p>
          </Reveal>
        </div>

              <Reveal delay={480} className="lg:col-span-6 lg:justify-self-end">
          <div className="relative w-full max-w-[480px]">

            <img
              src="/images/assest_01.png"
              alt="Omega app"
              className="
                w-full
                h-auto
                object-contain
                [mask-image:linear-gradient(to_right,transparent_0%,black_18%,black_78%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_18%,black_78%,transparent_100%)]
              "
            />

            <div
              className="
                pointer-events-none
                absolute inset-0
                bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,5,5,0.45)_78%,#050505_100%)]
              "
            />

          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StepList({ steps, accentLast }: { steps: string[]; accentLast?: boolean }) {
  return (
    <ol className="space-y-4">
      {steps.map((step, i) => {
        const last = accentLast && i === steps.length - 1;
        return (
          <Reveal as="li" key={step} delay={i * 80}>
            <div className="flex items-baseline gap-5">
              <span className="micro-label w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span className={last ? "text-[17px] text-amber" : "text-[17px] text-crisp/75"}>{step}</span>
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}

export function ProblemSection() {
  return (
    <SectionContainer id="problem" tone="deep" size="major">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="display-text text-[40px] text-crisp md:text-[56px] xl:text-[64px]">
              {problem.headline}
            </h2>
          </Reveal>
          <div className="mt-8 max-w-[520px] space-y-5">
            {problem.paragraphs.map((p, i) => (
              <Reveal key={p} delay={80 + i * 60}>
                <p className="text-[17px] leading-relaxed text-crisp/65 md:text-[19px]">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:col-span-7">
          <StoryPanel label={problem.loop.label}>
            <StepList steps={problem.loop.steps} />
          </StoryPanel>
          <StoryPanel label={problem.broken.label} accent>
            <StepList steps={problem.broken.steps} accentLast />
          </StoryPanel>
        </div>
      </div>
    </SectionContainer>
  );
}

export function ShiftSection() {
  return (
    <SectionContainer id="system">
      <Reveal>
        <h2 className="display-text max-w-[900px] text-[40px] md:text-[56px] xl:text-[68px]">
          <span className="block text-crisp/60">{shift.headlineLead}</span>
          <span className="block text-crisp">
            Omega asks <span className="text-amber italic">where you are.</span>
          </span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Reveal>
          <StoryPanel label={shift.left.label} className="h-full">
            <p className="display-text text-[26px] text-crisp/55 md:text-[32px]">{shift.left.quote}</p>
          </StoryPanel>
        </Reveal>
        <Reveal delay={140}>
          <StoryPanel label={shift.right.label} accent className="h-full">
            <p className="display-text text-[26px] text-crisp md:text-[32px]">{shift.right.quote}</p>
          </StoryPanel>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
