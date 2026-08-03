"use client";

import { useState } from "react";
import { useConsent } from "@/lib/consent";
import type { Content } from "@/content";

/**
 * Mappa Google in click-to-load.
 *
 * L'iframe viene montato SOLO dopo un consenso esplicito (dal banner o dal
 * pulsante qui sotto): finché non accade, il browser non contatta Google e
 * non riceve cookie di terza parte. È il requisito del Garante per gli
 * embed di terze parti.
 */
export function MapEmbed({ t }: { t: Content }) {
  const { consent } = useConsent();
  const [loadedHere, setLoadedHere] = useState(false);
  const allowed = consent === "all" || loadedHere;

  if (allowed) {
    return (
      <div className="overflow-hidden rounded-(--radius-card) border border-paper/10">
        <iframe
          src={t.contact.mapsEmbed}
          title={`${t.site.name} — ${t.site.address}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-[22rem] w-full border-0"
        />
      </div>
    );
  }

  return (
    <div className="flex h-[22rem] flex-col items-start justify-center gap-4 rounded-(--radius-card) border border-dashed border-paper/20 bg-nebula/20 p-7">
      <span aria-hidden className="text-3xl">
        🗺️
      </span>
      <p className="font-display text-lg font-semibold text-paper">{t.consent.mapTitle}</p>
      <p className="max-w-sm text-sm leading-relaxed text-mist">{t.consent.mapText}</p>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => setLoadedHere(true)}
          className="rounded-full bg-cobalt px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-cobalt-deep"
        >
          {t.consent.mapLoad}
        </button>
        <a
          href={t.contact.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-mist underline underline-offset-4 transition-colors hover:text-paper"
        >
          {t.consent.mapOpenExternal}
        </a>
      </div>
    </div>
  );
}
