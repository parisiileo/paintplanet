import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutPage } from "@/components/pages/AboutPage";
import { GalleryPage } from "@/components/pages/GalleryPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildPageMetadata,
  breadcrumbJsonLd,
  galleryJsonLd,
  jsonLdGraph,
} from "@/lib/seo";
import {
  getContent,
  isLocale,
  pageSegments,
  pagePath,
  resolvePageSegment,
  alternatesOf,
  type Locale,
  type PageKey,
} from "@/content";

/**
 * Pagine semplici di primo livello. Il segmento è tradotto per lingua
 * (chi-siamo / ueber-uns, galleria / galerie, contatti / kontakt): questa
 * rotta lo risolve nella chiave stabile e monta la pagina giusta.
 */

type PageProps = { params: Promise<{ locale: string; section: string }> };

/** Solo le combinazioni valide vengono generate: le altre sono 404. */
export const dynamicParams = false;

export function generateStaticParams({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return [];
  return pageSegments(params.locale).map((section) => ({ section }));
}

/** Titolo/descrizione per chiave di pagina. */
function metaFor(key: PageKey, t: ReturnType<typeof getContent>) {
  if (key === "about") return t.meta.chiSiamo;
  if (key === "gallery") return t.meta.galleria;
  return t.meta.contatti;
}

/** Etichetta del breadcrumb, coerente con l'occhiello mostrato in pagina. */
function crumbFor(key: PageKey, t: ReturnType<typeof getContent>) {
  if (key === "about") return t.about.heroLabel;
  if (key === "gallery") return t.gallery.heroLabel;
  return t.contact.heroLabel;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, section } = await params;
  if (!isLocale(locale)) return {};
  const key = resolvePageSegment(locale, section);
  if (!key) return {};

  const t = getContent(locale);
  const meta = metaFor(key, t);
  return buildPageMetadata({
    locale,
    // Gli alternate devono puntare al segmento TRADOTTO di ogni lingua.
    paths: alternatesOf((l) => pagePath(l, key)),
    title: meta.title,
    description: meta.description,
  });
}

export default async function SectionPage({ params }: PageProps) {
  const { locale, section } = await params;
  if (!isLocale(locale)) notFound();
  const key = resolvePageSegment(locale, section);
  if (!key) notFound();

  const t = getContent(locale);
  const typedLocale = locale as Locale;

  const breadcrumb = breadcrumbJsonLd([
    { name: t.site.name, path: pagePath(typedLocale, "home") },
    { name: crumbFor(key, t), path: pagePath(typedLocale, key) },
  ]);

  return (
    <>
      <JsonLd
        data={
          key === "gallery"
            ? jsonLdGraph(galleryJsonLd(typedLocale, t), breadcrumb)
            : jsonLdGraph(breadcrumb)
        }
      />
      {key === "about" && <AboutPage locale={typedLocale} t={t} />}
      {key === "gallery" && <GalleryPage t={t} />}
      {key === "contact" && <ContactPage t={t} />}
    </>
  );
}
