import { it } from "./it";
import { de } from "./de";
import type { Content, LegalPage, Locale } from "./types";

export const locales = ["it", "de"] as const;
export const defaultLocale: Locale = "it";

export const localeNames: Record<Locale, string> = {
  it: "Italiano",
  de: "Deutsch",
};

const dictionaries: Record<Locale, Content> = { it, de };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

/** Prefissa un href interno (senza locale) col locale corrente. */
export function localeHref(locale: Locale, href: string): string {
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

/** Slug delle pagine legali: identici in tutte le lingue, come per i servizi. */
export const legalSlugs = ["privacy", "cookie", "note-legali"] as const;

const LEGAL_KEYS = {
  privacy: "privacy",
  cookie: "cookie",
  "note-legali": "terms",
} as const satisfies Record<(typeof legalSlugs)[number], keyof Content["legal"]>;

export function getLegalPage(t: Content, slug: string): LegalPage | null {
  const key = LEGAL_KEYS[slug as (typeof legalSlugs)[number]];
  return key ? t.legal[key] : null;
}

export type { Content, Locale } from "./types";
export type {
  ServiceContent,
  GalleryItem,
  GalleryCategory,
  Highlight,
  PageMeta,
  LegalPage,
  LegalSection,
  CompanyData,
} from "./types";
