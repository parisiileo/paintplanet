import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import { LenisProvider } from "@/lib/lenis";
import { Preloader } from "@/components/layout/Preloader";
import { PageTransition } from "@/components/layout/PageTransition";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { WhatsappFab } from "@/components/contact/WhatsappFab";
import { ConsentProvider } from "@/lib/consent";
import { getContent, isLocale, locales } from "@/content";
import { JsonLd } from "@/components/seo/JsonLd";
import { BASE, businessJsonLd, websiteJsonLd, jsonLdGraph } from "@/lib/seo";
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
      // Le pagine interne hanno già "Bolzano" nel titolo: qui basta il brand,
      // altrimenti la città compare due volte e si mangia caratteri utili.
      template: `%s | ${t.site.name}`,
    },
    description: t.meta.home.description,
    applicationName: t.site.name,
    authors: [{ name: t.company.tradeName, url: BASE }],
    creator: t.company.tradeName,
    publisher: t.company.tradeName,
    formatDetection: { telephone: true, address: true, email: true },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

/**
 * Il tema scuro è l'unico previsto: dichiararlo evita che la UI del browser
 * (barra indirizzi su mobile) stacchi dal fondo della pagina. In Next 15
 * `themeColor` va nell'export `viewport`, non in `metadata`.
 */
export const viewport: Viewport = {
  themeColor: "#070912",
  colorScheme: "dark",
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale);

  return (
    <html lang={locale} className={`${clash.variable} ${satoshi.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        {/* Nodi condivisi da tutte le pagine: l'attività e il sito. Le rotte
            aggiungono i propri (breadcrumb, servizio, galleria) agganciandosi
            a questi tramite @id. */}
        <JsonLd data={jsonLdGraph(businessJsonLd(locale, t), websiteJsonLd(locale, t))} />
        <a href="#main" className="skip-link">
          {t.a11y.skipToContent}
        </a>
        <ConsentProvider>
          <LenisProvider>
            <Preloader tagline={t.preloaderTagline} />
            <PageTransition>
              <Header locale={locale} t={t} />
              <main id="main">{children}</main>
              <Footer locale={locale} t={t} />
            </PageTransition>
          </LenisProvider>
          <WhatsappFab t={t} />
          <CookieBanner locale={locale} t={t} />
        </ConsentProvider>
      </body>
    </html>
  );
}
