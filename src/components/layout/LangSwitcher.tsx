"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, translatePath, type Locale } from "@/content";

type Props = {
  current: Locale;
  /** true su superficie chiara (plaster) */
  onLight?: boolean;
  className?: string;
};

/** Switcher IT / DE: sostituisce il prefisso locale del path corrente. */
export function LangSwitcher({ current, onLight = false, className = "" }: Props) {
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label="Lingua / Sprache"
      className={`tech-label flex items-center gap-0.5 ${className}`}
    >
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && (
            <span aria-hidden className={onLight ? "text-ink/25" : "text-mist/40"}>
              /
            </span>
          )}
          <Link
            /* Gli slug sono tradotti: da /de/leistungen/harze si deve
               arrivare a /it/servizi/resine, non alla home italiana. */
            href={translatePath(pathname, locale)}
            hrefLang={locale}
            aria-label={localeNames[locale]}
            aria-current={locale === current ? "true" : undefined}
            className={`px-1.5 py-1 uppercase transition-colors duration-300 ${
              locale === current
                ? onLight
                  ? "text-cobalt"
                  : "text-cobalt-lite"
                : onLight
                  ? "text-ink/50 hover:text-ink"
                  : "text-mist hover:text-paper"
            }`}
          >
            {locale}
          </Link>
        </span>
      ))}
    </div>
  );
}
