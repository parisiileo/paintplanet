import Link from "next/link";
import { getContent, defaultLocale } from "@/content";
import "./globals.css";

/**
 * 404 di root. È l'unica pagina fuori dal segmento [locale] (Next non può
 * conoscere la lingua per un percorso che non corrisponde a nessuna rotta),
 * quindi cade sulla lingua di default e offre entrambe le strade.
 */
export const metadata = { title: "404 | Paint Planet" };

export default function NotFound() {
  const t = getContent(defaultLocale);

  return (
    <html lang={defaultLocale}>
      <body className="antialiased">
        {/* dvh e non vh: su iOS `100vh` e' il viewport GRANDE (barra indirizzi
            nascosta), quindi a barra visibile la pagina sborda. */}
        <main className="relative flex min-h-[100dvh] items-center overflow-hidden bg-space">
          <div aria-hidden className="cosmic-bg opacity-60" />
          <div className="container-pp relative flex flex-col items-start gap-6">
            <p className="tech-label text-coral">404</p>
            <h1 className="font-display max-w-2xl text-[clamp(2.2rem,6vw,4.5rem)] font-semibold leading-[1.05] text-paper">
              Pagina non trovata
              <span className="block text-mist">Seite nicht gefunden</span>
            </h1>
            <p className="max-w-md leading-relaxed text-mist">
              La pagina che cercavi non esiste o è stata spostata.
              <span className="block">
                Die gesuchte Seite existiert nicht oder wurde verschoben.
              </span>
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="/it"
                className="rounded-full bg-coral px-7 py-3.5 font-medium text-ink transition-colors hover:bg-coral-deep"
              >
                {t.site.name} Italiano
              </Link>
              <Link
                href="/de"
                className="rounded-full border border-paper/25 px-7 py-3.5 font-medium text-paper transition-colors hover:bg-paper/10"
              >
                {t.site.name} Deutsch
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
