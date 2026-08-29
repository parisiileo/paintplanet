"use client";

import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { useConsent } from "@/lib/consent";
import type { Content } from "@/content";

/**
 * CTA WhatsApp flottante, presente su tutte le pagine.
 *
 * Scelte:
 * - z-80: sotto lightbox (85) e banner cookie (95), sopra a
 *   tutto il resto. Non copre mai un contenuto modale.
 * - nascosto finché il banner cookie è a schermo: il banner è largo quanto la
 *   pagina e occupa la stessa fascia in basso, quindi il pulsante sarebbe
 *   comunque coperto — ma resterebbe raggiungibile da tastiera, che è peggio.
 * - etichetta sempre visibile da md in su (non solo in hover: un'etichetta
 *   che compare al passaggio del mouse non la scopre chi non ci passa),
 *   cerchio puro su mobile dove lo spazio conta.
 */
export function WhatsappFab({ t }: { t: Pick<Content, "site" | "cta" | "contact"> }) {
  const { consent, ready } = useConsent();
  const href = `${t.site.whatsappHref}?text=${encodeURIComponent(t.contact.whatsapp.prefill)}`;

  /* Renderizzato dal server (e al primo render client, quando `ready` è
     ancora false) così l'HTML iniziale è identico: chi ha già dato il
     consenso lo vede subito, senza aspettare l'idratazione. È il CSS a
     tenerlo nascosto finché la scelta non c'è. */
  if (ready && consent === null) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.cta.whatsapp}
      className="pp-wa-fab group fixed bottom-6 right-6 z-[80] flex h-14 items-center gap-3 rounded-full bg-[#25D366] px-4 font-medium text-[#0b1220] shadow-[0_8px_30px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:bg-[#1ebe5b] hover:scale-105 focus-visible:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100 md:pr-6"
      style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <WhatsappIcon className="h-7 w-7 shrink-0" />
      <span className="hidden whitespace-nowrap text-[0.95rem] md:inline">{t.cta.whatsapp}</span>
    </a>
  );
}
