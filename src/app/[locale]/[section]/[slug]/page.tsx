import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/ServicePage";
import { LegalPageView } from "@/components/legal/LegalPageView";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildPageMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  jsonLdGraph,
} from "@/lib/seo";
import {
  getContent,
  isLocale,
  SERVICE_KEYS,
  LEGAL_KEYS,
  sectionSegment,
  serviceSlug,
  legalSlug,
  servicePath,
  legalPath,
  pagePath,
  servicesAnchorPath,
  resolveSectionSegment,
  resolveServiceSlug,
  resolveLegalSlug,
  alternatesOf,
  type Locale,
  type Content,
} from "@/content";

/**
 * Sottopagine di sezione: servizi e pagine legali. Sia il segmento di sezione
 * sia lo slug sono tradotti (servizi/resine ↔ leistungen/harze), quindi qui si
 * risolve la coppia in chiavi stabili prima di scegliere cosa renderizzare.
 */

type PageProps = { params: Promise<{ locale: string; section: string; slug: string }> };

export const dynamicParams = false;

/**
 * Genera SIA `section` SIA `slug`. Il segmento padre `[section]` è una page,
 * non un layout: Next non ne propaga i params qui, quindi `section` arriverebbe
 * undefined e non verrebbe prerenderizzato nulla.
 */
export function generateStaticParams({ params }: { params: { locale: string } }) {
  const { locale } = params;
  if (!isLocale(locale)) return [];

  return [
    ...SERVICE_KEYS.map((key) => ({
      section: sectionSegment(locale, "services"),
      slug: serviceSlug(locale, key),
    })),
    ...LEGAL_KEYS.map((key) => ({
      section: sectionSegment(locale, "legal"),
      slug: legalSlug(locale, key),
    })),
  ];
}

/** slug servizio → chiave meta nel dizionario (stessa etichetta della chiave). */
const SERVICE_META: Record<(typeof SERVICE_KEYS)[number], keyof Content["meta"]> = {
  tinteggiature: "tinteggiature",
  decorazioni: "decorazioni",
  facciate: "facciate",
  resine: "resine",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, section, slug } = await params;
  if (!isLocale(locale)) return {};
  const kind = resolveSectionSegment(locale, section);
  const t = getContent(locale);

  if (kind === "services") {
    const key = resolveServiceSlug(locale, slug);
    if (!key) return {};
    const meta = t.meta[SERVICE_META[key]];
    return buildPageMetadata({
      locale,
      paths: alternatesOf((l) => servicePath(l, key)),
      title: meta.title,
      description: meta.description,
    });
  }

  if (kind === "legal") {
    const key = resolveLegalSlug(locale, slug);
    if (!key) return {};
    const page = t.legal[key];
    return buildPageMetadata({
      locale,
      paths: alternatesOf((l) => legalPath(l, key)),
      title: page.meta.title,
      description: page.meta.description,
    });
  }

  return {};
}

export default async function SectionSlugPage({ params }: PageProps) {
  const { locale, section, slug } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const kind = resolveSectionSegment(typedLocale, section);
  const t = getContent(typedLocale);

  if (kind === "services") {
    const key = resolveServiceSlug(typedLocale, slug);
    if (!key) notFound();
    const service = t.services.find((s) => s.key === key);
    if (!service) notFound();

    return (
      <>
        <JsonLd
          data={jsonLdGraph(
            serviceJsonLd(typedLocale, service),
            breadcrumbJsonLd([
              { name: t.site.name, path: pagePath(typedLocale, "home") },
              { name: t.servicesSection.label, path: servicesAnchorPath(typedLocale) },
              { name: service.title, path: servicePath(typedLocale, key) },
            ])
          )}
        />
        <ServicePage locale={typedLocale} t={t} service={service} />
      </>
    );
  }

  if (kind === "legal") {
    const key = resolveLegalSlug(typedLocale, slug);
    if (!key) notFound();
    const page = t.legal[key];

    return (
      <>
        <JsonLd
          data={jsonLdGraph(
            breadcrumbJsonLd([
              { name: t.site.name, path: pagePath(typedLocale, "home") },
              { name: page.title, path: legalPath(typedLocale, key) },
            ])
          )}
        />
        <LegalPageView t={t} page={page} />
      </>
    );
  }

  notFound();
}
