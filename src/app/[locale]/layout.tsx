import type { Metadata } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import { LenisProvider } from "@/lib/lenis";
import { Preloader } from "@/components/layout/Preloader";
import { PageTransition } from "@/components/layout/PageTransition";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getContent, isLocale, locales, type Locale } from "@/content";
import "../globals.css";

const clash = localFont({
  src: "../../fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  display: "swap",
  weight: "200 700",
});

const satoshi = localFont({
  src: [
    { path: "../../fonts/Satoshi-Variable.woff2", weight: "300 900", style: "normal" },
    { path: "../../fonts/Satoshi-VariableItalic.woff2", weight: "300 900", style: "italic" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const BASE = "https://www.paintplanet.bz.it";
const OG_LOCALES: Record<Locale, string> = { it: "it_IT", de: "de_DE" };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getContent(locale);

  return {
    metadataBase: new URL(BASE),
    title: {
      default: t.meta.home.title,
      template: `%s | Paint Planet ${t.site.city}`,
    },
    description: t.meta.home.description,
    openGraph: {
      type: "website",
      locale: OG_LOCALES[locale],
      siteName: t.site.name,
      title: t.meta.home.title,
      description: t.meta.home.description,
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale);

  /** Dati strutturati LocalBusiness per la SEO locale. */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: t.site.name,
    slogan: t.site.payoffPrimary,
    description: t.meta.home.description,
    email: t.site.email,
    url: `${BASE}/${locale}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bolzano",
      postalCode: "39100",
      addressRegion: "Trentino-Alto Adige",
      addressCountry: "IT",
    },
    areaServed: "Bolzano / Bozen — Alto Adige / Südtirol",
    sameAs: [t.site.instagramHref],
  };

  return (
    <html lang={locale} className={`${clash.variable} ${satoshi.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LenisProvider>
          <Preloader tagline={t.preloaderTagline} />
          <PageTransition>
            <Header locale={locale} t={t} />
            <main id="main">{children}</main>
            <Footer locale={locale} t={t} />
          </PageTransition>
        </LenisProvider>
      </body>
    </html>
  );
}
