import type { Locale } from "./types";

/**
 * PAINT PLANET — Mappa delle rotte per lingua.
 *
 * Gli URL sono tradotti: un utente tedesco vede /de/leistungen/anstriche,
 * non /de/servizi/tinteggiature. I contenuti però restano identificati da
 * CHIAVI stabili (`ServiceKey`, `LegalKey`, `PageKey`) che non cambiano mai:
 * i dizionari e i componenti ragionano per chiave, gli URL vivono solo qui.
 *
 * Regola: nel resto del codice non deve comparire nessun path scritto a mano.
 */

export const locales = ["it", "de"] as const;
export const defaultLocale: Locale = "it";

export type PageKey = "home" | "about" | "gallery" | "contact";
export type SectionKey = "services" | "legal";
export type ServiceKey = "tinteggiature" | "decorazioni" | "facciate" | "resine";
export type LegalKey = "privacy" | "cookie" | "terms";

/** Ancora della sezione servizi in home: è un id di pagina, non un URL. */
export const SERVICES_ANCHOR = "servizi";

/** Pagine semplici raggiungibili da un solo segmento. */
export const PAGE_KEYS = ["about", "gallery", "contact"] as const;
export const SERVICE_KEYS = ["tinteggiature", "decorazioni", "facciate", "resine"] as const;
export const LEGAL_KEYS = ["privacy", "cookie", "terms"] as const;

type TopSegment = Exclude<PageKey, "home"> | SectionKey;

const SEGMENT: Record<Locale, Record<TopSegment, string>> = {
  it: {
    about: "chi-siamo",
    gallery: "galleria",
    contact: "contatti",
    services: "servizi",
    legal: "legale",
  },
  de: {
    about: "ueber-uns",
    gallery: "galerie",
    contact: "kontakt",
    services: "leistungen",
    legal: "rechtliches",
  },
};

const SERVICE_SLUG: Record<Locale, Record<ServiceKey, string>> = {
  it: {
    tinteggiature: "tinteggiature",
    decorazioni: "decorazioni",
    facciate: "facciate",
    resine: "resine",
  },
  de: {
    tinteggiature: "anstriche",
    decorazioni: "dekorationen",
    facciate: "fassaden",
    resine: "harze",
  },
};

const LEGAL_SLUG: Record<Locale, Record<LegalKey, string>> = {
  it: { privacy: "privacy", cookie: "cookie", terms: "note-legali" },
  de: { privacy: "datenschutz", cookie: "cookies", terms: "impressum" },
};

/* ---------------------------------------------------------------- */
/* Costruzione dei path                                               */
/* ---------------------------------------------------------------- */

export function pagePath(locale: Locale, key: PageKey): string {
  return key === "home" ? `/${locale}` : `/${locale}/${SEGMENT[locale][key]}`;
}

export function servicePath(locale: Locale, key: ServiceKey): string {
  return `/${locale}/${SEGMENT[locale].services}/${SERVICE_SLUG[locale][key]}`;
}

export function legalPath(locale: Locale, key: LegalKey): string {
  return `/${locale}/${SEGMENT[locale].legal}/${LEGAL_SLUG[locale][key]}`;
}

/** Sezione servizi: vive in home come ancora. */
export function servicesAnchorPath(locale: Locale): string {
  return `/${locale}#${SERVICES_ANCHOR}`;
}

/** Voce di menu → path. "services" è l'unica che punta a un'ancora. */
export function navPath(locale: Locale, key: PageKey | "services"): string {
  return key === "services" ? servicesAnchorPath(locale) : pagePath(locale, key);
}

/** Segmenti da usare in `generateStaticParams`. */
export function pageSegments(locale: Locale): string[] {
  return PAGE_KEYS.map((k) => SEGMENT[locale][k]);
}

export function sectionSegment(locale: Locale, key: SectionKey): string {
  return SEGMENT[locale][key];
}

export function serviceSlug(locale: Locale, key: ServiceKey): string {
  return SERVICE_SLUG[locale][key];
}

export function legalSlug(locale: Locale, key: LegalKey): string {
  return LEGAL_SLUG[locale][key];
}

/* ---------------------------------------------------------------- */
/* Risoluzione: segmento URL → chiave                                 */
/* ---------------------------------------------------------------- */

/** Il segmento è una pagina semplice? (chi-siamo / galerie / kontakt …) */
export function resolvePageSegment(locale: Locale, segment: string): PageKey | null {
  return PAGE_KEYS.find((k) => SEGMENT[locale][k] === segment) ?? null;
}

/** Il segmento è una sezione con sottopagine? (servizi / rechtliches …) */
export function resolveSectionSegment(locale: Locale, segment: string): SectionKey | null {
  if (segment === SEGMENT[locale].services) return "services";
  if (segment === SEGMENT[locale].legal) return "legal";
  return null;
}

export function resolveServiceSlug(locale: Locale, slug: string): ServiceKey | null {
  return SERVICE_KEYS.find((k) => SERVICE_SLUG[locale][k] === slug) ?? null;
}

export function resolveLegalSlug(locale: Locale, slug: string): LegalKey | null {
  return LEGAL_KEYS.find((k) => LEGAL_SLUG[locale][k] === slug) ?? null;
}

/* ---------------------------------------------------------------- */
/* Alternate hreflang                                                 */
/* ---------------------------------------------------------------- */

/**
 * Path della stessa pagina in ogni lingua. È il pezzo che rende corretti
 * canonical e hreflang: senza, /de/leistungen/anstriche dichiarerebbe come
 * alternativa italiana un URL inesistente.
 */
export function alternatesOf(build: (locale: Locale) => string): Record<Locale, string> {
  return Object.fromEntries(locales.map((l) => [l, build(l)])) as Record<Locale, string>;
}

/**
 * Traduce il path corrente nell'equivalente in un'altra lingua. Usato dallo
 * switcher: deve portare alla pagina corrispondente, non alla home.
 * Se il path non è riconosciuto (rotta inesistente) ripiega sulla home.
 */
export function translatePath(pathname: string, target: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  const current = parts[0];
  if (!isLocale(current)) return `/${target}`;

  const source = current as Locale;
  const [, segment, slug] = parts;
  if (!segment) return `/${target}`;

  const page = resolvePageSegment(source, segment);
  if (page) return pagePath(target, page);

  const section = resolveSectionSegment(source, segment);
  if (section === "services" && slug) {
    const key = resolveServiceSlug(source, slug);
    if (key) return servicePath(target, key);
  }
  if (section === "legal" && slug) {
    const key = resolveLegalSlug(source, slug);
    if (key) return legalPath(target, key);
  }

  return `/${target}`;
}

export function isLocale(value: string | undefined): value is Locale {
  return value === "it" || value === "de";
}

/* ---------------------------------------------------------------- */
/* Normalizzazione: segmenti scritti in QUALSIASI lingua → path       */
/* ---------------------------------------------------------------- */

/**
 * Ricostruisce il path canonico per `locale` a partire da segmenti che
 * possono essere scritti in una lingua qualsiasi.
 *
 * Serve al middleware: /de/chi-siamo diventa /de/ueber-uns invece di un 404,
 * e /it/leistungen/harze diventa /it/servizi/resine. Chi arriva da un link
 * vecchio, da un copia-incolla o da una mail non finisce su una pagina morta.
 *
 * Ritorna null se i segmenti non corrispondono a nulla di noto: in quel caso
 * il chiamante deve lasciar passare la richiesta (404 legittimo).
 */
export function canonicalPathFor(locale: Locale, segments: string[]): string | null {
  if (segments.length === 0) return `/${locale}`;
  if (segments.length > 2) return null;

  const [first, second] = segments.map((s) => s.toLowerCase());

  // Pagina semplice, riconosciuta in una qualunque delle lingue
  for (const l of locales) {
    const key = resolvePageSegment(l, first);
    if (key) return pagePath(locale, key);
  }

  // Sezione con sottopagina
  for (const l of locales) {
    const kind = resolveSectionSegment(l, first);
    if (!kind) continue;

    // Sezione senza slug: non esiste una pagina indice, mandiamo dove ha senso
    if (!second) {
      return kind === "services" ? servicesAnchorPath(locale) : legalPath(locale, "privacy");
    }

    for (const l2 of locales) {
      if (kind === "services") {
        const key = resolveServiceSlug(l2, second);
        if (key) return servicePath(locale, key);
      } else {
        const key = resolveLegalSlug(l2, second);
        if (key) return legalPath(locale, key);
      }
    }
    // Sezione nota ma slug sconosciuto: è un 404 vero, non una traduzione
    return null;
  }

  return null;
}

/**
 * Deduce la lingua dai segmenti dell'URL. Chi digita /kontakt sta chiedendo
 * il sito tedesco, a prescindere da cookie e Accept-Language: l'intenzione
 * espressa nell'URL è più forte della preferenza del browser.
 *
 * Null se i segmenti non sono riconducibili a una sola lingua.
 */
export function localeFromSegments(segments: string[]): Locale | null {
  if (segments.length === 0 || segments.length > 2) return null;
  const [first, second] = segments.map((s) => s.toLowerCase());

  // Lo slug è più specifico del segmento di sezione: ha la precedenza
  if (second) {
    const bySlug = locales.filter(
      (l) => resolveServiceSlug(l, second) || resolveLegalSlug(l, second)
    );
    if (bySlug.length === 1) return bySlug[0];
  }

  const bySegment = locales.filter(
    (l) => resolvePageSegment(l, first) || resolveSectionSegment(l, first)
  );
  return bySegment.length === 1 ? bySegment[0] : null;
}
