import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import type { Content } from "@/content";

/**
 * CTA WhatsApp: sostituisce il vecchio form contatti. Nessun backend —
 * apre una chat WhatsApp con un messaggio precompilato pronto da inviare.
 */
export function WhatsappCta({ t }: { t: Content }) {
  const w = t.contact.whatsapp;
  const href = `${t.site.whatsappHref}?text=${encodeURIComponent(w.prefill)}`;

  return (
    <div className="flex h-fit flex-col justify-center rounded-(--radius-card) border border-paper/10 bg-nebula/30 p-8 md:p-10">
      <span
        aria-hidden
        className="flex h-14 w-14 items-center justify-center rounded-full bg-mint/15 text-mint"
      >
        <WhatsappIcon className="h-7 w-7" />
      </span>

      <h2 className="font-display mt-6 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-paper">
        {w.title}
      </h2>
      <p className="mt-3 max-w-md leading-relaxed text-mist">{w.text}</p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-[#25D366] px-7 py-3.5 font-medium text-[#0b1220] transition-colors duration-300 hover:bg-[#1ebe5b]"
      >
        <WhatsappIcon />
        {w.cta}
        <span
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </a>

      <p className="mt-5 text-xs text-mist-dim">{w.note}</p>
    </div>
  );
}
