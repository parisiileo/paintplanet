import { SectionLabel } from "@/components/ui/SectionLabel";
import { HighlightTitle } from "@/components/ui/HighlightTitle";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedLink } from "@/components/ui/AnimatedLink";
import { GalleryScroller } from "@/components/gallery/GalleryScroller";
import { localeHref, type Content, type Locale } from "@/content";

type Props = { locale: Locale; t: Content };

export function GalleryTeaser({ locale, t }: Props) {
  return (
    <section className="section-y relative">
      <div className="container-pp">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel num="04">{t.gallery.heroLabel}</SectionLabel>
            <h2 className="font-display mt-5 text-[var(--text-h2)] font-semibold leading-[1.05] text-paper">
              <HighlightTitle title={t.gallery.heroTitle} color="pop" />
            </h2>
          </div>
          <AnimatedLink
            href={localeHref(locale, "/galleria")}
            className="text-sm font-medium text-cobalt-lite"
          >
            {t.gallery.heroLabel} →
          </AnimatedLink>
        </div>
      </div>

      {/* Scroller a tutta larghezza: esce dal container per il bleed laterale */}
      <GalleryScroller t={t} href={localeHref(locale, "/galleria")} className="mt-12" />

      <div className="container-pp">
        <Reveal className="mt-12">
          <div className="drip-divider" />
        </Reveal>
      </div>
    </section>
  );
}
