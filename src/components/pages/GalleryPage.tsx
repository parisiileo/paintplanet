import { Reveal } from "@/components/ui/Reveal";
import { HighlightTitle } from "@/components/ui/HighlightTitle";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { slice } from "@/content";
import type { Content } from "@/content";

export function GalleryPage({ t }: { t: Content }) {
  return (
    <section className="relative section-y pt-40 md:pt-48">
      <div aria-hidden className="cosmic-bg opacity-40" />
      <div className="container-pp relative">
        <div className="mb-12 flex flex-col gap-5">
          <Reveal as="h1" className="font-display max-w-3xl text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.05] tracking-tight text-paper">
            <HighlightTitle title={t.gallery.heroTitle} color="pop" />
          </Reveal>
          <Reveal as="p" delay={0.1} className="max-w-xl leading-relaxed text-mist">
            {t.gallery.heroText}
          </Reveal>
          <Reveal delay={0.15} className="flex items-center gap-3">
            <span className="h-px w-10 bg-cobalt" />
            <span className="tech-label text-mist-dim">
              {t.gallery.items.length} {t.gallery.countLabel}
            </span>
          </Reveal>
        </div>
        <GalleryGrid t={slice(t, "gallery")} />
      </div>
    </section>
  );
}
