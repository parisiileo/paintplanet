import { HighlightTitle } from "@/components/ui/HighlightTitle";
import { Reveal } from "@/components/ui/Reveal";
import type { Content } from "@/content";

type Props = { t: Content };

/**
 * Invito a lasciare una recensione su Google. È un link in uscita verso il
 * profilo dell'attività: `rel="noopener"` perché apre una nuova scheda, e
 * niente `next/link` perché non è una rotta interna.
 */
export function ReviewCta({ t }: Props) {
  return (
    <section className="section-y relative">
      <div className="container-pp">
        <Reveal>
          <div className="flex flex-col items-start gap-8 rounded-[var(--radius-card)] border border-paper/10 bg-nebula/30 p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-xl">
              <div aria-hidden className="flex gap-1 text-sun">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
                    <path d="M10 1.6l2.47 5.3 5.53.66-4.1 3.9 1.09 5.94L10 14.5l-4.99 2.9 1.09-5.94-4.1-3.9 5.53-.66L10 1.6z" />
                  </svg>
                ))}
              </div>
              <h2 className="font-display mt-5 text-h2 font-semibold leading-[1.05] text-paper">
                <HighlightTitle title={t.reviews.title} color="pop" />
              </h2>
              <p className="mt-4 text-mist">{t.reviews.text}</p>
            </div>

            <a
              href={t.reviews.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-coral px-7 py-4 font-medium text-ink transition-colors duration-300 hover:bg-coral-deep"
            >
              {t.reviews.cta}
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
