import type { MetadataRoute } from "next";
import { locales } from "@/content";

const BASE = "https://www.paintplanet.bz.it";

/** Rotte reali indicizzabili (le pagine servizio + le pagine di navigazione). */
const ROUTES = [
  "/",
  "/servizi/tinteggiature",
  "/servizi/decorazioni",
  "/servizi/facciate",
  "/servizi/resine",
  "/chi-siamo",
  "/galleria",
  "/contatti",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap((path) =>
    locales.map((locale) => {
      const suffix = path === "/" ? "" : path;
      return {
        url: `${BASE}/${locale}${suffix}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: path === "/" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE}/${l}${suffix}`])
          ),
        },
      };
    })
  );
}
