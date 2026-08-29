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
 * Restringe il dizionario alle sole chiavi che servono a un componente CLIENT.
 *
 * Tutto ciò che attraversa il confine server->client viene serializzato nel
 * payload RSC ed è quindi inline nell'HTML. Passando `t` intero, ogni pagina
 * si portava dietro 39 kB di dizionario: testo GDPR, informativa privacy e le
 * 32 didascalie della galleria finivano anche nella home, che non ne usa
 * nessuna. Tre sole chiavi (gallery, legal, services) valgono il 69% del peso.
 *
 * Restringere il TIPO non basta: va ristretto il VALORE, perché è il valore a
 * essere serializzato.
 */
export function slice<K extends keyof Content>(t: Content, ...keys: K[]): Pick<Content, K> {
  const out = {} as Pick<Content, K>;
  for (const k of keys) out[k] = t[k];
  return out;
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
