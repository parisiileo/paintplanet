"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useConsent } from "@/lib/consent";
import { legalPath, type Content, type Locale } from "@/content";

type Props = { locale: Locale; t: Content };

/**
 * Banner cookie. Non blocca la navigazione (i cookie tecnici non lo
 * richiedono) ma resta visibile finché non si sceglie, e la mappa di Google
 * non viene caricata prima di una scelta esplicita.
 */
export function CookieBanner({ locale, t }: Props) {
  const { consent, ready, setConsent } = useConsent();
  const acceptRef = useRef<HTMLButtonElement>(null);
  const visible = ready && consent === null;

  /* Il banner compare dopo il mount: senza spostare il focus, chi naviga da
     tastiera non saprebbe che è apparso. Lo annunciamo come region e ci
     portiamo il focus sopra. */
  useEffect(() => {
    if (visible) acceptRef.current?.focus();
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      className="fixed inset-x-0 bottom-0 z-[95] border-t border-paper/15 bg-void/95 backdrop-blur-md"
    >
      <div className="container-pp flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
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

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setConsent("necessary")}
            className="rounded-full border border-paper/25 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper/60"
          >
            {t.consent.necessaryOnly}
          </button>
          <button
            ref={acceptRef}
            type="button"
            onClick={() => setConsent("all")}
            className="rounded-full bg-coral px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-coral-deep"
          >
            {t.consent.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
