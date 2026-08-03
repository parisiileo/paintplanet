import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsappCta } from "@/components/contact/WhatsappCta";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { getContent, isLocale, defaultLocale } from "@/content";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata, breadcrumbJsonLd, jsonLdGraph, localePath } from "@/lib/seo";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const resolved = isLocale(locale) ? locale : defaultLocale;
  const t = getContent(resolved);
  return buildPageMetadata({
    locale: resolved,
    path: "/contatti",
    title: t.meta.contatti.title,
    description: t.meta.contatti.description,
  });
}

export default async function ContattiPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const t = getContent(locale);

  return (
    <section className="relative section-y pt-40 md:pt-48">
      <JsonLd
        data={jsonLdGraph(
          breadcrumbJsonLd([
            { name: t.site.name, path: localePath(locale) },
            { name: t.contact.heroLabel, path: `${localePath(locale)}/contatti` },
          ])
        )}
      />
      <div aria-hidden className="cosmic-bg opacity-50" />
      <div className="container-pp relative">
        <div className="flex flex-col gap-5">
          <SectionLabel num="—">{t.contact.heroLabel}</SectionLabel>
          <Reveal as="h1" className="font-display max-w-3xl text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.05] tracking-tight text-paper">
            {t.contact.heroTitle}
          </Reveal>
          <Reveal as="p" delay={0.1} className="max-w-xl leading-relaxed text-mist">
            {t.contact.heroText}
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal delay={0.15}>
            <WhatsappCta t={t} />
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-col gap-6">
              <div className="rounded-[var(--radius-card)] border border-paper/10 bg-nebula/30 p-7">
                <p className="tech-label mb-4 text-mist">{t.contact.dataLabel}</p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href={t.site.phoneHref} className="font-display text-xl font-medium text-paper transition-colors hover:text-cobalt-lite">
                      {t.site.phone}
                    </a>
                  </li>
                  <li>
                    <a href={t.site.emailHref} className="font-display text-xl font-medium text-paper transition-colors hover:text-cobalt-lite">
                      {t.site.email}
                    </a>
                  </li>
                  <li className="text-mist">{t.site.address}</li>
                  <li>
                    <a
                      href={t.site.instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mist transition-colors hover:text-cobalt-lite"
                    >
                      Instagram {t.site.instagram}
                    </a>
                  </li>
                </ul>
              </div>

              <MapEmbed t={t} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
