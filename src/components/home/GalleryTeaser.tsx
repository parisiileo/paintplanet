import { Reveal } from "@/components/ui/Reveal";
import { GalleryScroller } from "@/components/gallery/GalleryScroller";
import { pagePath, type Content, type Locale } from "@/content";

type Props = { locale: Locale; t: Pick<Content, "gallery"> };

export function GalleryTeaser({ locale, t }: Props) {
  return (
    <section className="section-y relative">
      {/* Scroller a tutta larghezza: esce dal container per il bleed laterale.
          L'ultima card del rail porta alla galleria completa, quindi la riga
          di intestazione non serve. */}
      <GalleryScroller t={t} href={pagePath(locale, "gallery")} />

      <div className="container-pp">
        <Reveal className="mt-12">
          <div className="drip-divider" />
        </Reveal>
      </div>
    </section>
  );
}
