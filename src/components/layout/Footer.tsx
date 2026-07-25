import Link from "next/link";
import { localeHref, type Content, type Locale } from "@/content";

type Props = { locale: Locale; t: Content };

export function Footer({ locale, t }: Props) {
  return (
    <footer className="relative overflow-hidden bg-void text-paper">
      <div aria-hidden className="cosmic-bg opacity-40" />
      <div className="relative">
        {/* CTA strip */}
        <div className="container-pp border-b border-paper/10 py-16 md:py-24">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="tech-label mb-4 text-coral">{t.footer.ctaLabel}</p>
              <p className="font-display max-w-2xl text-[clamp(1.9rem,4.4vw,3.6rem)] font-medium leading-[1.05]">
                {t.footer.ctaTitle}
                <span className="text-mist"> {t.footer.ctaTitleMuted}</span>
              </p>
            </div>
            <Link
              href={localeHref(locale, "/contatti")}
              className="group inline-flex items-center gap-3 rounded-full bg-coral px-7 py-4 font-medium text-paper transition-colors duration-300 hover:bg-coral-deep"
            >
              {t.cta.quote}
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Colonne */}
        <div className="container-pp grid gap-10 py-14 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display flex items-center gap-2 text-xl font-semibold">
              <span
                aria-hidden
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: "conic-gradient(from 210deg, var(--cobalt), var(--coral), var(--sun), var(--cobalt))" }}
              />
              Paint<span className="text-cobalt">&nbsp;Planet</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">{t.footer.blurb}</p>
          </div>

          <nav aria-label={t.footer.exploreLabel} className="flex flex-col gap-2.5">
            <p className="tech-label mb-2 text-mist-dim">{t.footer.exploreLabel}</p>
            {t.nav.map((item) => (
              <Link
                key={item.href}
                href={localeHref(locale, item.href)}
                className="w-fit text-sm text-mist transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            <p className="tech-label mb-2 text-mist-dim">{t.footer.contactsLabel}</p>
            <a href={t.site.phoneHref} className="w-fit text-sm text-mist hover:text-paper">
              {t.site.phone}
            </a>
            <a href={t.site.emailHref} className="w-fit text-sm text-mist hover:text-paper">
              {t.site.email}
            </a>
            <p className="text-sm text-mist">{t.site.address}</p>
            <a
              href={t.site.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-sm text-mist hover:text-paper"
            >
              Instagram {t.site.instagram}
            </a>
          </div>
        </div>

        <div className="container-pp flex flex-col gap-2 border-t border-paper/10 py-6 text-xs text-mist-dim md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {t.site.name} — {t.site.vat}
          </p>
          <p>{t.site.address}</p>
        </div>
      </div>
    </footer>
  );
}
