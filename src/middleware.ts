import { NextRequest, NextResponse } from "next/server";
/* Import diretto da `content/routes`, non dal barrel `@/content`: quello
   trascinerebbe i due dizionari interi (centinaia di kB di testo) dentro il
   bundle del middleware, che gira su ogni richiesta. `routes` è puro. */
import {
  defaultLocale,
  isLocale,
  canonicalPathFor,
  localeFromSegments,
} from "@/content/routes";
import type { Locale } from "@/content/types";

const COOKIE = "pp-locale";
const YEAR = 60 * 60 * 24 * 365;

/**
 * PAINT PLANET — middleware di lingua e normalizzazione URL.
 *
 * Gli slug sono tradotti (/it/servizi/resine ↔ /de/leistungen/harze). Il
 * middleware riconosce i segmenti di ENTRAMBE le lingue e rimanda sempre alla
 * forma canonica, così nessuno di questi casi finisce in 404:
 *
 *   /de/chi-siamo          → /de/ueber-uns          (prefisso giusto, slug it)
 *   /it/leistungen/harze   → /it/servizi/resine     (prefisso giusto, slug de)
 *   /kontakt               → /de/kontakt            (lingua dedotta dallo slug)
 *   /servizi/resine        → /it/servizi/resine
 *   /it/servizi            → /it#servizi            (sezione senza indice)
 *
 * Quando i segmenti non corrispondono a nulla di noto la richiesta passa
 * invariata: un 404 vero deve restare un 404.
 */

/** Lingua preferita: cookie (scelta esplicita) → Accept-Language → default. */
function detectLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(COOKIE)?.value;
  if (isLocale(cookie)) return cookie;

  const header = request.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const code = part.split(";")[0].trim().slice(0, 2).toLowerCase();
    if (isLocale(code)) return code;
  }
  return defaultLocale;
}

/** Redirect preservando query string ed eventuale ancora del path canonico. */
function redirectTo(request: NextRequest, target: string, status: 307 | 308) {
  const [pathname, hash] = target.split("#");
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  if (hash) url.hash = hash;
  return NextResponse.redirect(url, status);
}

function withLocaleCookie(response: NextResponse, locale: Locale) {
  response.cookies.set(COOKIE, locale, { path: "/", maxAge: YEAR, sameSite: "lax" });
  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0]?.toLowerCase();

  /* --- Path già prefissato con una lingua valida --- */
  if (isLocale(first)) {
    const canonical = canonicalPathFor(first, segments.slice(1));

    // Slug scritto nell'altra lingua (o maiuscole, o sezione senza indice):
    // 308 perché la correzione è stabile e va consolidata dai motori.
    if (canonical && canonical !== pathname) {
      return redirectTo(request, canonical, 308);
    }

    return withLocaleCookie(NextResponse.next(), first);
  }

  /* --- Path senza prefisso di lingua --- */
  const inferred = localeFromSegments(segments);
  const locale = inferred ?? detectLocale(request);
  const canonical = canonicalPathFor(locale, segments);

  // Se i segmenti non sono riconosciuti aggiungiamo solo il prefisso: la
  // rotta deciderà se esiste. Non inventiamo destinazioni.
  const target = canonical ?? `/${locale}${pathname === "/" ? "" : pathname}`;

  /* 308 se la lingua è scritta nell'URL (deterministica), 307 se dedotta da
     cookie o browser: quella dipende dall'utente e non va messa in cache dai
     motori come redirect permanente. */
  return redirectTo(request, target, inferred ? 308 : 307);
}

export const config = {
  /* Escludi asset, API, file statici (con estensione) e le rotte di metadata
     generate da Next che NON hanno estensione: senza escluderle il middleware
     le redirezionerebbe su /it/icon, rompendo favicon e icona iOS. */
  matcher: ["/((?!_next|api|icon|apple-icon|opengraph-image|.*\\..*).*)"],
};
