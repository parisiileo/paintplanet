import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageView } from "@/components/legal/LegalPageView";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata, breadcrumbJsonLd, jsonLdGraph, localePath } from "@/lib/seo";
import { getContent, isLocale, defaultLocale, legalSlugs, getLegalPage } from "@/content";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return legalSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const resolved = isLocale(locale) ? locale : defaultLocale;
  const t = getContent(resolved);
  const page = getLegalPage(t, slug);
  if (!page) return {};

  return buildPageMetadata({
    locale: resolved,
    path: `/legale/${slug}`,
    title: page.meta.title,
    description: page.meta.description,
  });
}

export default async function LegalRoute({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return null;
  const t = getContent(locale);
  const page = getLegalPage(t, slug);
  if (!page) notFound();

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbJsonLd([
            { name: t.site.name, path: localePath(locale) },
            { name: page.title, path: `${localePath(locale)}/legale/${slug}` },
          ])
        )}
      />
      <LegalPageView t={t} page={page} />
    </>
  );
}
