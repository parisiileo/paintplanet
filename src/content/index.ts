import { it } from "./it";
import { de } from "./de";
import type { Content, Locale } from "./types";

export const localeNames: Record<Locale, string> = {
  it: "Italiano",
  de: "Deutsch",
};

const dictionaries: Record<Locale, Content> = { it, de };

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

/**
 * Rotte: unico posto in cui vivono gli URL, tradotti per lingua.
 * I componenti importano da qui, non costruiscono path a mano.
 */
export {
  locales,
  defaultLocale,
  isLocale,
  PAGE_KEYS,
  SERVICE_KEYS,
  LEGAL_KEYS,
  SERVICES_ANCHOR,
  pagePath,
  servicePath,
  legalPath,
  servicesAnchorPath,
  navPath,
  pageSegments,
  sectionSegment,
  serviceSlug,
  legalSlug,
  resolvePageSegment,
  resolveSectionSegment,
  resolveServiceSlug,
  resolveLegalSlug,
  alternatesOf,
  translatePath,
  canonicalPathFor,
  localeFromSegments,
} from "./routes";

export type { PageKey, SectionKey, ServiceKey, LegalKey } from "./routes";

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
