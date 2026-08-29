import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Paint Planet | Imbianchino e decoratore a Bolzano",
    short_name: "Paint Planet",
    description:
      "Tinteggiature, decorazioni, facciate e resine a Bolzano. Artigiani del colore per case, uffici e spazi commerciali.",
    /* Lingua esplicita: da "/" il middleware farebbe un 307 a ogni avvio
       dell'app installata, e alcuni browser non seguono il redirect nello
       scope del manifest. */
    start_url: "/it",
    scope: "/",
    display: "standalone",
    background_color: "#070912",
    theme_color: "#070912",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
