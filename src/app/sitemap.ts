import type { MetadataRoute } from "next";
import { locales, defaultLocale, legalSlugs, getContent } from "@/content";
import { BASE, abs, localePath } from "@/lib/seo";

/**
 * Sitemap con hreflang e immagini.
 *
 * `lastModified` è una data FISSA, non `new Date()`: con la data del build
 * ogni deploy dichiarerebbe a Google che tutte le pagine sono cambiate, e a
 * furia di falsi positivi il segnale smette di essere creduto. Va aggiornata
 * a mano quando il contenuto cambia davvero.
 */
const LAST_CONTENT_UPDATE = new Date("2026-08-03");

type Route = { path: string; priority: number; changeFrequency: "monthly" | "yearly" };

const ROUTES: Route[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/servizi/tinteggiature", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servizi/decorazioni", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servizi/facciate", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servizi/resine", priority: 0.9, changeFrequency: "monthly" },
  { path: "/galleria", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contatti", priority: 0.7, changeFrequency: "yearly" },
  { path: "/chi-siamo", priority: 0.6, changeFrequency: "yearly" },
  ...legalSlugs.map((slug) => ({
    path: `/legale/${slug}`,
    priority: 0.2,
    changeFrequency: "yearly" as const,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  /* Le foto dei lavori sono il contenuto originale del sito: dichiararle
     le rende indicizzabili in Google Immagini, che per un artigiano è un
     canale di scoperta tutt'altro che secondario. */
  const galleryImages = getContent(defaultLocale).gallery.items.map((item) => abs(item.src));

  return ROUTES.flatMap(({ path, priority, changeFrequency }) =>
    locales.map((locale) => ({
      url: `${BASE}${localePath(locale, path)}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency,
      priority,
      images: path === "/galleria" ? galleryImages : undefined,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, `${BASE}${localePath(l, path)}`])),
          "x-default": `${BASE}${localePath(defaultLocale, path)}`,
        },
      },
    }))
  );
}
