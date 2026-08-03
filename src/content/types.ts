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

/** Famiglia di lavorazione: guida i filtri della galleria */
export type GalleryCategory =
  | "tinteggiature"
  | "decorazioni"
  | "cartongesso"
  | "resine"
  | "facciate"
  | "azienda";

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
  category: GalleryCategory;
};

export type PageMeta = { title: string; description: string };

/** Blocco di una pagina legale. Le righe che iniziano con "- " diventano lista. */
export type LegalSection = { title: string; body: string[] };

export type LegalPage = {
  slug: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  meta: PageMeta;
};

/**
 * Dati identificativi obbligatori (art. 7 D.lgs 70/2003, art. 2250 c.c.)
 * e titolare del trattamento (art. 13 GDPR).
 * Unico punto da aggiornare se cambiano i dati camerali: da qui si
 * propagano a pagine legali, footer e dati strutturati.
 */
export type CompanyData = {
  /** Denominazione a registro: per un'impresa individuale è il nome del titolare. */
  legalName: string;
  /** Insegna depositata: è il nome con cui l'attività si presenta al pubblico. */
  tradeName: string;
  registeredOffice: string;
  /** Solo il numero: l'etichetta la mette chi lo mostra, via `vatLabel`. */
  vat: string;
  vatLabel: string;
  taxCode: string;
  rea: string;
  /** Qualifica artigiana / sezione speciale del Registro Imprese */
  artisanRegistry: string;
  pec: string;
  /** Titolare del trattamento, se diverso dalla ragione sociale */
  dataController: string;
};

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
    city: string;
    region: string;
  };
  /** Stringhe non visibili: aria-label, skip link, stati per screen reader. */
  a11y: {
    skipToContent: string;
    mainNav: string;
    mobileNav: string;
    openMenu: string;
    closeMenu: string;
  };

  /** href senza prefisso locale — prefissato nei componenti */
  nav: { label: string; href: string }[];
  cta: { quote: string; call: string; discover: string; whatsapp: string };

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

  /**
   * Fascia numeri della home. Ogni voce deve essere verificabile: niente
   * metriche di vanità. `from: "galleryCount"` fa leggere il valore dalla
   * galleria, così il numero resta vero anche aggiungendo foto.
   */
  stats: { value: number; suffix: string; label: string; from?: "galleryCount" }[];

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
    /** Etichetta del filtro che mostra tutti i lavori */
    filterAll: string;
    /** aria-label del gruppo di filtri */
    filtersLabel: string;
    /** aria-label del rail di miniature nel lightbox */
    thumbsLabel: string;
    /** Nome leggibile di ogni famiglia di lavorazione */
    categories: Record<GalleryCategory, string>;
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
    legalLabel: string;
  };

  company: CompanyData;

  /** Banner cookie + gate di consenso della mappa. */
  consent: {
    title: string;
    text: string;
    acceptAll: string;
    necessaryOnly: string;
    policyLink: string;
    /** Placeholder al posto dell'iframe Google Maps */
    mapTitle: string;
    mapText: string;
    mapLoad: string;
    mapOpenExternal: string;
  };

  legal: {
    /** Data ultimo aggiornamento, formato leggibile */
    updated: string;
    updatedLabel: string;
    privacy: LegalPage;
    cookie: LegalPage;
    terms: LegalPage;
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
