import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { nav } from "@/data/landingContent";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 reveal-nav transition-colors duration-300 ease-[var(--ease-soft)]",
        scrolled
          ? "border-b border-slate/70 bg-void/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
      data-visible={visible ? "true" : "false"}
    >
      <div className="container-omega flex h-16 items-center justify-between md:h-[72px]">
        <a href="#top" className="micro-label text-[13px] tracking-[0.32em] text-crisp">
          {nav.logo}
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[14px] text-crisp/60 transition-[color,transform] duration-150 ease-[var(--ease-ui)] hover:text-crisp hover:-translate-y-[1px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#pricing"
          className="hidden rounded-full border border-amber/40 px-5 py-2 text-[14px] text-amber transition-[background-color,color,transform,box-shadow] duration-200 ease-[var(--ease-standard)] hover:bg-amber hover:text-[#100a00] hover:scale-[1.01] hover:shadow-[0_0_32px_-10px_var(--omega-amber)] md:inline-flex"
        >
          {nav.cta}
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate md:hidden transition-transform duration-150 active:scale-95"
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden className="flex flex-col gap-[5px]">
            <span className="block h-px w-4 bg-crisp" />
            <span className="block h-px w-4 bg-crisp" />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate bg-void md:hidden">
          <div className="container-omega flex flex-col gap-5 py-6">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[15px] text-crisp/70 transition-colors duration-150 hover:text-crisp active:text-amber"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-amber px-5 py-3 text-[15px] font-medium text-[#100a00] transition-transform duration-150 active:scale-[0.99]"
            >
              {nav.cta}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
