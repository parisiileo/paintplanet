import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, StaggerReveal } from "@/components/ui/Reveal";
import { HighlightTitle } from "@/components/ui/HighlightTitle";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ServiceHero } from "./ServiceHero";
import { pagePath, servicePath, type Content, type Locale, type ServiceContent } from "@/content";

type Props = { locale: Locale; t: Content; service: ServiceContent };

const TONE_CLASS: Record<string, string> = {
  cobalt: "tone-cobalt",
  coral: "tone-coral",
  sun: "tone-sun",
  mint: "tone-mint",
};

/** Template completo di pagina servizio, riusato dalla route dinamica. */
export function ServicePage({ locale, t, service }: Props) {
  const others = t.services.filter((s) => s.key !== service.key);
  const tone = TONE_CLASS[service.tone];

  return (
    <div className={tone}>
      <ServiceHero service={service} locale={locale} backLabel={t.servicePage.backToServices} />

      {/* Cosa comprende */}
      <section className="section-y">
        <div className="container-pp">
          <div className="mb-12 flex flex-col gap-5">
            <SectionLabel num={service.num}>{t.servicePage.includesLabel}</SectionLabel>
            <Reveal as="h2" className="font-display max-w-2xl text-[var(--text-h2)] font-semibold leading-[1.05] text-paper">
              <HighlightTitle title={t.servicePage.includesTitle} color="pop" />
            </Reveal>
          </div>
          <StaggerReveal className="grid gap-4 md:grid-cols-2" stagger={0.08}>
            {service.features.map((f) => (
              <article
                key={f.title}
                className="rounded-[var(--radius-card)] border border-paper/10 bg-nebula/30 p-7 transition-colors duration-300 hover:border-[var(--tone)]"
              >
                <h3 className="font-display text-xl font-semibold text-paper">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{f.text}</p>
              </article>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Processo (superficie chiara per contrasto) */}
      <section className="surface-light section-y">
        <div className="container-pp">
          <div className="mb-12 flex flex-col gap-5">
            <SectionLabel onLight>{t.servicePage.processLabel}</SectionLabel>
            <Reveal as="h2" className="font-display max-w-2xl text-[var(--text-h2)] font-semibold leading-[1.05] text-ink">
              {t.servicePage.processTitle}
            </Reveal>
          </div>
          <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {service.process.map((p, i) => (
              <div key={p.title} className="relative rounded-[var(--radius-card)] border border-ink/10 bg-paper-2/60 p-6">
                <p className="font-display text-3xl font-semibold" style={{ color: "var(--tone)" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-3 text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.text}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA + altri servizi */}
      <section className="section-y">
        <div className="container-pp grid items-start gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SectionLabel>{t.servicePage.ctaLabel}</SectionLabel>
            <Reveal as="h2" className="font-display text-[var(--text-h2)] font-semibold leading-[1.05] text-paper">
              {t.servicePage.ctaTitle}
            </Reveal>
            <Reveal as="p" delay={0.1} className="max-w-md leading-relaxed text-mist">
              {t.servicePage.ctaText}
            </Reveal>
            <Reveal delay={0.15} className="mt-2">
              <MagneticButton href={pagePath(locale, "contact")}>{t.cta.quote}</MagneticButton>
            </Reveal>
          </div>

          <StaggerReveal className="flex flex-col gap-4" stagger={0.1}>
            {others.map((o) => (
              <Link
                key={o.key}
                href={servicePath(locale, o.key)}
                className={`group flex items-center justify-between rounded-[var(--radius-card)] border border-paper/10 p-6 transition-colors duration-300 hover:border-[var(--tone)] ${TONE_CLASS[o.tone]}`}
              >
                <div>
                  <p className="tech-label mb-1" style={{ color: "var(--tone)" }}>{o.num}</p>
                  <p className="font-display text-xl font-semibold text-paper">{o.title}</p>
                </div>
                <span
                  aria-hidden
                  className="text-2xl text-mist transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </Link>
            ))}
          </StaggerReveal>
        </div>
      </section>
    </div>
  );
}
