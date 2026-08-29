import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import { LenisProvider } from "@/lib/lenis";
import { PageTransition } from "@/components/layout/PageTransition";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { WhatsappFab } from "@/components/contact/WhatsappFab";
import { ConsentProvider } from "@/lib/consent";
import { getContent, isLocale, locales, slice } from "@/content";
import { JsonLd } from "@/components/seo/JsonLd";
import { BASE, businessJsonLd, websiteJsonLd, jsonLdGraph } from "@/lib/seo";
import "../globals.css";

const clash = localFont({
  src: "../../fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  display: "swap",
  weight: "200 700",
});

/* Solo il corsivo NON viene caricato: pesava 43 kB in preload ad alta
   priorita' (in gara con l'LCP) e nel sito non c'e' un solo elemento in
   corsivo. Il file resta in src/fonts, basta rimettere la voce se servira'. */
const satoshi = localFont({
  src: [{ path: "../../fonts/Satoshi-Variable.woff2", weight: "300 900", style: "normal" }],
  variable: "--font-satoshi",
  display: "swap",
});

/* Un solo peso: il 500 non e' usato da nessun elemento (tutto il testo
   mono e' a peso normale). */
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
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
    /* Token di Search Console via env (Vercel → Settings → Environment
       Variables). Se assente, Next non emette il tag: nessun placeholder
       fasullo in produzione. */
    verification: process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : undefined,
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
        {/* La scelta sui cookie sta in localStorage, leggibile solo da JS.
            Questo script gira durante il parsing del body, PRIMA del primo
            paint e senza aspettare React: marca <html> e il CSS mette
            banner e FAB nello stato giusto subito. Senza, entrambi
            comparivano a idratazione avvenuta, misurata a 4,1 s su mobile. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{if(localStorage.getItem("pp-consent"))document.documentElement.dataset.consent="1"}catch(e){}',
          }}
        />
        {/* Nodi condivisi da tutte le pagine: l'attività e il sito. Le rotte
            aggiungono i propri (breadcrumb, servizio, galleria) agganciandosi
            a questi tramite @id. */}
        <JsonLd data={jsonLdGraph(businessJsonLd(locale, t), websiteJsonLd(locale, t))} />
        <a href="#main" className="skip-link">
          {t.a11y.skipToContent}
        </a>
        <ConsentProvider>
          <LenisProvider>
            <PageTransition>
              <Header locale={locale} t={slice(t, "nav", "cta", "a11y", "site")} />
              <main id="main">{children}</main>
              <Footer locale={locale} t={t} />
            </PageTransition>
          </LenisProvider>
          <WhatsappFab t={slice(t, "site", "cta", "contact")} />
          <CookieBanner locale={locale} t={slice(t, "consent")} />
        </ConsentProvider>
      </body>
    </html>
  );
}
