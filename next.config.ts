import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Evita che Next inferisca una root sbagliata (lockfile in ~ dell'utente)
  outputFileTracingRoot: path.join(__dirname),


  images: {
    /* AVIF prima di WebP: sulle foto di cantiere (molte texture e gradienti)
       pesa il 20-30% in meno a parità di resa. Next negozia il formato col
       browser, quindi chi non supporta AVIF riceve WebP. */
    formats: ["image/avif", "image/webp"],
    /* Niente variante 3840w: il sorgente piu' grande e' 2048 px sul lato
       lungo, quindi Next la genererebbe solo per ingrandire. Ogni variante
       inutile e' una trasformazione on-demand pagata al primo visitatore. */
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // I file in /public/gallery sono immutabili a parità di nome.
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      {
        source: "/gallery/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
