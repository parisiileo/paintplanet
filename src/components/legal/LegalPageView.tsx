import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ConsentReset } from "@/components/legal/ConsentReset";
import type { Content, LegalPage } from "@/content";

type Props = { t: Content; page: LegalPage };

/**
 * Rende una pagina legale a partire dal dizionario. I segnaposto {{...}}
 * nel testo sono risolti coi dati aziendali reali: così la conformità si
 * aggiorna in un punto solo (content/*.ts → company).
 */
function resolve(text: string, t: Content): string {
  const values: Record<string, string> = {
    legalName: t.company.legalName,
    tradeName: t.company.tradeName,
    artisanRegistry: t.company.artisanRegistry,
    registeredOffice: t.company.registeredOffice,
    vat: t.company.vat,
    vatLabel: t.company.vatLabel,
    taxCode: t.company.taxCode,
    rea: t.company.rea,
    pec: t.company.pec,
    dataController: t.company.dataController,
    email: t.site.email,
    phone: t.site.phone,
  };
  return text.replace(/\{\{(\w+)\}\}/g, (match, key: string) => values[key] ?? match);
}

export function LegalPageView({ t, page }: Props) {
  return (
    <section className="relative section-y pt-40 md:pt-48">
      <div aria-hidden className="cosmic-bg opacity-40" />
      <div className="container-pp relative">
        <div className="flex max-w-3xl flex-col gap-5">
          <SectionLabel>{t.footer.legalLabel}</SectionLabel>
          <Reveal
            as="h1"
            className="font-display text-[clamp(2.2rem,5.4vw,4.2rem)] font-semibold leading-[1.05] tracking-tight text-paper"
          >
            {page.title}
          </Reveal>
          <Reveal as="p" delay={0.1} className="leading-relaxed text-mist">
            {resolve(page.intro, t)}
          </Reveal>
          <p className="tech-label text-mist-dim">
            {t.legal.updatedLabel}: {t.legal.updated}
          </p>
        </div>

        <div className="mt-14 flex max-w-3xl flex-col gap-12">
          {page.sections.map((section) => {
            /* Righe consecutive che iniziano con "- " formano un <ul>. */
            const blocks: { type: "p" | "ul"; lines: string[] }[] = [];
            for (const line of section.body) {
              const isItem = line.startsWith("- ");
              const last = blocks[blocks.length - 1];
              if (isItem && last?.type === "ul") last.lines.push(line.slice(2));
              else blocks.push({ type: isItem ? "ul" : "p", lines: [isItem ? line.slice(2) : line] });
            }

            return (
              <div key={section.title}>
                <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4 flex flex-col gap-4 leading-relaxed text-mist">
                  {blocks.map((block, i) =>
                    block.type === "ul" ? (
                      <ul key={i} className="flex flex-col gap-2.5 border-l border-paper/15 pl-5">
                        {block.lines.map((line) => (
                          <li key={line}>{resolve(line, t)}</li>
                        ))}
                      </ul>
                    ) : (
                      block.lines.map((line) => <p key={line}>{resolve(line, t)}</p>)
                    )
                  )}
                </div>

                {/* Il pulsante di revoca vive nella sezione "gestire le
                    preferenze" della cookie policy: è lì che l'utente lo cerca. */}
                {page.slug === "cookie" && section === page.sections[page.sections.length - 1] && (
                  <ConsentReset t={t} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
