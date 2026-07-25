"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatedLink } from "@/components/ui/AnimatedLink";
import { LangSwitcher } from "./LangSwitcher";
import { gsap, prefersReducedMotion } from "@/lib/animations/gsap-config";
import { localeHref, type Content, type Locale } from "@/content";

type Props = { locale: Locale; t: Content };

/** Wordmark tipografico (in attesa del logo ufficiale). */
function Logo({ locale }: { locale: Locale }) {
  return (
    <Link
      href={`/${locale}`}
      aria-label="Paint Planet — Home"
      className="font-display flex items-center gap-2 text-xl font-semibold tracking-tight text-paper"
    >
      <span
        aria-hidden
        className="h-2.5 w-2.5 rounded-full"
        style={{ background: "conic-gradient(from 210deg, var(--cobalt), var(--coral), var(--sun), var(--cobalt))" }}
      />
      Paint<span className="text-cobalt">&nbsp;Planet</span>
    </Link>
  );
}

export function Header({ locale, t }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    document.body.style.overflow = open ? "hidden" : "";

    if (open && !prefersReducedMotion()) {
      gsap.fromTo(
        menu.querySelectorAll("[data-menu-item]"),
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: "power3.out", delay: 0.15 }
      );
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[70]">
      {/* Sfondo a sfumatura continua: nessuna hairline né bordo netto del
          backdrop-blur, così non si vede lo stacco tra header e sezione.
          È un overlay separato per poter animare l'opacità in modo morbido. */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-void via-void/80 to-transparent transition-opacity duration-300 ${
          scrolled && !open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="container-pp relative flex h-[4.5rem] items-center justify-between md:h-20">
        <div className={open ? "relative z-[75]" : ""}>
          <Logo locale={locale} />
        </div>

        {/* Nav desktop */}
        <nav aria-label="Navigazione principale" className="hidden items-center gap-6 lg:flex">
          {t.nav.map((item) => {
            const href = localeHref(locale, item.href);
            return (
              <AnimatedLink
                key={item.href}
                href={href}
                active={pathname === href}
                className="text-[0.9rem] font-medium text-paper/80 transition-colors duration-300 hover:text-paper"
              >
                {item.label}
              </AnimatedLink>
            );
          })}
          <LangSwitcher current={locale} />
          <Link
            href={localeHref(locale, "/contatti")}
            className="rounded-full bg-coral px-5 py-2.5 text-[0.85rem] font-medium text-paper transition-colors duration-300 hover:bg-coral-deep"
          >
            {t.cta.quote}
          </Link>
        </nav>

        {/* Burger mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          className="relative z-[75] flex h-11 w-11 flex-col items-center justify-center gap-1.5 text-paper lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-current transition-transform duration-300 ${
              open ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-current transition-transform duration-300 ${
              open ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu mobile fullscreen */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`fixed inset-0 z-[72] flex flex-col justify-between overflow-y-auto bg-void px-6 pb-10 pt-28 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Navigazione mobile" className="flex flex-col gap-2">
          {t.nav.map((item) => {
            const href = localeHref(locale, item.href);
            return (
              <div key={item.href} data-menu-item>
                <Link
                  href={href}
                  className={`font-display block py-1.5 text-[clamp(1.7rem,6.5vw,2.5rem)] font-medium ${
                    pathname === href ? "text-cobalt" : "text-paper"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>
        <div data-menu-item className="mt-8 flex flex-col gap-5">
          <LangSwitcher current={locale} />
          <Link
            href={localeHref(locale, "/contatti")}
            className="rounded-full bg-coral px-6 py-4 text-center font-medium text-paper"
          >
            {t.cta.quote}
          </Link>
          <div className="flex items-center justify-between text-sm text-mist">
            <a href={t.site.phoneHref} className="hover:text-paper">{t.site.phone}</a>
            <a href={t.site.emailHref} className="hover:text-paper">{t.site.email}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
