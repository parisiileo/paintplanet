import type { MetadataRoute } from "next";
import { BASE } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    /* Nessun disallow: in particolare /_next/ NON va bloccato, altrimenti
       Googlebot non può scaricare CSS e JS e valuta la pagina come se fosse
       priva di stile. Il sito non ha aree private da nascondere. */
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
