import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { assetImages } from "@/data/assetImages";

/** Scroll-reveal wrapper: opacity + subtle Y translate, once per element. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "p" | "h2";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as "div";
  return (
    <Component
      ref={ref as never}
      className={cn("reveal", className)}
      data-visible={visible ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

export function SectionContainer({
  id,
  children,
  className,
  tone = "void",
  size = "standard",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "void" | "deep";
  size?: "standard" | "major";
}) {
  return (
    <section
      id={id}
      className={cn(
        tone === "deep" ? "bg-deep" : "bg-void",
        size === "major"
          ? "py-[64px] sm:py-[88px] md:py-[160px] xl:py-[200px]"
          : "py-[64px] sm:py-[88px] md:py-[132px] xl:py-[160px]",
        className,
      )}
    >
      <div className="container-omega">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  number,
  accent = false,
  className,
}: {
  children: ReactNode;
  number?: string;
  accent?: boolean;
  className?: string;
}) {
  return (
    <p className={cn("micro-label flex items-center gap-3", className)}>
      {number ? <span className="text-amber">{number}</span> : null}
      <span className={cn(accent && "text-amber")}>{children}</span>
    </p>
  );
}

export function PrimaryButton({
  children,
  href = "#pricing",
  className,
  size = "md",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  size?: "md" | "lg";
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-amber font-medium text-[#100a00]",
        "transition-[transform,box-shadow,background-color] duration-200 ease-out",
        "hover:shadow-[0_0_40px_-12px_var(--omega-amber)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber",
        size === "lg" ? "px-8 py-4 text-[17px]" : "px-6 py-3 text-[15px]",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function SecondaryButton({
  children,
  href = "#system",
  className,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-slate px-6 py-3 text-[15px] text-crisp/80",
        "transition-colors duration-200 ease-out hover:border-muted-text hover:text-crisp",
        className,
      )}
    >
      {children}
    </a>
  );
}

/** Product asset frame: renders real imagery when available, otherwise a labelled placeholder. */
export function AssetFrame({
  id,
  name,
  width,
  height,
  ratio,
  className,
  glow = false,
}: {
  id: string;
  name: string;
  width: number;
  height: number;
  ratio: string;
  className?: string;
  glow?: boolean;
}) {
  const image = assetImages[id];

  return (
    <div className={cn("relative w-full", className)} style={{ maxWidth: width }}>
      {glow ? (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-4 rounded-[48px] opacity-[0.09] blur-3xl sm:-inset-10"
          style={{ background: "radial-gradient(closest-side, var(--omega-amber), transparent)" }}
        />
      ) : null}
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="relative block w-full rounded-2xl border border-slate"
        />
      ) : (
        <div
          className="relative flex items-center justify-center overflow-hidden rounded-2xl border border-slate bg-deep"
          style={{ aspectRatio: `${width} / ${height}` }}
        >
          <div className="absolute inset-3 rounded-xl border border-dashed border-slate/50" aria-hidden />
          <div className="relative px-6 text-center">
            <p className="micro-label text-amber/70">{id}</p>
            <p className="micro-label mt-3 text-crisp/70">{name}</p>
            <p className="micro-label mt-3 text-muted-text/70">
              {width} × {height}
            </p>
            <p className="micro-label mt-1 text-muted-text/50">RATIO {ratio}</p>
          </div>
        </div>
      )}
    </div>
  );
}


export function FeatureBullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-[16px] leading-relaxed text-crisp/70 md:text-[17px]">
          <span aria-hidden className="mt-[10px] h-px w-6 shrink-0 bg-slate" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function StoryPanel({
  label,
  children,
  accent = false,
  className,
}: {
  label: string;
  children: ReactNode;
  accent?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-deep p-7 md:p-9",
        accent ? "border-amber/35 shadow-[0_24px_80px_-60px_var(--omega-amber)]" : "border-slate",
        className,
      )}
    >
      <p className={cn("micro-label", accent && "text-amber")}>{label}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}
