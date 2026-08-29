import { ImageResponse } from "next/og";
import { getContent, isLocale, defaultLocale, locales } from "@/content";

/**
 * Anteprima social generata a build time (una per lingua). Serve soprattutto
 * a WhatsApp, che è il canale di contatto principale del sito: senza og:image
 * i link condivisi in chat appaiono senza card.
 *
 * Nota: ImageResponse non legge WOFF2, quindi qui non si possono usare i font
 * del sito. Il lettering resta di sistema, la firma visiva la danno colori e
 * composizione.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Paint Planet | Imbianchino e decoratore a Bolzano";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getContent(isLocale(locale) ? locale : defaultLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b1030",
          padding: 72,
          position: "relative",
        }}
      >
        {/* Nebulose: stesso linguaggio visivo del sito */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -120,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background: "radial-gradient(circle, #3b5bff 0%, rgba(59,91,255,0) 68%)",
            opacity: 0.75,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -140,
            width: 640,
            height: 640,
            borderRadius: "50%",
            background: "radial-gradient(circle, #ff5a4d 0%, rgba(255,90,77,0) 66%)",
            opacity: 0.65,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3b5bff, #ff5a4d 55%, #ffc23d)",
              display: "flex",
            }}
          />
          <div style={{ color: "#f6f4ee", fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>
            Paint Planet
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#f6f4ee",
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
              display: "flex",
            }}
          >
            {t.site.payoffPrimary}
          </div>
          <div style={{ color: "#9aa4d0", fontSize: 34, display: "flex" }}>
            {t.site.payoffSecondary}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            color: "#8b95c4",
            fontSize: 26,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 64, height: 3, background: "#ffc23d", display: "flex" }} />
          Bolzano · Bozen · Südtirol
        </div>
      </div>
    ),
    size
  );
}
