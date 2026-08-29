import type { Metadata } from "next";
import { StoryHero } from "@/components/home/StoryHero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyUs } from "@/components/home/WhyUs";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { ContactStrip } from "@/components/home/ContactStrip";
import { ReviewCta } from "@/components/home/ReviewCta";
import { getContent, isLocale, defaultLocale, slice } from "@/content";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const resolved = isLocale(locale) ? locale : defaultLocale;
  const t = getContent(resolved);
  return buildPageMetadata({
    locale: resolved,
    title: t.meta.home.title,
    description: t.meta.home.description,
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) return null; // il layout gestisce il notFound
  const t = getContent(locale);

  return (
    <>
      <StoryHero
        locale={locale}
        t={{
          ...slice(t, "hero", "story", "cta"),
          services: t.services.map((s) => ({ key: s.key, tone: s.tone, title: s.title })),
        }}
      />
      <ServicesOverview locale={locale} t={t} />
      <WhyUs t={t} />
      <GalleryTeaser locale={locale} t={slice(t, "gallery")} />
      <ReviewCta t={t} />
      <ContactStrip locale={locale} t={t} />
    </>
  );
}
