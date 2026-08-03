import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/ServicePage";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildPageMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  jsonLdGraph,
  localePath,
} from "@/lib/seo";
import { getContent, isLocale, defaultLocale, type Content } from "@/content";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

/** slug → chiave meta nel dizionario */
const SLUG_META: Record<string, keyof Content["meta"]> = {
  tinteggiature: "tinteggiature",
  decorazioni: "decorazioni",
  facciate: "facciate",
  resine: "resine",
};

const SLUGS = Object.keys(SLUG_META);

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const resolved = isLocale(locale) ? locale : defaultLocale;
  const t = getContent(resolved);
  const metaKey = SLUG_META[slug];
  if (!metaKey) return {};

  return buildPageMetadata({
    locale: resolved,
    path: `/servizi/${slug}`,
    title: t.meta[metaKey].title,
    description: t.meta[metaKey].description,
  });
}

export default async function ServiceRoute({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return null;
  const t = getContent(locale);
  const service = t.services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          serviceJsonLd(locale, t, service),
          breadcrumbJsonLd([
            { name: t.site.name, path: localePath(locale) },
            { name: t.servicesSection.label, path: `${localePath(locale)}#servizi` },
            { name: service.title, path: `${localePath(locale)}/servizi/${service.slug}` },
          ])
        )}
      />
      <ServicePage locale={locale} t={t} service={service} />
    </>
  );
}
