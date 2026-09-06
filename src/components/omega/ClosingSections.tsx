import { useEffect, useRef, useState } from "react";
import { AssetFrame, Eyebrow, PrimaryButton, Reveal, SectionContainer } from "./primitives";
import { cn } from "@/lib/utils";
import {
  finalStatement,
  footer,
  horizon,
  localFirst,
  pricing,
  spaces,
  systemFlow,
} from "@/data/landingContent";

export function ProductSpacesSection() {
  return (
    <SectionContainer id="features" tone="deep">
      <Reveal>
        <Eyebrow>THE THREE PRODUCT SPACES</Eyebrow>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {spaces.map((space, i) => (
          <Reveal key={space.title} delay={i * 120}>
            <div className="group h-full rounded-2xl border border-slate bg-void p-6 transition-[border-color,transform] duration-200 ease-out hover:-translate-y-[4px] hover:border-muted-text/50">
              <div className="transition-transform duration-200 ease-out group-hover:scale-[1.02]">
                <AssetFrame {...space.asset} />
              </div>
              <h3 className="display-text mt-7 text-[28px] text-crisp">{space.title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-crisp/60">{space.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

export function SystemFlowSection() {
  return (
    <SectionContainer>
      <Reveal>
        <h2 className="display-text max-w-[900px] text-[34px] md:text-[52px] xl:text-[60px]">
          {systemFlow.headline.map((line, i) => (
            <span key={line} className={cn("block", i === 2 ? "text-amber" : "text-crisp")}>
              {line}
            </span>
          ))}
        </h2>
      </Reveal>

      <ol className="mt-10 grid gap-0 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
        {systemFlow.steps.map((step, i) => (
          <Reveal as="li" key={step} delay={i * 70}>
            <div className="relative border-t border-slate py-7 pr-6">
              <span className="micro-label">{String(i + 1).padStart(2, "0")}</span>
              <p
                className={cn(
                  "mt-3 text-[16px] tracking-[0.08em]",
                  i === systemFlow.steps.length - 1 ? "text-amber" : "text-crisp/80",
                )}
              >
                {step}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </SectionContainer>
  );
}

export function LocalFirstSection() {
  return (
    <SectionContainer id="privacy" tone="deep">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow>{localFirst.eyebrow}</Eyebrow>
            <h2 className="display-text mt-6 text-[34px] text-crisp md:text-[48px]">{localFirst.headline}</h2>
          </Reveal>
          <div className="mt-7 max-w-[520px] space-y-5">
            {localFirst.copy.map((p, i) => (
              <Reveal key={p} delay={80 + i * 60}>
                <p className="text-[17px] leading-relaxed text-crisp/65">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 lg:justify-self-end">
          <Reveal delay={140}>
            <ul className="w-full max-w-[420px] rounded-2xl border border-slate bg-void p-2">
              {localFirst.statements.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-4 border-b border-slate/60 px-5 py-5 last:border-b-0"
                >
                  <span aria-hidden className="h-[6px] w-[6px] rounded-full bg-amber/70" />
                  <span className="text-[16px] text-crisp/80">{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}

export function HorizonSection() {
  return (
    <SectionContainer id="horizon">
      <Reveal>
        <Eyebrow>{horizon.eyebrow}</Eyebrow>
        <h2 className="display-text mt-6 max-w-[760px] text-[34px] text-crisp md:text-[52px]">
          {horizon.headline}
        </h2>
        <p className="mt-6 max-w-[620px] text-[17px] leading-relaxed text-crisp/65 md:text-[19px]">
          {horizon.copy}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {horizon.cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 110}>
            <div className="h-full rounded-2xl border border-slate bg-deep p-7">
              <span className="micro-label rounded-full border border-slate px-3 py-1">{card.status}</span>
              <h3 className="mt-6 text-[19px] font-medium text-crisp">{card.title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-crisp/60">{card.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const duration = 900;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active]);
  return value;
}

export function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <SectionContainer id="pricing" tone="deep" size="major">
      <Reveal>
        <Eyebrow accent>{pricing.eyebrow}</Eyebrow>
        <h2 className="display-text mt-6 max-w-[860px] text-[32px] text-crisp md:text-[48px]">
          {pricing.headline}
        </h2>
        <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-crisp/65">{pricing.copy}</p>
      </Reveal>

      <div ref={ref} className="mt-14 grid gap-6 lg:grid-cols-3">
        {pricing.tiers.map((tier, i) => (
          <PricingCard key={tier.price} tier={tier} index={i} active={active} />
        ))}
      </div>
    </SectionContainer>
  );
}

function PricingCard({
  tier,
  index,
  active,
}: {
  tier: (typeof pricing.tiers)[number];
  index: number;
  active: boolean;
}) {
  const amount = useCountUp(Number(tier.price.replace("$", "")), active);

  return (
    <Reveal delay={index * 110}>
      <div
        className={cn(
          "flex h-full flex-col rounded-2xl border bg-void p-8",
          tier.featured
            ? "border-amber/40 shadow-[0_30px_120px_-70px_var(--omega-amber)]"
            : "border-slate",
        )}
      >
        <div className="flex items-start justify-between">
          <p className="display-text text-[44px] text-crisp">${amount}</p>
          {"badge" in tier && tier.badge ? (
            <span className="micro-label rounded-full border border-amber/40 px-3 py-1 text-amber">
              {tier.badge}
            </span>
          ) : null}
        </div>
        <h3 className="mt-3 text-[18px] font-medium text-crisp">{tier.name}</h3>
        <p className="mt-3 text-[16px] leading-relaxed text-crisp/60">{tier.copy}</p>
        <ul className="mt-7 flex-1 space-y-3">
          {tier.points.map((point) => (
            <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-crisp/70">
              <span aria-hidden className="mt-[10px] h-px w-4 shrink-0 bg-slate" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        {tier.featured ? (
          <PrimaryButton className="mt-9 w-full">{tier.cta}</PrimaryButton>
        ) : (
          <a
            href="#pricing"
            className="mt-9 inline-flex w-full items-center justify-center rounded-full border border-slate px-6 py-3 text-[15px] text-crisp/80 transition-colors duration-200 hover:border-muted-text hover:text-crisp"
          >
            {tier.cta}
          </a>
        )}
      </div>
    </Reveal>
  );
}

export function FinalStatementSection() {
  return (
    <SectionContainer size="major">
      <div className="mx-auto max-w-[760px] text-center">
        <Reveal>
          <h2 className="display-text text-[44px] text-crisp md:text-[76px] xl:text-[88px]">
            {finalStatement.headline}
          </h2>
        </Reveal>
        <div className="mt-8 space-y-4">
          {finalStatement.copy.map((p, i) => (
            <Reveal key={p} delay={80 + i * 70}>
              <p className="text-[17px] leading-relaxed text-crisp/60 md:text-[19px]">{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={240}>
          <p className="display-text mt-10 text-[24px] text-amber italic md:text-[30px]">
            {finalStatement.emphasis}
          </p>
        </Reveal>
        <Reveal delay={340}>
          <div className="mt-12">
            <PrimaryButton size="lg">{finalStatement.cta}</PrimaryButton>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate bg-void py-12">
      <div className="container-omega flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <p className="micro-label text-[13px] tracking-[0.32em] text-crisp">{footer.logo}</p>
        <nav className="flex flex-wrap gap-6">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] text-crisp/55 transition-colors duration-150 hover:text-crisp"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="micro-label">{footer.statement}</p>
      </div>
    </footer>
  );
}
