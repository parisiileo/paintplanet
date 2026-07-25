/**
 * PAINT PLANET — Tipi condivisi dei dizionari contenuti.
 * Ogni lingua (it/de) implementa `Content` con la stessa shape.
 */

export type Locale = "it" | "de";

/** Titolo con parola evidenziata a colore: pre <span>highlight</span> post */
export type Highlight = {
  pre?: string;
  highlight?: string;
  post?: string;
};

export type ServiceContent = {
  /** Slug URL (uguale in tutte le lingue, senza prefisso locale) */
  slug: string;
  num: string;
  title: string;
  short: string;
  /** Colore-firma del servizio (paint pop) usato negli accenti */
  tone: "cobalt" | "coral" | "sun" | "mint";
  heroTitle: string;
  heroText: string;
  features: { title: string; text: string }[];
  process: { title: string; text: string }[];
};

export type GalleryItem = {
  id: number;
  /** Titolo mostrato su hover e nel lightbox */
  title: string;
  /** Breve nota sulla lavorazione (materiale / finitura) */
  caption: string;
  /** Path in /public/gallery */
  src: string;
  /** Dimensioni native: servono a next/image per evitare layout shift */
  width: number;
  height: number;
};

export type PageMeta = { title: string; description: string };

export type Content = {
  site: {
    name: string;
    payoffPrimary: string;
    payoffSecondary: string;
    phone: string;
    phoneHref: string;
    email: string;
    emailHref: string;
    whatsapp: string;
    whatsappHref: string;
    address: string;
    instagram: string;
    instagramHref: string;
    vat: string;
    city: string;
    region: string;
  };
  /** href senza prefisso locale — prefissato nei componenti */
  nav: { label: string; href: string }[];
  cta: { quote: string; call: string; discover: string };

  hero: {
    label: string;
    /** Titolo su 3 righe: attacco leggero — parola forte — coda */
    titleLead: string;
    titleAccent: string;
    titleTail: string;
    lead: string;
    ctaServices: string;
    scroll: string;
  };

  /** Storytelling scroll-driven della home (la "colata" che riempie) */
  story: {
    label: string;
    steps: { num: string; title: string; text: string }[];
  };

  servicesSection: { label: string; title: Highlight; text: string };
  services: ServiceContent[];

  servicePage: {
    backToServices: string;
    includesLabel: string;
    includesTitle: Highlight;
    processLabel: string;
    processTitle: string;
    ctaLabel: string;
    ctaTitle: string;
    ctaText: string;
  };

  whyUs: {
    label: string;
    title: Highlight;
    about: string;
    values: string[];
    strengths: { title: string; text: string }[];
  };

  /** [DA CONFERMARE] — numeri placeholder da validare col cliente */
  stats: { value: number; suffix: string; label: string }[];

  contactStrip: {
    label: string;
    title: Highlight;
    text: string;
    labels: { phone: string; email: string; address: string };
  };

  about: {
    heroLabel: string;
    heroTitle: string;
    story: string[];
    whereLabel: string;
    whereTitle: string;
    whereText: string;
    valuesLabel: string;
    valuesTitle: string;
    values: { title: string; text: string }[];
  };

  gallery: {
    heroLabel: string;
    heroTitle: Highlight;
    heroText: string;
    /** Contatore sotto l'intro ("9 lavori realizzati") */
    countLabel: string;
    items: GalleryItem[];
    open: string;
    close: string;
    prev: string;
    next: string;
    /** Hint di trascinamento sullo scroller orizzontale */
    dragHint: string;
  };

  contact: {
    heroLabel: string;
    heroTitle: string;
    heroText: string;
    dataLabel: string;
    whatsapp: {
      /** Titolo del blocco CTA WhatsApp */
      title: string;
      /** Testo introduttivo sotto il titolo */
      text: string;
      /** Etichetta del bottone */
      cta: string;
      /** Nota sotto il bottone (alternative di contatto) */
      note: string;
      /** Messaggio precompilato aperto in chat (testo semplice, non codificato) */
      prefill: string;
    };
    mapsEmbed: string;
    mapsLink: string;
  };

  footer: {
    ctaLabel: string;
    ctaTitle: string;
    ctaTitleMuted: string;
    blurb: string;
    exploreLabel: string;
    contactsLabel: string;
  };

  preloaderTagline: string;

  meta: {
    home: PageMeta;
    tinteggiature: PageMeta;
    decorazioni: PageMeta;
    facciate: PageMeta;
    resine: PageMeta;
    galleria: PageMeta;
    chiSiamo: PageMeta;
    contatti: PageMeta;
  };
};
