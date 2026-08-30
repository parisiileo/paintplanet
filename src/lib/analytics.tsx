"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useConsent } from "@/lib/consent";

/**
 * PAINT PLANET — misurazione delle conversioni.
 *
 * Per questo cliente esistono quattro metriche, e sono tutte click in uscita:
 * telefono, WhatsApp, email, recensione. Non ci sono form, non c'e' carrello,
 * non c'e' funnel: le sessioni e il tempo di permanenza non dicono niente che
 * si possa usare. Qui si tracciano quelle quattro e nient'altro.
 *
 * SPENTO FINCHE' NON C'E' L'ID. Senza NEXT_PUBLIC_GA_ID questo componente non
 * rende nulla e non registra nessun listener: nessuno script di terze parti,
 * nessun cookie, nessuna richiesta. E' voluto — la cookie policy dichiara
 * oggi che il sito "non utilizza cookie analitici ne' strumenti di statistica
 * di terze parti", e finche' la variabile non e' impostata quella frase resta
 * vera. Prima di impostarla va aggiornata l'informativa in ENTRAMBE le lingue.
 *
 * Il consenso e' quello del banner gia' esistente: si parte solo con "all",
 * mai con "necessary". Chi rifiuta non viene misurato, e non e' un dettaglio
 * tecnico ma il motivo per cui il banner esiste.
 *
 * Cambiare fornitore (Plausible, Umami) significa riscrivere solo <Script> e
 * `send`: gli eventi e l'aggancio ai link restano identici.
 */

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type ConversionEvent =
  | "contact_phone"
  | "contact_whatsapp"
  | "contact_email"
  | "review_click";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function send(event: ConversionEvent, href: string) {
  window.gtag?.("event", event, { link_url: href });
}

/**
 * Un solo listener delegato su document invece di un onClick per bottone.
 * Copre ogni tel:, mailto:, wa.me e link alla scheda Google ovunque siano —
 * header, hero, FAB, footer, pagina contatti — e continuera' a coprirli
 * anche quando ne verranno aggiunti altri. Nessun componente da modificare,
 * nessuna CTA che si dimentica di tracciare.
 */
function classify(href: string): ConversionEvent | null {
  if (href.startsWith("tel:")) return "contact_phone";
  if (href.startsWith("mailto:")) return "contact_email";
  if (href.includes("wa.me") || href.includes("whatsapp.com")) return "contact_whatsapp";
  if (href.includes("g.page") || href.includes("maps?cid=")) return "review_click";
  return null;
}

export function Analytics() {
  const { consent } = useConsent();
  const enabled = Boolean(GA_ID) && consent === "all";

  useEffect(() => {
    if (!enabled) return;
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      const href = anchor?.getAttribute("href");
      if (!href) return;
      const event = classify(href);
      if (event) send(event, href);
    };
    /* In capture: alcune CTA fermano la propagazione, e un click che non
       risale non verrebbe mai contato. */
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="pp-ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
