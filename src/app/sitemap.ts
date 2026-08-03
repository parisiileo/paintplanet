import type { MetadataRoute } from "next";
import {
  locales,
  defaultLocale,
  getContent,
  pagePath,
  servicePath,
  legalPath,
  SERVICE_KEYS,
  LEGAL_KEYS,
  type Locale,
} from "@/content";
import { BASE, abs } from "@/lib/seo";

/**
 * Sitemap con hreflang e immagini.
 *
 * Ogni voce genera i propri path tramite le funzioni di rotta: gli slug sono
 * tradotti (/it/servizi/resine ↔ /de/leistungen/harze) e scriverli a mano qui
 * sarebbe la via più rapida per far divergere sitemap e sito reale.
 *
 * `lastModified` è una data FISSA, non `new Date()`: con la data del build
 * ogni deploy dichiarerebbe a Google che tutte le pagine sono cambiate, e a
 * furia di falsi positivi il segnale smette di essere creduto.
 */
const LAST_CONTENT_UPDATE = new Date("2026-08-03");

type Entry = {
  build: (locale: Locale) => string;
  priority: number;
  changeFrequency: "monthly" | "yearly";
  /** true solo per la galleria: allega le foto dei lavori */
  withImages?: boolean;
};

const ENTRIES: Entry[] = [
  { build: (l) => pagePath(l, "home"), priority: 1, changeFrequency: "monthly" },
  ...SERVICE_KEYS.map((key) => ({
    build: (l: Locale) => servicePath(l, key),
    priority: 0.9,
    changeFrequency: "monthly" as const,
  })),
  { build: (l) => pagePath(l, "gallery"), priority: 0.8, changeFrequency: "monthly", withImages: true },
  { build: (l) => pagePath(l, "contact"), priority: 0.7, changeFrequency: "yearly" },
  { build: (l) => pagePath(l, "about"), priority: 0.6, changeFrequency: "yearly" },
  ...LEGAL_KEYS.map((key) => ({
    build: (l: Locale) => legalPath(l, key),
    priority: 0.2,
    changeFrequency: "yearly" as const,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  /* Le foto dei lavori sono il contenuto originale del sito: dichiararle le
     rende indicizzabili in Google Immagini, canale di scoperta tutt'altro
     che secondario per un artigiano. */
  const galleryImages = getContent(defaultLocale).gallery.items.map((item) => abs(item.src));

  return ENTRIES.flatMap(({ build, priority, changeFrequency, withImages }) =>
    locales.map((locale) => ({
      url: `${BASE}${build(locale)}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency,
      priority,
      images: withImages ? galleryImages : undefined,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, `${BASE}${build(l)}`])),
          "x-default": `${BASE}${build(defaultLocale)}`,
        },
      },
    }))
  );
}
