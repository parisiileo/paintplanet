import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, StaggerReveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Stats } from "@/components/home/Stats";
import { getContent, isLocale, defaultLocale, localeHref } from "@/content";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata, breadcrumbJsonLd, jsonLdGraph, localePath } from "@/lib/seo";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const resolved = isLocale(locale) ? locale : defaultLocale;
  const t = getContent(resolved);
  return buildPageMetadata({
    locale: resolved,
    path: "/chi-siamo",
    title: t.meta.chiSiamo.title,
    description: t.meta.chiSiamo.description,
  });
}

export default async function ChiSiamoPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const t = getContent(locale);

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbJsonLd([
            { name: t.site.name, path: localePath(locale) },
            { name: t.about.heroLabel, path: `${localePath(locale)}/chi-siamo` },
          ])
        )}
      />
      {/* Hero + storia */}
      <section className="relative section-y pt-40 md:pt-48">
        <div aria-hidden className="cosmic-bg" />
        <div aria-hidden className="starfield" />
        <div className="container-pp relative">
          <div className="flex flex-col gap-5">
            <SectionLabel num="—">{t.about.heroLabel}</SectionLabel>
            <Reveal as="h1" className="font-display max-w-4xl text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.05] tracking-tight text-paper">
              {t.about.heroTitle}
            </Reveal>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <StaggerReveal className="flex max-w-2xl flex-col gap-6" stagger={0.12}>
              {t.about.story.map((p) => (
                <p key={p.slice(0, 24)} className="text-[var(--text-lead)] leading-relaxed text-mist">
                  {p}
                </p>
              ))}
            </StaggerReveal>
            <Reveal delay={0.2}>
              <div className="rounded-[var(--radius-card)] border border-paper/10 bg-nebula/40 p-8">
                <p className="tech-label text-sun">{t.about.whereLabel}</p>
                <p className="font-display mt-3 text-2xl font-semibold text-paper">{t.about.whereTitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-mist">{t.about.whereText}</p>
                <div className="mt-6">
                  <MagneticButton href={localeHref(locale, "/contatti")} variant="ghost">
                    {t.cta.quote}
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Valori (superficie chiara) */}
      <section className="surface-light section-y">
        <div className="container-pp">
          <div className="mb-12 flex flex-col gap-5">
            <SectionLabel onLight>{t.about.valuesLabel}</SectionLabel>
            <Reveal as="h2" className="font-display max-w-2xl text-[var(--text-h2)] font-semibold leading-[1.05] text-ink">
              {t.about.valuesTitle}
            </Reveal>
          </div>
          <StaggerReveal as="ul" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {t.about.values.map((v, i) => (
              <li key={v.title} className="rounded-[var(--radius-card)] border border-ink/10 bg-paper-2/60 p-7">
                <p className="tech-label mb-3 text-cobalt">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-xl font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{v.text}</p>
              </li>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <Stats t={t} />
    </>
  );
}
