import { useEffect, useRef, useState } from "react";
import {
  Eyebrow,
  PrimaryButton,
  Reveal,
  SecondaryButton,
  SectionContainer,
  StoryPanel,
  AssetFrame,
  ActiveFlowIndicator,
} from "./primitives";
import { hero, problem, shift } from "@/data/landingContent";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-void pt-32 pb-[88px] md:pt-44 md:pb-[140px]"
    >
      <div className="container-omega grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal delay={200}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={350}>
            <p className="micro-label mt-8 text-[13px] tracking-[0.36em] text-crisp">
              {hero.product}
            </p>
          </Reveal>
          <Reveal delay={500}>
            <h1 className="display-text mt-5 text-[38px] leading-[1.06] sm:text-[48px] md:text-[72px] md:leading-[1.02] xl:text-[88px]">
              <span className="block text-crisp">{hero.headlineLead}</span>
              <span className="block text-amber">{hero.headlineAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={650}>
            <p className="micro-label mt-7">{hero.identity}</p>
            <p className="mt-5 max-w-[560px] text-[18px] leading-relaxed text-crisp/70 md:text-[22px]">
              {hero.copy}
            </p>
          </Reveal>
          <Reveal delay={800}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg">{hero.cta}</PrimaryButton>
              <SecondaryButton href="#problem">See the story</SecondaryButton>
            </div>
            <p className="micro-label mt-6">{hero.micro}</p>
          </Reveal>
        </div>

        <Reveal variant="asset" delay={500} className="lg:col-span-6 lg:justify-self-end">
          <div className="relative w-full max-w-[480px]">
            <AssetFrame
              id="ASSET 00"
              name="OMEGA HERO VISUAL"
              width={480}
              height={620}
              ratio="24:31"
              glow
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PathStepList({
  steps,
  accentLast,
  isOmega = false,
}: {
  steps: string[];
  accentLast?: boolean;
  isOmega?: boolean;
}) {
  const containerRef = useRef<HTMLOListElement | null>(null);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            io.disconnect();
            steps.forEach((_, i) => {
              const baseDelay = isOmega ? 150 : 200;
              setTimeout(
                () => {
                  setActiveCount((prev) => Math.max(prev, i + 1));
                },
                baseDelay * (i + 1),
              );
            });
          }
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [steps.length, isOmega]);

  return (
    <ol ref={containerRef} className="space-y-4">
      {steps.map((step, i) => {
        const active = i < activeCount;
        const last = accentLast && i === steps.length - 1;
        const isAbandon = !isOmega && i === steps.length - 1;
        return (
          <li key={step}>
            <div
              className={cn("path-step flex items-baseline gap-5", active && "data-[active=true]:")}
              data-active={active ? "true" : "false"}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span
                className={cn(
                  "micro-label w-6 shrink-0 transition-colors duration-300",
                  last && active ? "text-amber" : active ? "text-crisp/80" : "text-muted-text/40",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <span
                  className={cn(
                    "text-[17px] transition-colors duration-500",
                    last ? "text-amber" : isAbandon ? "text-crisp/50" : "text-crisp/75",
                  )}
                >
                  {step}
                </span>
                {last && isOmega && active ? (
                  <ActiveFlowIndicator label="JOURNEY CONTINUES" className="mt-2" />
                ) : null}
                {isAbandon && active ? (
                  <span className="block mt-2 micro-label text-muted-text/50 text-[10px]">
                    — END OF THE LINE
                  </span>
                ) : null}
              </div>
            </div>
          </li>
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
            <PathStepList steps={problem.loop.steps} />
          </StoryPanel>
          <StoryPanel label={problem.broken.label} accent>
            <PathStepList steps={problem.broken.steps} accentLast isOmega />
          </StoryPanel>
        </div>
      </div>
    </SectionContainer>
  );
}

export function ShiftSection() {
  const omegaCardRef = useRef<HTMLDivElement | null>(null);
  const [emphasized, setEmphasized] = useState(false);

  useEffect(() => {
    const el = omegaCardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTimeout(() => setEmphasized(true), 600);
            io.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

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
            <p className="display-text text-[26px] text-crisp/55 md:text-[32px]">
              {shift.left.quote}
            </p>
          </StoryPanel>
        </Reveal>
        <Reveal delay={140}>
          <div ref={omegaCardRef}>
            <StoryPanel label={shift.right.label} accent={emphasized} className="h-full">
              <p className="display-text text-[26px] text-crisp md:text-[32px]">
                {shift.right.quote}
              </p>
              {emphasized ? <ActiveFlowIndicator label="CONTEXT AWARE" className="mt-6" /> : null}
            </StoryPanel>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
