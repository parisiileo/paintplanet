import { HighlightTitle } from "@/components/ui/HighlightTitle";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { pagePath, type Content, type Locale } from "@/content";

type Props = { locale: Locale; t: Content };

export function ContactStrip({ locale, t }: Props) {
  return (
    <section className="section-y relative overflow-hidden">
      <div aria-hidden className="cosmic-bg opacity-60" />
      <div className="container-pp relative">
        <div className="rounded-[var(--radius-card)] border border-paper/10 bg-nebula/30 p-8 backdrop-blur-sm md:p-14">
          <Reveal as="h2" className="font-display max-w-3xl text-h2 font-semibold leading-[1.05] text-paper">
            <HighlightTitle title={t.contactStrip.title} color="pop" />
          </Reveal>
          <Reveal className="mt-5 max-w-xl text-mist" delay={0.05}>
            {t.contactStrip.text}
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <p className="tech-label text-mist-dim">{t.contactStrip.labels.phone}</p>
              <a href={t.site.phoneHref} className="font-display mt-2 inline-flex min-h-11 items-center text-xl text-paper hover:text-cobalt-lite">
                {t.site.phone}
              </a>
            </div>
            <div>
              <p className="tech-label text-mist-dim">{t.contactStrip.labels.email}</p>
              <a href={t.site.emailHref} className="font-display mt-2 inline-flex min-h-11 items-center text-xl text-paper hover:text-cobalt-lite">
                {t.site.email}
              </a>
            </div>
            <div>
              <p className="tech-label text-mist-dim">{t.contactStrip.labels.address}</p>
              <p className="font-display mt-2 text-xl text-paper">{t.site.address}</p>
            </div>
          </div>

          <div className="mt-10">
            <MagneticButton href={pagePath(locale, "contact")}>{t.cta.quote}</MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
