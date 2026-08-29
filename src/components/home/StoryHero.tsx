"use client";

import { useRef, useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PaintSweep } from "@/components/canvas/PaintSweep";
import { useIsoLayoutEffect } from "@/lib/animations/hooks";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations/gsap-config";
import { pagePath, servicesAnchorPath, type Content, type Locale } from "@/content";

/* `services` arriva ridotto ai tre campi che l'aside desktop usa davvero:
   il blocco completo pesa 6,7 kB ed è già reso da ServicesOverview, che è
   un componente server e quindi non finisce nel payload RSC. */
type Props = {
  locale: Locale;
  t: Pick<Content, "hero" | "story" | "cta"> & {
    services: { key: string; tone: Content["services"][number]["tone"]; title: string }[];
  };
};

/**
 * Hero + storytelling scroll-driven. Un'unica sezione alta: la pennellata
 * (PaintSweep, SVG) resta "sticky" e lo scroll guida sia lo stendersi della
 * vernice sullo schermo (ref condiviso, niente re-render) sia il cross-fade
 * degli step di testo.
 *
 * L'entrata del titolo è in CSS puro (hero-line-anim, vedi globals.css),
 * robusta ai doppi mount di React. Con reduced-motion la sezione diventa un
 * layout statico impilato.
 */
const SWEEP_BASE = 0.3;

export function StoryHero({ locale, t }: Props) {
  const progress = useRef(0);
  const sweepApi = useRef<((reveal: number) => void) | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  /* Layout statico quando: reduced-motion OPPURE mobile / touch. Sui telefoni
     lo scroll-scrub sticky (viewport che si ridimensiona con la barra URL,
     scroll throttlato, SVG con blur) generava scatti e glitch: meglio una
     versione impilata e stabile.
     Il default è `true`, cioè il SERVER rende la variante statica. Prima
     rendeva quella desktop e su mobile, al mount, l'albero cambiava: l'hero
     cresceva e tutto ciò che stava sotto saltava. Misurato un layout shift
     da 0,21 su una sola sezione (#servizi passava da top 620 a top 0).
     Con questo default su mobile server e client coincidono e il salto non
     esiste; su desktop il passaggio alla variante scroll-driven avviene a
     parità di altezza, perché il CSS riserva i 250vh prima del mount. */
  const [isStatic, setIsStatic] = useState(true);

  useIsoLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 860px), (pointer: coarse)");
    const compute = () => setIsStatic(mq.matches || prefersReducedMotion());
    compute();
    mq.addEventListener("change", compute);
    return () => mq.removeEventListener("change", compute);
  }, []);

  useIsoLayoutEffect(() => {
    const section = sectionRef.current;
    const steps = stepsRef.current;
    if (!section || !steps || isStatic) return;

    const stepEls = steps.querySelectorAll<HTMLElement>("[data-step]");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          onUpdate: (self) => {
            progress.current = self.progress;
            // Pilota la pennellata direttamente dallo scroll (non dipende dal rAF)
            sweepApi.current?.(SWEEP_BASE + self.progress * (1 - SWEEP_BASE));
          },
        },
      });

      // Il blocco hero (titolo/CTA) sfuma e sale mentre la vernice avanza
      tl.to(heroRef.current, { autoAlpha: 0, y: -60, duration: 0.16 }, 0);

      // Gli step entrano/escono in finestre successive
      stepEls.forEach((el, i) => {
        const at = 0.2 + i * 0.19;
        tl.fromTo(el, { autoAlpha: 0, y: 36 }, { autoAlpha: 1, y: 0, duration: 0.07 }, at);
        if (i < stepEls.length - 1) {
          tl.to(el, { autoAlpha: 0, y: -36, duration: 0.07 }, at + 0.12);
        }
      });
    }, section);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [isStatic]);

  /* Titolo a forte gerarchia (grande parola "colore" al centro) */
  const Title = (
    <h1 className="font-display font-semibold tracking-tight text-paper antialiased [text-shadow:0_0_44px_rgba(7,9,18,0.35)]">
      <span className="block overflow-hidden py-[0.05em]">
        <span
          className="hero-line-anim inline-block text-[clamp(1.5rem,4.2vw,3rem)] font-light text-paper/85"
          style={{ animationDelay: "0.12s" }}
        >
          {t.hero.titleLead}
        </span>
      </span>
      <span className="block overflow-hidden py-[0.06em]">
        <span
          className="hero-line-anim inline-block text-[clamp(4rem,15vw,13rem)] leading-[0.85]"
          style={{ animationDelay: "0.22s" }}
        >
          {t.hero.titleAccent}
        </span>
      </span>
      <span className="block overflow-hidden py-[0.05em]">
        <span
          className="hero-line-anim mt-1 inline-block text-[clamp(1.5rem,4.2vw,3rem)] font-light text-paper/85"
          style={{ animationDelay: "0.34s" }}
        >
          {t.hero.titleTail}
        </span>
      </span>
    </h1>
  );

  /* ---- Layout statico (reduced motion o mobile/touch) ---- */
  if (isStatic) {
    return (
      <section className="story-static relative overflow-hidden">
        <div aria-hidden className="cosmic-bg" />
        <div aria-hidden className="absolute inset-0"><PaintSweep progress={progress} apiRef={sweepApi} base={SWEEP_BASE} /></div>
        <div className="container-pp relative z-10 pb-20 pt-40">
          {Title}
          <p className="mt-8 max-w-xl text-lead text-mist">{t.hero.lead}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href={pagePath(locale, "contact")}>{t.cta.quote}</MagneticButton>
            <MagneticButton href={servicesAnchorPath(locale)} variant="ghost">
              {t.hero.ctaServices}
            </MagneticButton>
          </div>
          <ol className="mt-16 grid gap-8 sm:grid-cols-2">
            {t.story.steps.map((s) => (
              <li key={s.num} className="border-l border-paper/15 pl-5">
                <p className="font-display text-3xl text-cobalt-lite">{s.num}</p>
                <p className="mt-2 font-display text-xl text-paper">{s.title}</p>
                <p className="mt-2 text-sm text-mist">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    /* 250vh invece di 420vh: a 420 l'hero era il 45% dell'intera pagina e il
       primo servizio arrivava dopo 4,2 schermate di scroll. L'effetto della
       pennellata e il cross-fade degli step restano, la pazienza richiesta no.
       Riguarda solo il desktop: su touch questo ramo non viene mai reso. */
    <section ref={sectionRef} className="story-scroll relative h-[250vh]">
      {/* Sticky stage */}
      <div className="story-stage sticky top-0 flex h-screen items-center overflow-hidden">
        <div aria-hidden className="cosmic-bg" />
        <div aria-hidden className="starfield" />

        {/* Pennellata */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <PaintSweep progress={progress} apiRef={sweepApi} base={SWEEP_BASE} />
        </div>

        {/* Dissolvenza in basso verso lo sfondo pagina: evita lo stacco netto
            tra la vernice e la sezione successiva. Sta sopra la vernice ma
            sotto il contenuto (che è z-10). */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent to-space"
        />

        {/* Contenuto hero (sfuma allo scroll) */}
        <div ref={heroRef} className="container-pp relative z-10">
          {Title}
          <p
            className="hero-fade-anim mt-8 max-w-lg text-lead leading-relaxed text-paper/75 [text-shadow:0_0_20px_rgba(7,9,18,0.4)]"
            style={{ animationDelay: "0.52s" }}
          >
            {t.hero.lead}
          </p>
          <div className="hero-fade-anim mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.64s" }}>
            <MagneticButton href={pagePath(locale, "contact")}>{t.cta.quote}</MagneticButton>
            <MagneticButton href={servicesAnchorPath(locale)} variant="ghost">
              {t.hero.ctaServices}
            </MagneticButton>
          </div>

          {/* Specialità — riempie il vuoto a destra dell'hero */}
          <aside
            className="hero-fade-anim absolute right-[var(--gutter)] top-1/2 hidden -translate-y-1/2 flex-col items-end gap-3.5 xl:flex"
            style={{ animationDelay: "0.72s" }}
          >
            {t.services.map((s) => (
              <div
                key={s.key}
                className={`flex items-center gap-3 ${
                  { cobalt: "tone-cobalt", coral: "tone-coral", sun: "tone-sun", mint: "tone-mint" }[s.tone]
                }`}
              >
                <span className="text-[0.95rem] font-medium text-paper/85 [text-shadow:0_0_12px_rgba(7,9,18,0.5)]">
                  {s.title}
                </span>
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--tone)" }} />
              </div>
            ))}
          </aside>
        </div>

        {/* Step di storytelling: numero+titolo grande a sinistra (riempie
            l'area di colore) + card di dettaglio a destra. Cross-fade. */}
        <div ref={stepsRef} className="pointer-events-none absolute inset-0 z-10">
          {t.story.steps.map((s, i) => (
            <div key={s.num} data-step className="absolute inset-0" style={{ opacity: 0 }}>
              {/* Blocco grande — riempie il vuoto nella vernice */}
              <div className="container-pp absolute inset-x-0 top-[45%] -translate-y-1/2">
                <div className="max-w-2xl">
                  <span
                    className="font-display block font-semibold leading-[0.78] text-transparent"
                    style={{
                      fontSize: "clamp(5.5rem, 16vw, 15rem)",
                      WebkitTextStroke: "1.5px rgba(246,244,238,0.34)",
                    }}
                  >
                    {s.num}
                  </span>
                  <h3 className="mt-3 font-display text-[clamp(1.9rem,4.4vw,3.6rem)] font-medium leading-[1.0] text-paper antialiased [text-shadow:0_0_34px_rgba(7,9,18,0.42)]">
                    {s.title}
                  </h3>
                </div>
              </div>

              {/* Card di dettaglio (in basso a destra) */}
              <div className="container-pp absolute inset-x-0 bottom-[12vh]">
                <article className="ml-auto flex max-w-[24rem] flex-col gap-5 rounded-[1.6rem] bg-void/80 p-7 shadow-[0_40px_90px_-35px_rgba(0,0,0,0.95)] ring-1 ring-inset ring-white/10 backdrop-blur-2xl md:mr-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tabular-nums text-mist-dim">
                      {s.num} <span className="text-mist-dim/50">/ 0{t.story.steps.length}</span>
                    </span>
                  </div>
                  <p className="text-[0.95rem] leading-relaxed text-mist">{s.text}</p>
                  <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${((i + 1) / t.story.steps.length) * 100}%`,
                        background: "linear-gradient(90deg, var(--cobalt), var(--coral), var(--sun))",
                      }}
                    />
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll cue (stile "mouse" con pallino che scende) */}
        <div
          aria-hidden
          className="hero-fadeop-anim absolute bottom-9 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
          style={{ animationDelay: "0.8s" }}
        >
          <span className="flex h-9 w-[24px] justify-center rounded-full pt-2 ring-1 ring-paper/45">
            <span
              className="h-1.5 w-[3px] rounded-full bg-paper/85"
              style={{ animation: "pp-scroll-dot 1.6s ease-in-out infinite" }}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
