import { useState, type CSSProperties } from "react";
import {
  AssetFrame,
  Eyebrow,
  PrimaryButton,
  Reveal,
  SectionContainer,
  ActiveFlowIndicator,
} from "./primitives";
import { cn } from "@/lib/utils";
import {
  finalStatement,
  footer,
  funding,
  founder,
  horizon,
  localFirst,
  spaces,
  systemFlow,
} from "@/data/landingContent";

export function ProductSpacesSection() {
  return (
    <SectionContainer tone="deep">
      <Reveal>
        <Eyebrow>THE THREE PRODUCT SPACES</Eyebrow>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {spaces.map((space, i) => (
          <Reveal key={space.title} delay={i * 120}>
            <div className="interactive-card group h-full rounded-2xl border border-slate bg-void p-6">
              <div className="transition-transform duration-[var(--motion-fast)] ease-[var(--ease-standard)] group-hover:scale-[1.01]">
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
              {i === systemFlow.steps.length - 1 ? (
                <ActiveFlowIndicator label="CONTINUES" className="mt-4" />
              ) : null}
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
            <h2 className="display-text mt-6 text-[34px] text-crisp md:text-[48px]">
              {localFirst.headline}
            </h2>
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
          <Reveal variant="soft" delay={140}>
            <ul className="w-full max-w-[420px] rounded-2xl border border-slate bg-void p-2">
              {localFirst.statements.map((s, i) => (
                <li
                  key={s}
                  className="stack-layer flex items-center gap-4 border-b border-slate/60 px-5 py-5 last:border-b-0"
                  data-visible="true"
                  style={{ transitionDelay: `${200 + i * 120}ms` }}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "h-[6px] w-[6px] rounded-full shrink-0",
                      i === 0 ? "bg-amber/70" : "bg-amber/50",
                    )}
                  />
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
            <div className="interactive-card h-full rounded-2xl border border-slate bg-deep p-7">
              <span className="micro-label rounded-full border border-slate px-3 py-1">
                {card.status}
              </span>
              <h3 className="mt-6 text-[19px] font-medium text-crisp">{card.title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-crisp/60">{card.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

export function FundingSection() {
  return (
    <SectionContainer id="join" tone="deep" size="major">
      <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
        <Reveal>
          <Eyebrow accent>{funding.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="display-text mt-8 max-w-[860px] text-[44px] leading-[1.05] text-crisp md:text-[72px] xl:text-[84px]">
            {funding.headline}
          </h2>
        </Reveal>

        <div className="mt-10 space-y-5">
          {funding.copy.map((p, i) => (
            <Reveal key={p} delay={220 + i * 80}>
              <p className="max-w-[640px] text-[17px] leading-relaxed text-crisp/65 md:text-[19px]">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <Eyebrow className="mt-20">{funding.waysToJoinLabel}</Eyebrow>
        </Reveal>

        <div className="mt-10 grid w-full gap-10 md:grid-cols-3 md:gap-6">
          {funding.paths.map((path, i) => (
            <Reveal key={path.title} delay={580 + i * 90}>
              <div className="participation-path group flex flex-col items-center px-4 text-center md:items-start md:text-left">
                <h3 className="micro-label text-[14px] text-crisp/80">{path.title}</h3>
                <p className="mt-4 max-w-[280px] text-[16px] leading-relaxed text-crisp/60 md:text-[17px]">
                  {path.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={880}>
          <div className="mt-20">
            <PrimaryButton href="#builder" size="lg">
              {funding.cta}
            </PrimaryButton>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

export function AboutMeSection() {
  const [contactExpanded, setContactExpanded] = useState(false);

  return (
    <SectionContainer id="builder" tone="void" size="major">
      <div className="max-w-[800px]">
        <Reveal>
          <Eyebrow accent>{founder.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-text mt-7 text-[44px] text-crisp md:text-[64px] xl:text-[72px]">
            {founder.headline}
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="micro-label mt-6 text-amber/80">{founder.role}</p>
        </Reveal>

        <div className="mt-10 max-w-[760px] space-y-5 md:mt-12">
          {founder.copy.map((paragraph, index) => (
            <Reveal key={paragraph} delay={260 + index * 80}>
              <p className="text-[17px] leading-relaxed text-crisp/65 md:text-[19px]">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={440}>
          <div className="mt-14 md:mt-16">
            <p className="text-[17px] leading-relaxed text-crisp/80 md:text-[19px]">
              {founder.contactPrompt.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <button
              type="button"
              aria-expanded={contactExpanded}
              aria-controls="omega-contact-links"
              onClick={() => setContactExpanded((expanded) => !expanded)}
              className="contact-reveal-button mt-6 inline-flex items-center gap-2 text-[16px] font-medium text-amber focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
            >
              Get in touch <span aria-hidden>→</span>
            </button>
            <div
              id="omega-contact-links"
              className="contact-links"
              data-expanded={contactExpanded}
              aria-hidden={!contactExpanded}
            >
              <div className="contact-links-inner">
                {founder.contactLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="contact-link"
                    style={{ "--contact-link-delay": `${index * 60}ms` } as CSSProperties}
                    tabIndex={contactExpanded ? 0 : -1}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

export function BuilderTransition() {
  return (
    <section className="bg-deep px-5 pb-[112px] pt-2 text-center sm:px-10 md:pb-[144px] xl:px-[72px]">
      <Reveal>
        <p className="display-text text-[26px] leading-[1.1] text-crisp/55 italic md:text-[34px]">
          <span className="block">And behind it,</span>
          <span className="block">one builder.</span>
        </p>
      </Reveal>
    </section>
  );
}

export function FinalStatementSection() {
  return (
    <SectionContainer id="future" size="major">
      <div className="mx-auto max-w-[760px] text-center">
        <Reveal>
          <Eyebrow accent className="justify-center">
            06 · FUTURE
          </Eyebrow>
          <h2 className="display-text mt-6 text-[44px] text-crisp md:text-[76px] xl:text-[88px]">
            {finalStatement.headline}
          </h2>
        </Reveal>
        <div className="mt-8 space-y-4">
          {finalStatement.copy.map((p, i) => (
            <Reveal key={p} delay={120 + i * 90}>
              <p className="text-[17px] leading-relaxed text-crisp/60 md:text-[19px]">{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={320}>
          <p className="display-text mt-10 text-[24px] text-amber italic md:text-[30px]">
            {finalStatement.emphasis}
          </p>
        </Reveal>
        <Reveal delay={460}>
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
      <div className="container-omega space-y-9">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="micro-label text-[13px] tracking-[0.32em] text-crisp">{footer.logo}</p>
          <nav className="flex flex-wrap gap-6">
            {footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] text-crisp/55 transition-[color,transform] duration-150 ease-[var(--ease-ui)] hover:text-crisp hover:-translate-y-[1px]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="micro-label">{footer.statement}</p>
        </div>
        <div className="flex flex-col gap-4 border-t border-slate/60 pt-6 text-[13px] text-crisp/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© Satyam Singh</p>
          <a
            href={footer.termsHref}
            className="transition-colors duration-150 ease-[var(--ease-ui)] hover:text-crisp/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
          >
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
