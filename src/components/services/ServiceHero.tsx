import Link from "next/link";
import { servicesAnchorPath, type Locale, type ServiceContent } from "@/content";

const TONE_CLASS: Record<string, string> = {
  cobalt: "tone-cobalt",
  coral: "tone-coral",
  sun: "tone-sun",
  mint: "tone-mint",
};

/**
 * Hero di pagina servizio su base cosmic, con accento del tone del servizio.
 * Entrata in CSS puro (classi sh-line / sh-fade, vedi globals.css): robusta
 * ai doppi mount di React durante il cambio pagina.
 */
export function ServiceHero({
  service,
  locale,
  backLabel,
}: {
  service: ServiceContent;
  locale: Locale;
  backLabel: string;
}) {
  return (
    <section className={`relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-48 ${TONE_CLASS[service.tone]}`}>
      <div aria-hidden className="cosmic-bg" />
      <div aria-hidden className="starfield" />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full opacity-30 blur-[100px]"
        style={{ background: "var(--tone)" }}
      />
      <div className="container-pp relative">
        <div className="sh-fade sh-fade-1">
          <Link
            href={servicesAnchorPath(locale)}
            className="tech-label mb-8 inline-flex items-center gap-2 text-mist transition-colors hover:text-paper"
          >
            <span aria-hidden>←</span> {backLabel}
          </Link>
        </div>
        <h1 className="font-display max-w-4xl text-[clamp(2.4rem,6vw,5.2rem)] font-semibold leading-[1.03] tracking-tight text-paper">
          <span className="block overflow-hidden">
            <span className="sh-line inline-block will-change-transform">{service.heroTitle}</span>
          </span>
        </h1>
        <p className="sh-fade sh-fade-2 mt-7 max-w-2xl text-lead leading-relaxed text-mist">
          {service.heroText}
        </p>
      </div>
    </section>
  );
}
