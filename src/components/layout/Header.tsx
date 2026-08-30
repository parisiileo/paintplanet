"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatedLink } from "@/components/ui/AnimatedLink";
import { LangSwitcher } from "./LangSwitcher";
import { gsap, prefersReducedMotion } from "@/lib/animations/gsap-config";
import { useLenis } from "@/lib/lenis";
import { navPath, pagePath, type Content, type Locale } from "@/content";

/* Solo le chiavi usate davvero: vedi `slice` in content/index.ts. */
type Props = { locale: Locale; t: Pick<Content, "nav" | "cta" | "a11y" | "site"> };

/** Logo ufficiale. L'SVG non passa dall'ottimizzatore immagini (non
    servirebbe a nulla) ma tiene width/height espliciti: niente reflow
    quando arriva. */
function Logo({ locale }: { locale: Locale }) {
  return (
    <Link href={`/${locale}`} aria-label="Paint Planet, home" className="flex items-center py-1.5">
      <Image
        src="/logo.svg"
        alt="Paint Planet"
        width={404}
        height={109}
        priority
        unoptimized
        className="h-8 w-auto md:h-9"
      />
    </Link>
  );
}

export function Header({ locale, t }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();
  const lenisRef = useRef(lenis);
  lenisRef.current = lenis;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* La voce "Servizi" punta a `/it#servizi`: dalla home l'ancora NON cambia
     `pathname`, quindi l'effetto qui sopra non scattava e il menu restava
     aperto con lo scroll ancora bloccato. Chiudiamo su qualunque link del
     pannello: copre ancore, CTA, recapiti e switcher di lingua. */
  const closeOnLink = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("a")) setOpen(false);
  };

  /* Esc chiude il menu e riporta il focus sul burger (WCAG 2.1.2). */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      burgerRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* Scroll lock. `overflow: hidden` sul body NON blocca lo scroll touch su
     iOS Safari (verificato: a menu aperto la pagina dietro continuava a
     scorrere), quindi si usa position:fixed conservando e ripristinando
     l'offset. Lenis, quando attivo, va fermato a parte: altrimenti il suo
     stato interno diverge da quello reale e alla chiusura la pagina salta. */
  useEffect(() => {
    if (!open) return;
    const body = document.body;
    const y = window.scrollY;
    const prev = { position: body.style.position, top: body.style.top, width: body.style.width };

    lenisRef.current?.stop();
    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.width = "100%";

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      window.scrollTo(0, y);
      lenisRef.current?.start();
    };
  }, [open]);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu || !open || prefersReducedMotion()) return;
    /* Stagger corto: con delay 0.15 + stagger 0.06 + durata 0.6 l'ultima voce
       arrivava dopo un secondo pieno, ed è ciò che si legge come "scattoso". */
    gsap.fromTo(
      menu.querySelectorAll("[data-menu-item]"),
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.35, stagger: 0.04, ease: "power3.out", delay: 0.05 }
    );
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-[70]"
      /* Il contenuto della barra scende sotto il notch quando il viewport e'
         a tutto schermo (viewportFit: "cover" in layout.tsx). Dove l'inset e'
         zero — desktop, e Safari iPhone in verticale — non cambia nulla. */
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      {/* Velo di sfondo su DUE nodi (vedi .header-veil in globals.css): il
          colore anima l'opacita', la sfocatura no. Tenerli insieme era il
          bug iOS — backdrop-filter + opacity animata sullo stesso elemento
          non compone il backdrop e disegna un rettangolo nero sporco.
          Il nodo sfocato va per primo: sta sotto, e sfoca la pagina.
          Transizione a 200 ms: a 300 ms, durante uno scroll rapido, la barra
          restava visibilmente trasparente per un terzo di secondo. */}
      <div
        aria-hidden
        className={`header-veil-blur pointer-events-none absolute inset-x-0 top-0 h-[calc(100%+2rem)] ${
          scrolled && !open ? "is-on" : ""
        }`}
      />
      <div
        aria-hidden
        className={`header-veil pointer-events-none absolute inset-x-0 top-0 h-[calc(100%+2rem)] transition-opacity duration-200 ${
          scrolled && !open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="container-pp relative flex h-[4.5rem] items-center justify-between md:h-20">
        <div className={open ? "relative z-[75]" : ""}>
          <Logo locale={locale} />
        </div>

        {/* Nav desktop */}
        <nav aria-label={t.a11y.mainNav} className="hidden items-center gap-6 lg:flex">
          {t.nav.map((item) => {
            const href = navPath(locale, item.key);
            return (
              <AnimatedLink
                key={item.key}
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
            href={pagePath(locale, "contact")}
            className="rounded-full bg-coral px-5 py-2.5 text-[0.85rem] font-medium text-ink transition-colors duration-300 hover:bg-coral-deep"
          >
            {t.cta.quote}
          </Link>
        </nav>

        {/* Burger mobile */}
        <button
          ref={burgerRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
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
        onClick={closeOnLink}
        id="mobile-menu"
        /* `inert` toglie il pannello chiuso dal flusso di tabulazione e
           dall'albero di accessibilità: senza, i link invisibili restavano
           raggiungibili da tastiera e annunciati dagli screen reader. */
        inert={!open}
        className={`fixed inset-0 z-[72] flex flex-col justify-between overflow-y-auto bg-void px-6 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        /* Erano pt-28/pb-10 fissi: con viewportFit "cover" il pannello arriva
           sotto la status bar e sopra l'home indicator, e la prima e l'ultima
           voce ci finivano dentro. Stessi valori piu' l'inset. */
        style={{
          paddingTop: "calc(7rem + env(safe-area-inset-top, 0px))",
          paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom, 0px))",
        }}
      >
        <nav aria-label={t.a11y.mobileNav} className="flex flex-col gap-2">
          {t.nav.map((item) => {
            const href = navPath(locale, item.key);
            return (
              <div key={item.key} data-menu-item>
                <Link
                  href={href}
                  className={`font-display block py-1.5 text-[clamp(1.7rem,6.5vw,2.5rem)] font-medium ${
                    pathname === href ? "text-cobalt-lite" : "text-paper"
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
            href={pagePath(locale, "contact")}
            className="rounded-full bg-coral px-6 py-4 text-center font-medium text-ink"
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
