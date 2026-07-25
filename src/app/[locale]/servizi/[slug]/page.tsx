import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/ServicePage";
import { getContent, isLocale, locales, defaultLocale, type Content } from "@/content";

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
  const t = getContent(isLocale(locale) ? locale : defaultLocale);
  const metaKey = SLUG_META[slug];
  if (!metaKey) return {};
  const meta = t.meta[metaKey];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/servizi/${slug}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/servizi/${slug}`])),
    },
  };
}

export default async function ServiceRoute({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return null;
  const t = getContent(locale);
  const service = t.services.find((s) => s.slug === slug);
  if (!service) notFound();
  return <ServicePage locale={locale} t={t} service={service} />;
}
