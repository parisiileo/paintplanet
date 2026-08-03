import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Paint Planet — Imbianchino e decoratore a Bolzano",
    short_name: "Paint Planet",
    description:
      "Tinteggiature, decorazioni, facciate e resine a Bolzano. Artigiani del colore per case, uffici e spazi commerciali.",
    // La root fa redirect alla lingua rilevata dal middleware.
    start_url: "/",
    display: "standalone",
    background_color: "#070912",
    theme_color: "#070912",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
