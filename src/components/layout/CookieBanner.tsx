"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useConsent } from "@/lib/consent";
import { legalPath, type Content, type Locale } from "@/content";

type Props = { locale: Locale; t: Pick<Content, "consent"> };

/**
 * Banner cookie. Non blocca la navigazione (i cookie tecnici non lo
 * richiedono) ma resta visibile finché non si sceglie, e la mappa di Google
 * non viene caricata prima di una scelta esplicita.
 */
export function CookieBanner({ locale, t }: Props) {
  const { consent, setConsent } = useConsent();
  const acceptRef = useRef<HTMLButtonElement>(null);
  /* Niente gate su `ready`: il banner è renderizzato dal server e resta
     nell'HTML iniziale. A chi ha già scelto lo toglie il CSS prima del
     primo paint (vedi globals.css), poi React lo smonta. */
  const visible = consent === null;

  /* Il focus si sposta SOLO quando il banner riappare durante la sessione
     (pulsante "rivedi le preferenze"): rubare il focus al primo caricamento
     interromperebbe chi sta già leggendo. */
  const wasVisible = useRef(visible);
  useEffect(() => {
    if (visible && !wasVisible.current) acceptRef.current?.focus();
    wasVisible.current = visible;
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      className="pp-consent-banner fixed inset-x-0 bottom-0 z-[95] border-t border-paper/15 bg-void/95 backdrop-blur-md"
      /* Con viewportFit "cover" il bordo inferiore e' quello fisico: senza
         questo, i due bottoni finiscono sotto l'home indicator. */
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="container-pp flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-3xl">
          <p id="cookie-banner-title" className="font-display text-lg font-semibold text-paper">
            {t.consent.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            {t.consent.text}{" "}
            <Link
              href={legalPath(locale, "cookie")}
              className="text-cobalt-lite underline underline-offset-2 hover:text-paper"
            >
              {t.consent.policyLink}
            </Link>
          </p>
        </div>

        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setConsent("necessary")}
            className="flex min-h-11 flex-1 items-center justify-center rounded-full border border-paper/25 px-5 text-sm font-medium text-paper transition-colors hover:border-paper/60 lg:flex-none lg:px-6"
          >
            {t.consent.necessaryOnly}
          </button>
          <button
            ref={acceptRef}
            type="button"
            onClick={() => setConsent("all")}
            className="flex min-h-11 flex-1 items-center justify-center rounded-full bg-coral px-5 text-sm font-medium text-ink transition-colors hover:bg-coral-deep lg:flex-none lg:px-6"
          >
            {t.consent.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
