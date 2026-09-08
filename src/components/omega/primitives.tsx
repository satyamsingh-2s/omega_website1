import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { assetImages } from "@/data/assetImages";

type RevealVariant = "default" | "asset" | "nav" | "soft";

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
  variant = "default",
  threshold = 0.15,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "p" | "h2" | "article" | "header";
  variant?: RevealVariant;
  threshold?: number;
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
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const variantClass =
    variant === "asset"
      ? "reveal-asset"
      : variant === "nav"
        ? "reveal-nav"
        : variant === "soft"
          ? "reveal-soft"
          : "reveal";

  const Component = Tag as "div";
  return (
    <Component
      ref={ref as never}
      className={cn(variantClass, className)}
      data-visible={visible ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

export function DrawLine({
  length,
  delay = 0,
  className,
  children,
  threshold = 0.2,
}: {
  length: number;
  delay?: number;
  className?: string;
  children: ReactNode;
  threshold?: number;
}) {
  const ref = useRef<SVGGElement | null>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setDrawn(true);
            io.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <g
      ref={ref}
      className={cn("draw-line", className)}
      data-drawn={drawn ? "true" : "false"}
      style={
        {
          "--draw-length": length,
          transitionDelay: `${delay}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </g>
  );
}

export function AssetFrame({
  id,
  name,
  width,
  height,
  ratio,
  className,
  glow = false,
  showDiagram,
  diagram,
}: {
  id: string;
  name: string;
  width: number;
  height: number;
  ratio: string;
  className?: string;
  glow?: boolean;
  showDiagram?: "knowledge-tree" | "ai-structure" | "memory-stack" | "footprints";
  diagram?: ReactNode;
}) {
  const image = assetImages[id];
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [drawn, setDrawn] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setDrawn(true);
            setTimeout(() => setContentVisible(true), 250);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={cn("relative w-full", className)} style={{ maxWidth: width }}>
      {glow ? (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-4 rounded-[48px] opacity-[0.09] blur-3xl sm:-inset-10"
          style={{ background: "radial-gradient(closest-side, var(--omega-amber), transparent)" }}
        />
      ) : null}
      <div
        ref={frameRef}
        className={cn(
          "asset-frame-border relative overflow-hidden rounded-2xl border border-transparent",
        )}
        data-drawn={drawn ? "true" : "false"}
      >
        {diagram ? (
          <div
            className="relative flex items-center justify-center bg-deep"
            style={{ aspectRatio: `${width} / ${height}` }}
          >
            <div
              className={cn(
                "absolute inset-3 rounded-xl border border-dashed border-slate/40 transition-opacity duration-500",
                contentVisible ? "opacity-100" : "opacity-0",
              )}
              aria-hidden
            />
            <div
              className={cn(
                "relative w-full h-full transition-opacity duration-500",
                contentVisible ? "opacity-100" : "opacity-0",
              )}
              style={{ transitionDelay: "200ms" }}
            >
              {diagram}
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div>
                <p
                  className={cn(
                    "micro-label text-amber/70 transition-opacity duration-500",
                    contentVisible ? "opacity-100" : "opacity-0",
                  )}
                  style={{ transitionDelay: "150ms" }}
                >
                  {id}
                </p>
                <p
                  className={cn(
                    "micro-label mt-1 text-crisp/70 transition-opacity duration-500",
                    contentVisible ? "opacity-100" : "opacity-0",
                  )}
                  style={{ transitionDelay: "200ms" }}
                >
                  {name}
                </p>
              </div>
              <p
                className={cn(
                  "micro-label text-muted-text/70 text-right transition-opacity duration-500",
                  contentVisible ? "opacity-100" : "opacity-0",
                )}
                style={{ transitionDelay: "250ms" }}
              >
                {width} × {height}
                <br />
                <span className="text-muted-text/50">RATIO {ratio}</span>
              </p>
            </div>
          </div>
        ) : image ? (
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className={cn(
              "relative block w-full transition-opacity duration-700 ease-[var(--ease-standard)]",
              contentVisible ? "opacity-100" : "opacity-0",
            )}
            style={{ transitionDelay: "300ms" }}
          />
        ) : (
          <div
            className={cn(
              "relative flex items-center justify-center bg-deep transition-opacity duration-500",
              contentVisible ? "opacity-100" : "opacity-0",
            )}
            style={{ aspectRatio: `${width} / ${height}`, transitionDelay: "200ms" }}
          >
            <div
              className="absolute inset-3 rounded-xl border border-dashed border-slate/50"
              aria-hidden
            />
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
    </div>
  );
}

export function KnowledgeTreeDiagram() {
  return (
    <svg viewBox="0 0 500 620" className="w-full h-full p-6 sm:p-10" fill="none">
      <DrawLine length={80} delay={200}>
        <line
          x1="250"
          y1="40"
          x2="250"
          y2="120"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate"
        />
      </DrawLine>
      <g className="knowledge-tree-node" data-visible="true" style={{ transitionDelay: "100ms" }}>
        <rect
          x="180"
          y="12"
          width="140"
          height="44"
          rx="8"
          fill="var(--color-amber)"
          opacity="0.12"
          stroke="var(--color-amber)"
          strokeWidth="1"
        />
        <text
          x="250"
          y="39"
          textAnchor="middle"
          className="fill-crisp text-[13px] font-[450]"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}
        >
          GOAL
        </text>
      </g>

      <DrawLine length={140} delay={500}>
        <line
          x1="250"
          y1="120"
          x2="130"
          y2="220"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate"
        />
      </DrawLine>
      <DrawLine length={140} delay={600}>
        <line
          x1="250"
          y1="120"
          x2="370"
          y2="220"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate"
        />
      </DrawLine>

      <g className="knowledge-tree-node" data-visible="true" style={{ transitionDelay: "550ms" }}>
        <rect
          x="70"
          y="218"
          width="120"
          height="38"
          rx="7"
          fill="var(--color-carbon)"
          stroke="var(--color-slate)"
          strokeWidth="1"
        />
        <text
          x="130"
          y="242"
          textAnchor="middle"
          className="fill-crisp/85 text-[12px]"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}
        >
          BRANCH A
        </text>
      </g>
      <g className="knowledge-tree-node" data-visible="true" style={{ transitionDelay: "650ms" }}>
        <rect
          x="310"
          y="218"
          width="120"
          height="38"
          rx="7"
          fill="var(--color-carbon)"
          stroke="var(--color-slate)"
          strokeWidth="1"
        />
        <text
          x="370"
          y="242"
          textAnchor="middle"
          className="fill-crisp/85 text-[12px]"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}
        >
          BRANCH B
        </text>
      </g>

      <DrawLine length={100} delay={850}>
        <line
          x1="130"
          y1="256"
          x2="70"
          y2="340"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate"
        />
      </DrawLine>
      <DrawLine length={100} delay={930}>
        <line
          x1="130"
          y1="256"
          x2="190"
          y2="340"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate"
        />
      </DrawLine>
      <DrawLine length={100} delay={1010}>
        <line
          x1="370"
          y1="256"
          x2="310"
          y2="340"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate"
        />
      </DrawLine>
      <DrawLine length={100} delay={1090}>
        <line
          x1="370"
          y1="256"
          x2="430"
          y2="340"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate"
        />
      </DrawLine>

      <g className="knowledge-tree-node" data-visible="true" style={{ transitionDelay: "900ms" }}>
        <rect
          x="22"
          y="338"
          width="96"
          height="34"
          rx="6"
          fill="var(--color-deep)"
          stroke="var(--color-amber)"
          strokeWidth="1"
          opacity="0.9"
        />
        <text
          x="70"
          y="359"
          textAnchor="middle"
          className="fill-amber text-[11px]"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}
        >
          LEAF 01
        </text>
      </g>
      <g className="knowledge-tree-node" data-visible="true" style={{ transitionDelay: "980ms" }}>
        <rect
          x="142"
          y="338"
          width="96"
          height="34"
          rx="6"
          fill="var(--color-deep)"
          stroke="var(--color-slate)"
          strokeWidth="1"
        />
        <text
          x="190"
          y="359"
          textAnchor="middle"
          className="fill-crisp/80 text-[11px]"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}
        >
          LEAF 02
        </text>
      </g>
      <g className="knowledge-tree-node" data-visible="true" style={{ transitionDelay: "1060ms" }}>
        <rect
          x="262"
          y="338"
          width="96"
          height="34"
          rx="6"
          fill="var(--color-deep)"
          stroke="var(--color-slate)"
          strokeWidth="1"
        />
        <text
          x="310"
          y="359"
          textAnchor="middle"
          className="fill-crisp/80 text-[11px]"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}
        >
          LEAF 03
        </text>
      </g>
      <g className="knowledge-tree-node" data-visible="true" style={{ transitionDelay: "1140ms" }}>
        <rect
          x="382"
          y="338"
          width="96"
          height="34"
          rx="6"
          fill="var(--color-deep)"
          stroke="var(--color-slate)"
          strokeWidth="1"
        />
        <text
          x="430"
          y="359"
          textAnchor="middle"
          className="fill-crisp/80 text-[11px]"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}
        >
          LEAF 04
        </text>
      </g>

      <DrawLine length={70} delay={1250}>
        <line
          x1="70"
          y1="372"
          x2="70"
          y2="440"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate/60"
          strokeDasharray="3 4"
        />
      </DrawLine>
      <DrawLine length={70} delay={1300}>
        <line
          x1="190"
          y1="372"
          x2="190"
          y2="440"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate/60"
          strokeDasharray="3 4"
        />
      </DrawLine>

      <g className="knowledge-tree-node" data-visible="true" style={{ transitionDelay: "1300ms" }}>
        <circle
          cx="70"
          cy="458"
          r="10"
          fill="var(--color-amber)"
          opacity="0.18"
          stroke="var(--color-amber)"
          strokeWidth="1"
        />
        <circle cx="70" cy="458" r="4" fill="var(--color-amber)" className="flow-pulse" />
      </g>
      <g className="knowledge-tree-node" data-visible="true" style={{ transitionDelay: "1350ms" }}>
        <rect
          x="106"
          y="440"
          width="180"
          height="38"
          rx="6"
          fill="var(--color-carbon)"
          opacity="0.5"
          stroke="var(--color-slate)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <text
          x="196"
          y="464"
          textAnchor="middle"
          className="fill-muted-text text-[11px]"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}
        >
          FOCUS · LEAF 01
        </text>
      </g>

      <g opacity="0.4">
        <line
          x1="70"
          y1="496"
          x2="70"
          y2="540"
          stroke="var(--color-slate)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
        <line
          x1="190"
          y1="372"
          x2="190"
          y2="540"
          stroke="var(--color-slate)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
        <rect
          x="34"
          y="540"
          width="72"
          height="28"
          rx="5"
          fill="none"
          stroke="var(--color-slate)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <rect
          x="154"
          y="540"
          width="72"
          height="28"
          rx="5"
          fill="none"
          stroke="var(--color-slate)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <text
          x="70"
          y="558"
          textAnchor="middle"
          className="fill-muted-text/60 text-[10px]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          SUB
        </text>
        <text
          x="190"
          y="558"
          textAnchor="middle"
          className="fill-muted-text/60 text-[10px]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          SUB
        </text>
      </g>
    </svg>
  );
}

export function AIStructureDiagram() {
  return (
    <svg viewBox="0 0 440 580" className="w-full h-full p-6 sm:p-8" fill="none">
      <g className="ai-idea-node" data-visible="true" style={{ transitionDelay: "200ms" }}>
        <rect
          x="145"
          y="28"
          width="150"
          height="52"
          rx="10"
          fill="var(--color-amber)"
          opacity="0.15"
          stroke="var(--color-amber)"
          strokeWidth="1.2"
        />
        <text
          x="220"
          y="50"
          textAnchor="middle"
          className="fill-amber text-[13px] font-[450]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          IDEA
        </text>
        <text
          x="220"
          y="68"
          textAnchor="middle"
          className="fill-crisp/60 text-[10px]"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}
        >
          A JOURNEY BEGINS
        </text>
      </g>

      <DrawLine length={60} delay={500}>
        <line
          x1="220"
          y1="80"
          x2="220"
          y2="140"
          stroke="var(--color-amber)"
          strokeWidth="1.2"
          opacity="0.6"
        />
      </DrawLine>

      <g className="knowledge-tree-node" data-visible="true" style={{ transitionDelay: "550ms" }}>
        <circle cx="220" cy="150" r="5" fill="var(--color-amber)" opacity="0.8" />
      </g>

      <DrawLine length={110} delay={700}>
        <line
          x1="220"
          y1="155"
          x2="90"
          y2="240"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate"
        />
      </DrawLine>
      <DrawLine length={60} delay={820}>
        <line
          x1="220"
          y1="155"
          x2="220"
          y2="215"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate"
        />
      </DrawLine>
      <DrawLine length={110} delay={940}>
        <line
          x1="220"
          y1="155"
          x2="350"
          y2="240"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate"
        />
      </DrawLine>

      <g className="ai-branch" data-visible="true" style={{ transitionDelay: "760ms" }}>
        <rect
          x="30"
          y="240"
          width="120"
          height="44"
          rx="7"
          fill="var(--color-carbon)"
          stroke="var(--color-slate)"
          strokeWidth="1"
        />
        <text
          x="90"
          y="267"
          textAnchor="middle"
          className="fill-crisp/90 text-[12px]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Research
        </text>
      </g>
      <g className="ai-branch" data-visible="true" style={{ transitionDelay: "880ms" }}>
        <rect
          x="160"
          y="220"
          width="120"
          height="44"
          rx="7"
          fill="var(--color-carbon)"
          stroke="var(--color-slate)"
          strokeWidth="1"
        />
        <text
          x="220"
          y="247"
          textAnchor="middle"
          className="fill-crisp/90 text-[12px]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Architecture
        </text>
      </g>
      <g className="ai-branch" data-visible="true" style={{ transitionDelay: "1000ms" }}>
        <rect
          x="290"
          y="240"
          width="120"
          height="44"
          rx="7"
          fill="var(--color-carbon)"
          stroke="var(--color-slate)"
          strokeWidth="1"
        />
        <text
          x="350"
          y="267"
          textAnchor="middle"
          className="fill-crisp/90 text-[12px]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Implementation
        </text>
      </g>

      <DrawLine length={50} delay={1100}>
        <line
          x1="90"
          y1="284"
          x2="90"
          y2="334"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate/70"
        />
      </DrawLine>
      <DrawLine length={50} delay={1160}>
        <line
          x1="220"
          y1="264"
          x2="220"
          y2="314"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate/70"
        />
      </DrawLine>
      <DrawLine length={50} delay={1220}>
        <line
          x1="350"
          y1="284"
          x2="350"
          y2="334"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate/70"
        />
      </DrawLine>

      <g className="knowledge-tree-node" data-visible="true" style={{ transitionDelay: "1150ms" }}>
        <rect
          x="34"
          y="334"
          width="112"
          height="30"
          rx="5"
          fill="var(--color-deep)"
          stroke="var(--color-slate)"
          strokeWidth="1"
          opacity="0.7"
        />
        <text
          x="90"
          y="353"
          textAnchor="middle"
          className="fill-muted-text text-[10px]"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}
        >
          01 · EXPLORE
        </text>
      </g>
      <g className="knowledge-tree-node" data-visible="true" style={{ transitionDelay: "1210ms" }}>
        <rect
          x="164"
          y="314"
          width="112"
          height="30"
          rx="5"
          fill="var(--color-deep)"
          stroke="var(--color-slate)"
          strokeWidth="1"
          opacity="0.7"
        />
        <text
          x="220"
          y="333"
          textAnchor="middle"
          className="fill-muted-text text-[10px]"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}
        >
          02 · DESIGN
        </text>
      </g>
      <g className="knowledge-tree-node" data-visible="true" style={{ transitionDelay: "1270ms" }}>
        <rect
          x="294"
          y="334"
          width="112"
          height="30"
          rx="5"
          fill="var(--color-deep)"
          stroke="var(--color-slate)"
          strokeWidth="1"
          opacity="0.7"
        />
        <text
          x="350"
          y="353"
          textAnchor="middle"
          className="fill-muted-text text-[10px]"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}
        >
          03 · BUILD
        </text>
      </g>

      <g opacity="0.5">
        <line
          x1="90"
          y1="364"
          x2="90"
          y2="440"
          stroke="var(--color-slate)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <line
          x1="220"
          y1="344"
          x2="220"
          y2="440"
          stroke="var(--color-slate)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <line
          x1="350"
          y1="364"
          x2="350"
          y2="440"
          stroke="var(--color-slate)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
      </g>

      <g className="knowledge-tree-node" data-visible="true" style={{ transitionDelay: "1400ms" }}>
        <path
          d="M80 452h280c22 0 40 18 40 40v48H40v-48c0-22 18-40 40-40z"
          fill="var(--color-carbon)"
          opacity="0.4"
          stroke="var(--color-slate)"
          strokeWidth="1"
        />
        <text
          x="220"
          y="484"
          textAnchor="middle"
          className="fill-crisp/50 text-[12px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          A structured path, ready to refine.
        </text>
        <text
          x="220"
          y="504"
          textAnchor="middle"
          className="fill-muted-text/60 text-[10px]"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.12em" }}
        >
          STRUCTURE EMERGES
        </text>
      </g>
    </svg>
  );
}

export function MemoryStackDiagram() {
  return (
    <div className="relative w-full h-full p-8 flex items-center justify-center">
      <div className="relative w-full max-w-[280px] aspect-[4/3]">
        <div
          className="stack-layer absolute left-0 top-0 w-[82%] h-[62%] rounded-xl border border-slate bg-carbon/60 p-3"
          data-visible="true"
          style={{ transitionDelay: "200ms" }}
        >
          <p className="micro-label text-crisp/60 text-[9px]">SESSION</p>
          <div className="mt-2 space-y-1.5">
            <div className="h-1.5 w-2/3 rounded-full bg-slate/60" />
            <div className="h-1.5 w-1/2 rounded-full bg-slate/40" />
          </div>
        </div>

        <div
          className="stack-layer absolute left-[6%] top-[12%] w-[82%] h-[62%] rounded-xl border border-slate bg-deep p-3 shadow-lg"
          data-visible="true"
          style={{ transitionDelay: "400ms" }}
        >
          <p className="micro-label text-amber/70 text-[9px]">REVISION NOTE</p>
          <div className="mt-2 space-y-1.5">
            <div className="h-1.5 w-3/4 rounded-full bg-amber/25" />
            <div className="h-1.5 w-1/2 rounded-full bg-slate/40" />
            <div className="h-1.5 w-2/3 rounded-full bg-slate/40" />
          </div>
        </div>

        <div
          className="stack-layer absolute left-[12%] top-[24%] w-[82%] h-[62%] rounded-xl border border-slate bg-carbon/80 p-3 shadow-lg"
          data-visible="true"
          style={{ transitionDelay: "600ms" }}
        >
          <p className="micro-label text-crisp/60 text-[9px]">ATTACHMENT</p>
          <div className="mt-2 flex items-center gap-2">
            <div className="w-8 h-10 rounded border border-slate/70 bg-deep/80" />
            <div className="space-y-1.5 flex-1">
              <div className="h-1.5 w-full rounded-full bg-slate/50" />
              <div className="h-1.5 w-2/3 rounded-full bg-slate/35" />
            </div>
          </div>
        </div>

        <div
          className="stack-layer absolute left-[18%] top-[36%] w-[82%] h-[62%] rounded-xl border border-amber/35 bg-deep p-3 shadow-[0_16px_40px_-16px_var(--omega-amber)]"
          data-visible="true"
          style={{ transitionDelay: "800ms" }}
        >
          <p className="micro-label text-amber text-[9px]">CONTEXT · PRESERVED</p>
          <div className="mt-2 space-y-1.5">
            <div className="h-1.5 w-5/6 rounded-full bg-crisp/30" />
            <div className="h-1.5 w-3/4 rounded-full bg-crisp/20" />
            <div className="h-1.5 w-1/2 rounded-full bg-crisp/15" />
          </div>
          <div className="mt-2 flex items-center gap-1">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber flow-pulse" />
            <p className="micro-label text-amber/80 text-[8px]">READY TO RETURN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FootprintsDiagram() {
  const bars = [
    { w: "28%", d: 200 },
    { w: "42%", d: 320 },
    { w: "36%", d: 440 },
    { w: "60%", d: 560 },
    { w: "48%", d: 680 },
    { w: "74%", d: 800 },
    { w: "88%", d: 920 },
  ];

  return (
    <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-center">
      <div className="space-y-2.5">
        {bars.map((bar, i) => (
          <div
            key={i}
            className="footprint-item"
            data-visible="true"
            style={{ transitionDelay: `${bar.d}ms` }}
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="micro-label text-muted-text/60 w-10 text-[9px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="micro-label text-crisp/50 text-[9px]">
                {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"][i]}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-5 rounded-md bg-carbon/70 border border-slate/60 overflow-hidden">
                <div
                  className="progress-fill h-full rounded-md"
                  data-filled="true"
                  style={
                    {
                      "--progress-width": bar.w,
                      background:
                        i === bars.length - 1
                          ? "linear-gradient(90deg, var(--color-amber) 0%, color-mix(in oklab, var(--color-amber) 50%, var(--color-crisp)) 100%)"
                          : "var(--color-slate)",
                      transitionDelay: `${bar.d + 100}ms`,
                    } as React.CSSProperties
                  }
                />
              </div>
              <span className="micro-label text-crisp/60 w-12 text-right text-[9px]">
                {["1.2h", "2.4h", "1.8h", "3.5h", "2.9h", "4.8h", "6.2h"][i]}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div
        className="footprint-item mt-6 flex items-center justify-between rounded-lg border border-slate/70 bg-carbon/40 px-4 py-3"
        data-visible="true"
        style={{ transitionDelay: "1100ms" }}
      >
        <div>
          <p className="micro-label text-muted-text text-[9px]">ACCUMULATED</p>
          <p className="display-text text-crisp text-[18px] mt-0.5">22.8h</p>
        </div>
        <div className="text-right">
          <p className="micro-label text-muted-text text-[9px]">EVIDENCE</p>
          <p className="micro-label text-amber text-[10px] mt-0.5">PROGRESS VISIBLE</p>
        </div>
      </div>
    </div>
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
        "inline-flex items-center justify-center gap-1.5 rounded-full bg-amber font-medium text-[#100a00]",
        "transition-[transform,box-shadow,background-color] duration-[var(--motion-fast)] ease-[var(--ease-standard)]",
        "hover:shadow-[0_0_40px_-12px_var(--omega-amber)] hover:scale-[1.01] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber",
        "active:scale-[0.995]",
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
        "inline-flex items-center justify-center gap-1.5 rounded-full border border-slate px-6 py-3 text-[15px] text-crisp/80",
        "transition-[border-color,color,background-color,transform] duration-[var(--motion-fast)] ease-[var(--ease-standard)]",
        "hover:border-muted-text hover:text-crisp hover:scale-[1.01]",
        "active:scale-[0.995]",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function FeatureBullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-4 text-[16px] leading-relaxed text-crisp/70 md:text-[17px]"
        >
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
        "rounded-2xl border bg-deep p-7 md:p-9 tracker-card-omega",
        accent ? "border-amber/35 shadow-[0_24px_80px_-60px_var(--omega-amber)]" : "border-slate",
        className,
      )}
      data-emphasized={accent ? "true" : "false"}
    >
      <p className={cn("micro-label", accent && "text-amber")}>{label}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

export function JourneyIndicator({
  sections,
  activeIndex,
}: {
  sections: { id: string; label: string }[];
  activeIndex: number;
}) {
  return (
    <nav className="journey-indicator hidden xl:block" aria-label="Journey progress">
      <ol className="space-y-0">
        {sections.map((section, i) => (
          <li
            key={section.id}
            className="journey-item relative py-0.5"
            data-active={i === activeIndex ? "true" : "false"}
          >
            <a
              href={`#${section.id}`}
              className="flex items-center gap-2.5 py-0.5 focus:outline-none"
              aria-current={i === activeIndex ? "true" : undefined}
            >
              <div className="journey-dot" data-active={i === activeIndex ? "true" : "false"} />
            </a>
            <span className="journey-label">{section.label}</span>
            {i < sections.length - 1 ? <div className="journey-line" /> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ActiveFlowIndicator({
  label = "ACTIVE FLOW",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span className="relative inline-flex h-2.5 w-2.5">
        <span className="flow-pulse absolute inline-flex h-full w-full rounded-full bg-amber opacity-40" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber" />
      </span>
      <span className="micro-label text-amber tracking-[0.18em]">{label}</span>
    </div>
  );
}
