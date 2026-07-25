import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HighlightTitle } from "@/components/ui/HighlightTitle";
import { Reveal, StaggerReveal } from "@/components/ui/Reveal";
import { AnimatedLink } from "@/components/ui/AnimatedLink";
import { localeHref, type Content, type Locale } from "@/content";

type Props = { locale: Locale; t: Content };

export function GalleryTeaser({ locale, t }: Props) {
  const items = t.gallery.items.slice(0, 6);
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
            className="text-sm font-medium text-cobalt"
          >
            {t.gallery.heroLabel} →
          </AnimatedLink>
        </div>

        <StaggerReveal className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {items.map((it) => (
            <Link
              key={it.id}
              href={localeHref(locale, "/galleria")}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <span
                aria-hidden
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ background: `linear-gradient(135deg, ${it.placeholder.from}, ${it.placeholder.to})` }}
              />
              <span aria-hidden className="absolute inset-0 bg-void/20 transition-opacity duration-500 group-hover:opacity-0" />
              <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-void/80 to-transparent p-4">
                <span className="text-sm font-medium text-paper">{it.title}</span>
              </span>
            </Link>
          ))}
        </StaggerReveal>

        <Reveal className="mt-8">
          <div className="drip-divider" />
        </Reveal>
      </div>
    </section>
  );
}
