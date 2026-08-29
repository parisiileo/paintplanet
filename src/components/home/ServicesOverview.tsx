import Link from "next/link";
import { HighlightTitle } from "@/components/ui/HighlightTitle";
import { Reveal, StaggerReveal } from "@/components/ui/Reveal";
import { servicePath, type Content, type Locale } from "@/content";

type Props = { locale: Locale; t: Content };

const TONE_CLASS: Record<string, string> = {
  cobalt: "tone-cobalt",
  coral: "tone-coral",
  sun: "tone-sun",
  mint: "tone-mint",
};

export function ServicesOverview({ locale, t }: Props) {
  return (
    <section id="servizi" className="section-y relative scroll-mt-24">
      <div className="container-pp">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-h2 font-semibold leading-[1.05] text-paper">
              <HighlightTitle title={t.servicesSection.title} color="pop" />
            </h2>
          </div>
          <p className="max-w-sm text-mist">{t.servicesSection.text}</p>
        </div>

        <StaggerReveal className="mt-14 grid gap-5 md:grid-cols-2" stagger={0.08}>
          {t.services.map((s) => (
            <Link
              key={s.key}
              href={servicePath(locale, s.key)}
              className={`group relative overflow-hidden rounded-[var(--radius-card)] border border-paper/10 bg-nebula/40 p-8 transition-colors duration-300 hover:border-[var(--tone)] ${TONE_CLASS[s.tone]}`}
            >
              {/* glow tone */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: "var(--tone)" }}
              />
              <div className="relative flex items-start justify-between">
                <span className="font-mono text-sm text-[var(--tone)]">{s.num}</span>
                <span
                  aria-hidden
                  className="inline-block text-2xl text-paper/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--tone)]"
                >
                  →
                </span>
              </div>
              <h3 className="font-display mt-8 text-2xl font-medium text-paper md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-mist">{s.short}</p>
            </Link>
          ))}
        </StaggerReveal>

        <Reveal className="mt-10">
          <div className="drip-divider" />
        </Reveal>
      </div>
    </section>
  );
}
