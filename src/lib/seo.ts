import type { Metadata } from "next";
import {
  locales,
  defaultLocale,
  servicePath,
  pagePath,
  type Content,
  type Locale,
  type ServiceContent,
} from "@/content";

/**
 * PAINT PLANET — SEO centralizzata.
 *
 * Un punto solo per dominio, metadati e dati strutturati: le rotte si
 * limitano a dichiarare *cosa* sono, non a ricostruire ogni volta canonical,
 * hreflang e OpenGraph (era la fonte più probabile di incoerenze).
 */

export const BASE = "https://www.paintplanet.bz.it";

/** @id stabili: permettono ai nodi dello schema di riferirsi fra loro. */
export const BUSINESS_ID = `${BASE}/#business`;
export const WEBSITE_ID = `${BASE}/#website`;

const OG_LOCALES: Record<Locale, string> = { it: "it_IT", de: "de_DE" };

export function abs(path: string): string {
  return `${BASE}${path}`;
}

/** Path localizzato senza dominio: "/it/servizi/resine" */
export function localePath(locale: Locale | string, path = ""): string {
  return `/${locale}${path}`;
}

type PageMetaInput = {
  locale: Locale;
  /**
   * Path GIÀ localizzato per ogni lingua. Gli slug sono tradotti, quindi
   * l'alternativa italiana di /de/leistungen/harze è /it/servizi/resine:
   * non si può derivare da una sola stringa.
   * Omesso = home.
   */
  paths?: Record<Locale, string>;
  title: string;
  description: string;
  /** true per la home: il titolo non passa dal template "%s | ..." */
  absoluteTitle?: boolean;
  /** Immagine OG specifica; di default quella della lingua */
  image?: string;
};

/**
 * Metadati completi di una pagina: canonical, hreflang con x-default,
 * OpenGraph e Twitter. Da usare in OGNI route.
 */
export function buildPageMetadata({
  locale,
  paths,
  title,
  description,
  absoluteTitle = false,
  image,
}: PageMetaInput): Metadata {
  const resolved = paths ?? (Object.fromEntries(
    locales.map((l) => [l, localePath(l)])
  ) as Record<Locale, string>);
  const url = resolved[locale];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...resolved,
        "x-default": resolved[defaultLocale],
      },
    },
    openGraph: {
      type: "website",
      url: abs(url),
      locale: OG_LOCALES[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => OG_LOCALES[l]),
      siteName: "Paint Planet",
      title,
      description,
      /* Immagine dichiarata esplicitamente su OGNI pagina: la convenzione a
         file `opengraph-image.tsx` copre solo il segmento in cui vive, e le
         rotte figlie (servizi, galleria, legale) restavano senza anteprima
         — proprio quelle che si condividono su WhatsApp. */
      images: [
        {
          url: image ?? abs(`${localePath(locale)}/opengraph-image`),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/* ------------------------------------------------------------------ */
/* Dati strutturati                                                     */
/* ------------------------------------------------------------------ */

/**
 * Orari in formato macchina: lunedì-sabato, con pausa pranzo espressa come
 * due fasce separate (è il modo corretto: un'unica 08:00-19:00 direbbe a
 * Google che siamo aperti anche a mezzogiorno).
 */
const WORKING_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const OPENING_HOURS = [
  { "@type": "OpeningHoursSpecification", dayOfWeek: WORKING_DAYS, opens: "08:00", closes: "12:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: WORKING_DAYS, opens: "13:00", closes: "19:00" },
  // Domenica dichiarata esplicitamente chiusa: senza, Google la considera
  // "orario non specificato" e non mostra mai "Chiuso" nel pannello locale.
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "00:00", closes: "00:00" },
];

/** Foto reali di cantiere: Google le preferisce alle sole immagini OG. */
const SHOWCASE_IMAGES = [
  "/gallery/soggiorno-spatolato-grigio.jpg",
  "/gallery/bagno-microcemento.jpg",
  "/gallery/parete-tv-nicchie-led.jpg",
];

/**
 * Scheda dell'attività. È il nodo cardine: tutto il resto vi si aggancia
 * tramite BUSINESS_ID, così Google vede un'unica entità e non quattro.
 */
export function businessJsonLd(locale: Locale, t: Content) {
  return {
    "@type": ["HousePainter", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: t.site.name,
    legalName: t.company.tradeName,
    slogan: t.site.payoffPrimary,
    description: t.meta.home.description,
    url: abs(localePath(locale)),
    email: t.site.email,
    telephone: t.site.phone,
    vatID: `IT${t.company.vat}`,
    taxID: t.company.taxCode,
    foundingDate: "2024-03-20",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    image: [abs(`${localePath(locale)}/opengraph-image`), ...SHOWCASE_IMAGES.map(abs)],
    logo: abs("/icon"),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Piazza Giuseppe Mazzini 18/B",
      addressLocality: "Bolzano",
      postalCode: "39100",
      addressRegion: "BZ",
      addressCountry: "IT",
    },
    geo: { "@type": "GeoCoordinates", latitude: 46.4966, longitude: 11.3536 },
    openingHoursSpecification: OPENING_HOURS,
    areaServed: [
      { "@type": "City", name: "Bolzano" },
      { "@type": "AdministrativeArea", name: "Alto Adige — Südtirol" },
    ],
    knowsAbout: ["Pittore e verniciatore", "Intonacatore", "Stuccatore"],
    knowsLanguage: ["it", "de"],
    sameAs: [t.site.instagramHref],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: t.site.phoneHref.replace("tel:", ""),
      email: t.site.email,
      availableLanguage: ["Italian", "German"],
      areaServed: "IT",
    },
    /* Catalogo servizi: aggancia le quattro pagine servizio all'attività. */
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t.servicesSection.label,
      itemListElement: t.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${abs(servicePath(locale, s.key))}#service`,
          name: s.title,
          description: s.short,
        },
      })),
    },
  };
}

export function websiteJsonLd(locale: Locale, t: Content) {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: abs(localePath(locale)),
    name: t.site.name,
    description: t.meta.home.description,
    inLanguage: locale,
    publisher: { "@id": BUSINESS_ID },
  };
}

export type Crumb = { name: string; path: string };

/**
 * Percorso di navigazione. `path` è già localizzato ("/it/galleria").
 * L'ultimo elemento è la pagina corrente.
 */
export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export function serviceJsonLd(locale: Locale, service: ServiceContent) {
  const url = abs(servicePath(locale, service.key));

  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    description: service.heroText,
    url,
    serviceType: service.title,
    inLanguage: locale,
    provider: { "@id": BUSINESS_ID },
    areaServed: [
      { "@type": "City", name: "Bolzano" },
      { "@type": "AdministrativeArea", name: "Alto Adige — Südtirol" },
    ],
    /* Le lavorazioni comprese diventano un catalogo: è il modo in cui Google
       capisce cosa include davvero il servizio. */
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.features.map((f) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: f.title, description: f.text },
      })),
    },
  };
}

/** Galleria: ogni foto come ImageObject, con didascalia reale. */
export function galleryJsonLd(locale: Locale, t: Content) {
  return {
    "@type": "ImageGallery",
    "@id": `${abs(pagePath(locale, "gallery"))}#gallery`,
    name: t.meta.galleria.title,
    description: t.meta.galleria.description,
    url: abs(pagePath(locale, "gallery")),
    inLanguage: locale,
    isPartOf: { "@id": WEBSITE_ID },
    author: { "@id": BUSINESS_ID },
    associatedMedia: t.gallery.items.map((item) => ({
      "@type": "ImageObject",
      contentUrl: abs(item.src),
      name: item.title,
      caption: item.caption,
      width: item.width,
      height: item.height,
      creator: { "@id": BUSINESS_ID },
    })),
  };
}

/** Avvolge i nodi in un @graph unico: un solo <script> per pagina. */
export function jsonLdGraph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
