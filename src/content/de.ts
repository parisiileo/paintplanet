import type { Content } from "./types";

/**
 * PAINT PLANET — Wörterbuch Deutsch.
 * Identifikationsdaten und Kennzahlen entsprechen dem Handelsregisterauszug
 * vom 21.03.2024 (Protokoll 23797/2024). Keine erfundenen Angaben: Was nicht
 * überprüfbar ist, steht hier nicht.
 */
export const de: Content = {
  site: {
    name: "Paint Planet",
    payoffPrimary: "Wir bringen Farbe in Ihre Räume",
    payoffSecondary: "Maler, Anstreicher und Dekorateur in Bozen",
    phone: "+39 327 578 7264",
    phoneHref: "tel:+393275787264",
    // Im Handelsregister hinterlegtes Postfach: zugleich die in der
    // Datenschutzerklärung genannte Adresse für Betroffenenrechte.
    email: "shahimiklovan@gmail.com",
    emailHref: "mailto:shahimiklovan@gmail.com",
    whatsapp: "+39 327 578 7264",
    whatsappHref: "https://wa.me/393275787264",
    address: "Mazziniplatz 18/B, 39100 Bozen (BZ)",
    instagram: "@paint_planett",
    instagramHref: "https://www.instagram.com/paint_planett/",
    city: "Bozen",
    region: "Südtirol — Alto Adige",
  },

  a11y: {
    skipToContent: "Zum Hauptinhalt springen",
    mainNav: "Hauptnavigation",
    mobileNav: "Mobile Navigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },

  nav: [
    { label: "Leistungen", key: "services" },
    { label: "Über uns", key: "about" },
    { label: "Galerie", key: "gallery" },
    { label: "Kontakt", key: "contact" },
  ],

  cta: {
    quote: "Angebot anfragen",
    call: "Jetzt anrufen",
    discover: "Mehr erfahren",
    whatsapp: "Auf WhatsApp schreiben",
  },

  hero: {
    label: "Maler · Dekorateur · Bozen",
    titleLead: "Wir bringen",
    titleAccent: "Farbe",
    titleTail: "in Ihre Räume",
    lead: "Anstriche, Dekorationen und edle Oberflächen für Wohnungen, Büros und Geschäftsräume. Ein Planet voller Farbe, aufgetragen von erfahrenen Händen.",
    ctaServices: "Unsere Leistungen",
    scroll: "Scrollen",
  },

  story: {
    label: "So arbeiten wir",
    steps: [
      {
        num: "01",
        title: "Beratung & Farbe",
        text: "Wir kommen zu Ihnen, hören dem Raum zu und entwickeln die richtige Palette: echte Muster an Ihren Wänden, nicht nur Farbkarten.",
      },
      {
        num: "02",
        title: "Perfekte Vorbereitung",
        text: "Schutz von Möbeln und Böden, Spachteln, Schleifen und Grundierung: 70 % einer sauberen Arbeit steckt in dem, was man nicht sieht.",
      },
      {
        num: "03",
        title: "Fachgerechter Auftrag",
        text: "Anstriche, Spachteltechniken und Harze mit der richtigen Hand aufgetragen. Zertifizierte Materialien, eingehaltene Termine, jeden Abend saubere Baustelle.",
      },
      {
        num: "04",
        title: "Die Farbe erwacht",
        text: "Wir übergeben fertige, sofort bewohnbare Räume. Sie erhalten das Farbdatenblatt für jede zukünftige Ausbesserung.",
      },
    ],
  },

  servicesSection: {
    label: "Leistungen",
    title: {
      pre: "Alles, um einen Raum zu ",
      highlight: "verwandeln",
      post: "",
    },
    text: "Von der Wohnung bis zur Kondominiumsfassade, vom Zimmer bis zum Designlokal: ein Ansprechpartner für jede Oberfläche.",
  },

  services: [
    {
      key: "tinteggiature",
      num: "01",
      title: "Anstriche & Wände",
      short:
        "Innenanstriche für Wohnungen, Büros und Geschäfte mit sauberen Oberflächen und massgeschneiderten Farben.",
      tone: "cobalt",
      heroTitle: "Innenanstriche",
      heroText:
        "Perfekte Wände und Decken, saubere Kanten und auf das Licht Ihrer Räume abgestimmte Farben. Atmungsaktive, waschbare und schimmelhemmende Farben je nach Raum.",
      features: [
        {
          title: "Premium-Wandfarben",
          text: "Atmungsaktiv, waschbar, hoch deckend: das richtige Produkt für jeden Raum und Nutzung.",
        },
        {
          title: "Massgeschneiderte Farben",
          text: "Präzise Farbmischung und echte Muster vor Ort, um genau den Ton zu treffen, den Sie im Kopf haben.",
        },
        {
          title: "Saubere Kanten",
          text: "Abklebungen, exakte Schnitte und Schutz: Rahmen, Fenster und Sockelleisten bleiben sauber.",
        },
        {
          title: "Schimmelschutz & Sanierung",
          text: "Gezielte Behandlungen für Bäder, Küchen und feuchte Wände — für ein gesundes, langlebiges Ergebnis.",
        },
      ],
      process: [
        {
          title: "Besichtigung",
          text: "Wir prüfen Oberflächen, Licht und Zustand der Wände und schlagen die Palette vor.",
        },
        {
          title: "Vorbereitung",
          text: "Schutz, Spachtelarbeiten, Schleifen und egalisierende Grundierung.",
        },
        {
          title: "Auftrag",
          text: "Zwei oder mehr Anstriche mit Rolle und Pinsel für gleichmässige Deckung.",
        },
        {
          title: "Saubere Übergabe",
          text: "Abdeckungen entfernen, Baustelle reinigen und gemeinsam prüfen.",
        },
      ],
    },
    {
      key: "decorazioni",
      num: "02",
      title: "Dekoration & Spachteltechnik",
      short:
        "Spachteltechniken, Stucco Veneziano, Materialeffekte und Dekore für einzigartige Oberflächen.",
      tone: "coral",
      heroTitle: "Dekorationen & Materialoberflächen",
      heroText:
        "Stucco Veneziano, Spachteltechniken, Sand-, Metall- und Betoneffekte. Oberflächen, die zur Hauptrolle werden — von Hand mit edlen Materialien gefertigt.",
      features: [
        {
          title: "Stucco Veneziano",
          text: "Glänzend oder satiniert, mit marmorähnlicher Tiefe, für Wände mit starkem Charakter.",
        },
        {
          title: "Materialeffekte",
          text: "Sand, Beton, Oxide und Metalle: zeitgenössische Texturen nach Mass.",
        },
        {
          title: "Dekore & Akzentwände",
          text: "Geometrien, Streifen und Ton-in-Ton-Flächen, die den Raum zeichnen.",
        },
        {
          title: "Stilberatung",
          text: "Wir begleiten Sie bei der Wahl von Effekt, Finish und Farbkombination.",
        },
      ],
      process: [
        {
          title: "Konzept",
          text: "Wir definieren Effekt, Farbe und visuelle Referenzen gemeinsam mit Ihnen.",
        },
        {
          title: "Muster",
          text: "Wir fertigen ein echtes Muster an der Wand oder auf einer Tafel an.",
        },
        {
          title: "Handauftrag",
          text: "Auftrag in mehreren Schritten mit Kelle, Glätter und speziellen Techniken.",
        },
        {
          title: "Schutz",
          text: "Wachse und Schutzfinishes für Beständigkeit und leichte Reinigung.",
        },
      ],
    },
    {
      key: "facciate",
      num: "03",
      title: "Fassaden & Wärmedämmung",
      short:
        "Aussenanstriche, Verputz und Wärmedämmverbund für Kondominien und Einfamilienhäuser.",
      tone: "sun",
      heroTitle: "Fassaden & Wärmedämmverbund",
      heroText:
        "Wir schützen und werten das Äussere auf: Silikat- und Siloxanfarben, Verputz und Wärmedämmverbundsysteme für Energieeffizienz und Komfort.",
      features: [
        {
          title: "Aussenfarben",
          text: "Siloxan und Silikat, beständig gegen Witterung, Smog und UV-Strahlen.",
        },
        {
          title: "Wärmedämmverbund",
          text: "Fachgerechte WDVS zur Reduzierung von Wärmeverlust und Heizkosten.",
        },
        {
          title: "Verputz & Finish",
          text: "Farbige Spachtel- und Putzoberflächen für eine gleichmässige, langlebige Fassade.",
        },
        {
          title: "Gerüst & Sicherheit",
          text: "Organisierte, sichere Baustelle unter Einhaltung der Termine.",
        },
      ],
      process: [
        {
          title: "Prüfung",
          text: "Analyse des Fassadenzustands und der thermischen Anforderungen.",
        },
        {
          title: "Vorbereitung",
          text: "Reinigung, Festigung der Untergründe und Systemmontage.",
        },
        {
          title: "Auftrag",
          text: "Verputz, Finish und Anstrich mit Aussenprodukten.",
        },
        {
          title: "Abnahme",
          text: "Endkontrolle und ordentlicher Gerüstabbau.",
        },
      ],
    },
    {
      key: "resine",
      num: "04",
      title: "Harze & Spezialoberflächen",
      short:
        "Böden und Beläge aus Harz, Mikrozement und fugenlose durchgehende Oberflächen.",
      tone: "mint",
      heroTitle: "Harze, Mikrozement & fugenlose Oberflächen",
      heroText:
        "Böden und Wände aus Harz und Mikrozement: durchgehende, moderne und widerstandsfähige Oberflächen für Bäder, Küchen, Geschäfte und Lofts.",
      features: [
        {
          title: "Harzböden",
          text: "Durchgehende, wasserdichte und leicht zu reinigende Oberflächen in vielen Finishes.",
        },
        {
          title: "Mikrozement",
          text: "Materialeffekt auf Böden, Wänden und Flächen, auch in Bad und Dusche.",
        },
        {
          title: "Fugenlose Beläge",
          text: "Keine Fugen, zeitgemässer Look und hohe Trittfestigkeit.",
        },
        {
          title: "Auftrag auf Bestand",
          text: "Oft auf bestehende Fliesen und Flächen aufbringbar — ohne Abbrucharbeiten.",
        },
      ],
      process: [
        {
          title: "Bewertung",
          text: "Prüfung des Untergrunds und Wahl des passenden Harzzyklus.",
        },
        {
          title: "Vorbereitung",
          text: "Primer, Spachtelung und Korrektur von Unebenheiten.",
        },
        {
          title: "Auftrag",
          text: "Mehrschichtiger Auftrag von Harz oder Mikrozement.",
        },
        {
          title: "Schutz",
          text: "Transparentes Schutzfinish für Langlebigkeit und Hygiene.",
        },
      ],
    },
  ],

  servicePage: {
    backToServices: "Alle Leistungen",
    includesLabel: "Was enthalten ist",
    includesTitle: {
      pre: "Ein ",
      highlight: "vollständiger",
      post: " Service",
    },
    processLabel: "Die Methode",
    processTitle: "So setzen wir es um",
    ctaLabel: "Los geht's?",
    ctaTitle: "Erzählen Sie uns von Ihrem Raum",
    ctaText:
      "Eine kostenlose Besichtigung ist der beste Weg, um zu verstehen, was wirklich nötig ist. Schreiben Sie uns — wir antworten schnell.",
  },

  whyUs: {
    label: "Warum Paint Planet",
    title: {
      pre: "Handwerker der Farbe, ",
      highlight: "nicht nur Maler",
      post: "",
    },
    about:
      "Paint Planet entsteht in Bozen aus der Leidenschaft für Farbe und für sauber gemachte Dinge. Wir behandeln jedes Zuhause wie unser eigenes: sauber, präzise und pünktlich.",
    values: [
      "Klare Angebote",
      "Saubere Baustelle",
      "Zertifizierte Materialien",
      "Pünktlichkeit",
    ],
    strengths: [
      {
        title: "Handwerkliche Präzision",
        text: "Jede Kante, jede Ecke und jedes Finish im Detail gepflegt, wie man es früher machte.",
      },
      {
        title: "Farbberatung",
        text: "Wir helfen bei der Wahl von Tönen und Finishes passend zu Licht, Stil und Nutzung jedes Raums.",
      },
      {
        title: "Ordnung & Respekt",
        text: "Wir schützen Möbel und Böden und hinterlassen die Baustelle jeden Tag sauber.",
      },
      {
        title: "Ein Ansprechpartner",
        text: "Von der ersten Idee bis zur Übergabe betreut Sie jemand, der Ihr Projekt wirklich kennt.",
      },
    ],
  },

  /* Jede Zahl ist überprüfbar: Galerie, Handelsregisterauszug, Arbeitsweise.
     Keine erfundenen "Jahre Erfahrung" oder "verwandelten Räume". */
  stats: [
    { value: 0, suffix: "", label: "Arbeiten in unserer Galerie", from: "galleryCount" },
    { value: 3, suffix: "", label: "Im Register eingetragene Handwerkstätigkeiten" },
    { value: 2, suffix: "", label: "Sprachen auf der Baustelle: Italienisch und Deutsch" },
    { value: 0, suffix: "€", label: "Besichtigung und Kostenvoranschlag" },
  ],

  contactStrip: {
    label: "Los geht's",
    title: {
      pre: "Eine Farbidee im Kopf? ",
      highlight: "Wir erwecken sie",
      post: "",
    },
    text: "Kostenlose Besichtigung und Angebot in ganz Bozen und Umgebung.",
    labels: { phone: "Telefon", email: "E-Mail", address: "Gebiet" },
  },

  about: {
    heroLabel: "Über uns",
    heroTitle: "Farbe ist unser Handwerk",
    story: [
      "Paint Planet ist der Betrieb von Malern und Dekorateuren aus Bozen, der die Farbe in den Mittelpunkt jedes Projekts stellt. Er entsteht aus handwerklicher Arbeit und Liebe zum Detail — mit der Idee, dass eine gut gemachte Wand das Wohngefühl verändert.",
      "Wir arbeiten für Privatpersonen, Kondominien, Büros und Geschäfte in ganz Südtirol. Anstriche, Dekorationen, Fassaden und Harze: ein Team für jede Oberfläche, innen und aussen.",
      "Wir glauben an klare Angebote, zertifizierte Materialien und Respekt für Ihre Räume und Ihre Zeit. Denn gute Arbeit sieht — und lebt — man jeden Tag.",
    ],
    whereLabel: "Wo wir tätig sind",
    whereTitle: "Bozen und ganz Südtirol",
    whereText:
      "Mit Sitz in Bozen betreuen wir Baustellen in der Stadt und in den umliegenden Gemeinden der Provinz. Kontaktieren Sie uns, um die Abdeckung Ihres Gebiets zu prüfen.",
    valuesLabel: "Unsere Werte",
    valuesTitle: "So arbeiten wir",
    values: [
      {
        title: "Liebe zum Detail",
        text: "Der Unterschied zwischen guter und makelloser Arbeit liegt in Kanten, Ecken und Trocknungszeiten.",
      },
      {
        title: "Die richtigen Materialien",
        text: "Nur zertifizierte, für den Zweck geeignete Produkte: innen, aussen, feuchte Räume, technische Oberflächen.",
      },
      {
        title: "Transparenz",
        text: "Detaillierte Angebote ohne Überraschungen und laufende Kommunikation während der Arbeit.",
      },
      {
        title: "Respekt",
        text: "Für Ihre Räume, Ihre Zeit und die Umwelt: ordentliche Baustelle und Endreinigung immer inklusive.",
      },
    ],
  },

  gallery: {
    heroLabel: "Galerie",
    heroTitle: { pre: "Unsere ", highlight: "Arbeiten", post: "" },
    heroText:
      "Wohnungen, Schlafzimmer, Bäder, Flure und Terrassen: echte Räume, fertiggestellt von uns — mit Dekorputzen, Harzen, Trockenbau und Anstrichen.",
    countLabel: "realisierte Arbeiten",
    filterAll: "Alle",
    filtersLabel: "Arbeiten nach Gewerk filtern",
    thumbsLabel: "Vorschaubilder der Arbeiten",
    categories: {
      tinteggiature: "Anstriche",
      decorazioni: "Dekorationen",
      cartongesso: "Trockenbau",
      resine: "Harze",
      facciate: "Fassaden",
      azienda: "Betrieb",
    },
    items: [
      {
        id: 1,
        title: "Bad in Mikrozement",
        caption: "Mikrozement in Taupe auf Wänden, Wanne und Boden — fugenlos",
        src: "/gallery/bagno-microcemento.jpg",
        width: 1200,
        height: 1600,
        category: "resine",
      },
      {
        id: 2,
        title: "Marmorwand mit Kamin",
        caption: "Marmorierte Finish-Optik auf Wand und Kaminverkleidung",
        src: "/gallery/parete-marmorizzata-camino.png",
        width: 915,
        height: 512,
        category: "decorazioni",
      },
      {
        id: 3,
        title: "Wand in Kunststein",
        caption: "Steinverkleidung mit streifendem Licht aus dem Trockenbau",
        src: "/gallery/parete-pietra-ricostruita.jpg",
        width: 460,
        height: 1024,
        category: "decorazioni",
      },
      {
        id: 4,
        title: "TV-Wand in Spachteltechnik",
        caption: "Perlgraue Spachteltechnik im Wohnbereich mit Hängemöbel",
        src: "/gallery/soggiorno-parete-tv.png",
        width: 805,
        height: 413,
        category: "decorazioni",
      },
      {
        id: 5,
        title: "Flur mit Einbauspots",
        caption: "Anstrich Ton in Ton und abgehängte Decke mit Einbaustrahlern",
        src: "/gallery/corridoio-faretti.jpg",
        width: 1536,
        height: 2048,
        category: "tinteggiature",
      },
      {
        id: 6,
        title: "Schlafzimmer mit Dekorwand",
        caption: "Marmor-Dekor hinter dem Kopfteil und Trockenbau-Lichtvouten",
        src: "/gallery/camera-effetto-marmo.jpg",
        width: 2048,
        height: 1380,
        category: "decorazioni",
      },
      {
        id: 7,
        title: "Küche mit Lichtdecke",
        caption: "Trockenbau nach Mass mit indirekter Beleuchtung über der Küche",
        src: "/gallery/cucina-controsoffitto.jpg",
        width: 1600,
        height: 594,
        category: "cartongesso",
      },
      {
        id: 8,
        title: "Terrasse und Aussenfinish",
        caption: "Weisses Aussenfinish, Fertigstellungsarbeiten und Feinsteinzeug",
        src: "/gallery/terrazza-esterno.jpg",
        width: 1536,
        height: 2048,
        category: "facciate",
      },
      {
        id: 9,
        title: "Zimmer mit Parkett",
        caption: "Warmes Weiss auf Wänden und Decke, saubere Anschlüsse",
        src: "/gallery/camera-parquet.jpg",
        width: 1200,
        height: 1600,
        category: "tinteggiature",
      },
      {
        id: 10,
        title: "Wohnzimmer in grauer Spachteltechnik",
        caption: "Anthrazitfarbene Spachteltechnik auf zwei Wänden, Decke matt weiss",
        src: "/gallery/soggiorno-spatolato-grigio.jpg",
        width: 1600,
        height: 900,
        category: "decorazioni",
      },
      {
        id: 11,
        title: "Flur in Beige gestrichen",
        caption: "Eingang und Diele Ton in Ton, Kanten und Anschlüsse von Hand gezogen",
        src: "/gallery/corridoio-tinteggiato-beige.jpg",
        width: 1536,
        height: 2048,
        category: "tinteggiature",
      },
      {
        id: 12,
        title: "Flur mit Lichtvoute und grüner Wand",
        caption: "Abgehängte Decke mit Einbauspots und Akzentwand in Salbeigrün",
        src: "/gallery/corridoio-controsoffitto-parete-verde.jpg",
        width: 1200,
        height: 1600,
        category: "cartongesso",
      },
      {
        id: 13,
        title: "Wohnzimmer mit Trockenbau-Voute",
        caption: "Massgefertigte Trennwand und Voute mit indirektem Licht, weiss",
        src: "/gallery/soggiorno-veletta-cartongesso.jpg",
        width: 1536,
        height: 2048,
        category: "cartongesso",
      },
      {
        id: 14,
        title: "TV-Wand mit Nischen und LED",
        caption: "Trockenbau nach Mass mit Nischen, Linearkamin und Bodenlicht",
        src: "/gallery/parete-tv-nicchie-led.jpg",
        width: 700,
        height: 981,
        category: "cartongesso",
      },
      {
        id: 15,
        title: "Decke beim Verspachteln",
        caption: "Bewehrungsband und Fugenspachtelung vor dem Endanstrich",
        src: "/gallery/controsoffitto-stuccatura.jpg",
        width: 1200,
        height: 1600,
        category: "cartongesso",
      },
      {
        id: 16,
        title: "Wohnzimmer in Taupe",
        caption: "Wände in Taupe, weisse Decke mit Spots, Baustelle sauber abgedeckt",
        src: "/gallery/soggiorno-tortora.jpg",
        width: 1536,
        height: 2048,
        category: "tinteggiature",
      },
      {
        id: 17,
        title: "Wand in Smaragdgrün",
        caption: "Akzentwand in kräftigem Grün, Auftrag mit der Rolle",
        src: "/gallery/parete-verde-smeraldo.jpg",
        width: 1200,
        height: 1600,
        category: "tinteggiature",
      },
      {
        id: 18,
        title: "Kinderzimmer mit rosa Decke",
        caption: "Puderrosa Decke und weisse Wände für ein massgeschneidertes Zimmer",
        src: "/gallery/cameretta-soffitto-rosa.jpg",
        width: 1536,
        height: 2048,
        category: "tinteggiature",
      },
      {
        id: 19,
        title: "Rosa Decke im Dachgeschoss",
        caption: "Vollständige Abdeckung und Farbauftrag auf der Dachschräge",
        src: "/gallery/mansarda-soffitto-rosa.jpg",
        width: 1200,
        height: 1600,
        category: "tinteggiature",
      },
      {
        id: 20,
        title: "Kunstdekor an der Wand",
        caption: "Strukturgrund mit Silhouette und handgemaltem Buchstabenregen",
        src: "/gallery/decoro-artistico-silhouette.jpg",
        width: 1200,
        height: 1600,
        category: "decorazioni",
      },
      {
        id: 21,
        title: "Bad mit Tropen-Tapete",
        caption: "Verlegung einer Jungle-Tapete auf der Rückwand",
        src: "/gallery/bagno-carta-parati-tropicale.jpg",
        width: 1200,
        height: 1600,
        category: "decorazioni",
      },
      {
        id: 22,
        title: "Kamin in Marmoroptik mit Silber",
        caption: "Marmorierte Finish-Optik mit Silberadern auf Haube und Sockel",
        src: "/gallery/camino-effetto-marmo-argento.jpg",
        width: 902,
        height: 1600,
        category: "decorazioni",
      },
      {
        id: 23,
        title: "Küche mit gelber Wand",
        caption: "Ockergelbes Dekor über die volle Höhe mit LED unter den Hängeschränken",
        src: "/gallery/cucina-parete-gialla.jpg",
        width: 1200,
        height: 1600,
        category: "decorazioni",
      },
      {
        id: 24,
        title: "Treppenhaus mit Zierrahmen",
        caption: "Profilierte Wandrahmen entlang des Laufs, Spots am Podest",
        src: "/gallery/scala-boiserie-cornici.jpg",
        width: 458,
        height: 458,
        category: "decorazioni",
      },
      {
        id: 25,
        title: "Dachbad in Mikrozement",
        caption: "Mikrozement in Taupe auf Boden, Wanne und Dachschrägen",
        src: "/gallery/bagno-mansarda-microcemento.jpg",
        width: 1200,
        height: 1600,
        category: "resine",
      },
      {
        id: 26,
        title: "Boden in blauem Harz",
        caption: "Fugenloses Harz direkt über dem alten Belag — ohne Abbrucharbeiten",
        src: "/gallery/resina-pavimento-blu.jpg",
        width: 1200,
        height: 1600,
        category: "resine",
      },
      {
        id: 27,
        title: "Blaues Harz — Auftrag mit der Rolle",
        caption: "Zweiter Auftrag für eine gleichmässige, rutschfeste Oberfläche",
        src: "/gallery/resina-pavimento-blu-dettaglio.jpg",
        width: 1200,
        height: 1600,
        category: "resine",
      },
      {
        id: 28,
        title: "Spachtelung von Balkonstirnseiten",
        caption: "Arbeiten von der Hubarbeitsbühne an Balkonen und Stirnseiten",
        src: "/gallery/facciata-rasatura-piattaforma.jpg",
        width: 1536,
        height: 2048,
        category: "facciate",
      },
      {
        id: 29,
        title: "Trockenbauwand mit Dämmung",
        caption: "Metallständerwerk und Mineralwolle vor dem Beplanken",
        src: "/gallery/cartongesso-isolamento-lana-roccia.jpg",
        width: 1000,
        height: 750,
        category: "cartongesso",
      },
      {
        id: 30,
        title: "Vorsatzschalen in Trockenbau",
        caption: "Ständerkonstruktion für Trennwände im Gewerbeobjekt",
        src: "/gallery/parete-cartongesso-struttura.jpg",
        width: 745,
        height: 559,
        category: "cartongesso",
      },
      {
        id: 31,
        title: "Gedämmte Trennwand",
        caption: "Mineralwolle für Wärme- und Schalldämmung",
        src: "/gallery/parete-cartongesso-isolante.jpg",
        width: 750,
        height: 500,
        category: "cartongesso",
      },
      {
        id: 32,
        title: "Unterkonstruktion der Decke",
        caption: "Tragkonstruktion und Vorbereitung der Deckeninstallationen",
        src: "/gallery/controsoffitto-orditura.jpg",
        width: 600,
        height: 450,
        category: "cartongesso",
      },
      {
        id: 33,
        title: "Metallunterkonstruktion an der Decke",
        caption: "Profile und Abhänger fluchtgerecht vor dem Beplanken",
        src: "/gallery/controsoffitto-struttura-metallica.jpg",
        width: 600,
        height: 450,
        category: "cartongesso",
      },
      {
        id: 34,
        title: "Unsere Fahrzeuge",
        caption: "Unsere Flotte: immer bereit für die nächste Baustelle",
        src: "/gallery/mezzi-paint-planet.jpg",
        width: 1600,
        height: 1200,
        category: "azienda",
      },
    ],
    open: "Öffnen",
    close: "Schliessen",
    prev: "Zurück",
    next: "Weiter",
    dragHint: "Zum Scrollen ziehen",
  },

  contact: {
    heroLabel: "Kontakt",
    heroTitle: "Sprechen wir über Ihr Projekt",
    heroText:
      "Erzählen Sie uns, was Sie vorhaben: Zimmer, Fassade, Dekoration oder Harz. Wir melden uns für eine kostenlose Besichtigung und ein Angebot.",
    dataLabel: "Unsere Kontaktdaten",
    whatsapp: {
      title: "Schreiben Sie uns auf WhatsApp",
      text: "Der schnellste Weg, uns Ihr Projekt zu schildern. Senden Sie uns eine Nachricht mit ein paar Details: Wir antworten rasch und vereinbaren eine kostenlose Besichtigung.",
      cta: "Auf WhatsApp schreiben",
      note: "Lieber Telefon oder E-Mail? Alle Kontaktdaten finden Sie nebenan.",
      prefill:
        "Hallo Paint Planet! Ich hätte gern ein Angebot für mein Projekt. Hier ein paar Details:",
    },
    mapsEmbed:
      "https://www.google.com/maps?q=Piazza%20Giuseppe%20Mazzini%2018%2FB%2C%2039100%20Bolzano%20BZ&output=embed",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Piazza%20Giuseppe%20Mazzini%2018%2FB%2C%2039100%20Bolzano%20BZ",
  },

  footer: {
    ctaLabel: "Bereit zu starten",
    ctaTitle: "Wir bringen Farbe",
    ctaTitleMuted: "in Ihren nächsten Raum",
    blurb:
      "Paint Planet — Maler und Dekorateur in Bozen. Anstriche, Dekorationen, Fassaden und Harze mit handwerklicher Sorgfalt.",
    exploreLabel: "Navigation",
    contactsLabel: "Kontakt",
    legalLabel: "Rechtliches",
  },

  /* Gesetzliche Pflichtangaben. Einzelunternehmen: Der Inhaber ist zugleich
     Verantwortlicher im Sinne der DSGVO. Es fehlt nur noch die MwSt.-Nr. */
  company: {
    legalName: "Shahi Miklovan",
    tradeName: "Paint Planet di Shahi Miklovan",
    registeredOffice: "Giuseppe-Mazzini-Platz 18/B, 39100 Bozen (BZ)",
    vat: "03249430210",
    vatLabel: "MwSt.-Nr.",
    taxCode: "SHHMLV97L09Z100W",
    rea: "BZ - 244388 (Handelskammer Bozen)",
    artisanRegistry:
      "Seit 21.03.2024 im Handelsregister Bozen eingetragen, Sondersektion, mit der Qualifikation als Handwerksunternehmen",
    pec: "shahi.miklovan@pec.it",
    dataController: "Shahi Miklovan",
  },

  openingHours: {
    label: "Öffnungszeiten",
    days: "Montag — Samstag",
    hours: "8:00 – 12:00 · 13:00 – 19:00",
    closed: "Sonntag geschlossen",
  },

  consent: {
    title: "Cookies und externe Dienste",
    text: "Wir verwenden ausschließlich technisch notwendige Cookies (etwa zum Speichern der gewählten Sprache). Auf der Kontaktseite ist eine Google-Karte eingebunden: Wenn Sie sie laden, kann Google eigene Cookies setzen und Ihre IP-Adresse erhalten. Sie entscheiden.",
    acceptAll: "Alle akzeptieren",
    necessaryOnly: "Nur notwendige",
    policyLink: "Cookie-Richtlinie",
    mapTitle: "Google-Karte",
    mapText: "Mit dem Laden der Karte akzeptieren Sie, dass Google Ihre IP-Adresse erhält und Cookies auf Ihrem Gerät setzen kann.",
    mapLoad: "Karte laden",
    mapOpenExternal: "In Google Maps öffnen",
  },

  legal: {
    updated: "2. August 2026",
    updatedLabel: "Letzte Aktualisierung",

    privacy: {
      key: "privacy",
      title: "Datenschutzerklärung",
      intro:
        "Diese Erklärung beschreibt, wie Paint Planet personenbezogene Daten von Besucherinnen und Besuchern dieser Website verarbeitet, gemäß Art. 13 und 14 der Verordnung (EU) 2016/679 (DSGVO).",
      sections: [
        {
          title: "Verantwortlicher",
          body: [
            "Verantwortlich für die Verarbeitung ist {{legalName}}, Einzelunternehmen mit der Geschäftsbezeichnung «{{tradeName}}», mit Sitz in {{registeredOffice}}, {{vatLabel}} {{vat}}, Steuernummer {{taxCode}}.",
            "Ein Datenschutzbeauftragter (DSB) wurde nicht benannt: Die Voraussetzungen nach Art. 37 DSGVO liegen nicht vor.",
            "Für Anfragen zu Ihren Daten schreiben Sie an {{email}} oder an die PEC-Adresse {{pec}}.",
          ],
        },
        {
          title: "Welche Daten wir erheben",
          body: [
            "Diese Website hat kein Kontaktformular, keinen geschützten Bereich und keine Zahlungssysteme: Wir fordern Sie nicht zur Eingabe von Daten auf. Folgende Verarbeitungen finden statt.",
            "- Navigationsdaten: Der Server protokolliert automatisch IP-Adresse, Datum und Uhrzeit der Anfrage, aufgerufene Seite, Browsertyp und Betriebssystem. Es handelt sich um technische Daten, die für Betrieb und Sicherheit der Website erforderlich sind.",
            "- Sprachpräferenz: Ein technisches Cookie speichert, ob Sie Italienisch oder Deutsch gewählt haben.",
            "- Cookie-Entscheidung: Ein technisches Cookie speichert Ihre Antwort auf das Banner, damit es nicht bei jedem Besuch erneut erscheint.",
            "- Direkte Kontaktaufnahme: Wenn Sie uns per E-Mail oder WhatsApp schreiben, verarbeiten wir die Daten, die Sie in dieser Nachricht freiwillig angeben (Name, Kontaktdaten, Inhalt der Anfrage).",
          ],
        },
        {
          title: "Zwecke und Rechtsgrundlagen",
          body: [
            "- Betrieb und Sicherheit der Website — berechtigtes Interesse des Verantwortlichen (Art. 6 Abs. 1 lit. f DSGVO).",
            "- Speicherung von Sprache und Cookie-Entscheidung — berechtigtes Interesse; es handelt sich um technische Cookies, die keiner Einwilligung bedürfen.",
            "- Beantwortung Ihrer Angebots- oder Informationsanfragen — vorvertragliche Maßnahmen auf Ihre Anfrage (Art. 6 Abs. 1 lit. b DSGVO).",
            "- Laden der Google-Karte — Ihre Einwilligung, die Sie frei erteilen oder verweigern und jederzeit widerrufen können (Art. 6 Abs. 1 lit. a DSGVO).",
          ],
        },
        {
          title: "Empfänger der Daten",
          body: [
            "Wir verkaufen und übermitteln Ihre Daten nicht. Zugriff haben, als Auftragsverarbeiter oder eigenständig Verantwortliche, ausschließlich die für den Betrieb notwendigen technischen Dienstleister:",
            "- Vercel Inc. — Hosting und Auslieferung der Website.",
            "- Google Ireland Ltd. — nur wenn Sie die Karte auf der Kontaktseite laden.",
            "- Ihr E-Mail-Anbieter bzw. WhatsApp (Meta Platforms Ireland Ltd.), wenn Sie uns über diese Kanäle kontaktieren.",
            "Einige dieser Anbieter können Daten außerhalb des Europäischen Wirtschaftsraums verarbeiten. In diesem Fall erfolgt die Übermittlung auf Grundlage der von der Europäischen Kommission genehmigten Standardvertragsklauseln oder eines Angemessenheitsbeschlusses.",
          ],
        },
        {
          title: "Speicherdauer",
          body: [
            "- Serverprotokolle: für die technisch zur Sicherheit erforderliche Dauer, in der Regel nicht länger als 12 Monate.",
            "- Technische Cookies: bis zu 12 Monate oder bis Sie sie im Browser löschen.",
            "- Per E-Mail oder WhatsApp erhaltene Mitteilungen: für die zur Bearbeitung der Anfrage erforderliche Dauer und, sofern ein Geschäftsverhältnis entsteht, für die gesetzlichen steuer- und zivilrechtlichen Fristen.",
          ],
        },
        {
          title: "Ihre Rechte",
          body: [
            "Sie können jederzeit Auskunft über Ihre Daten, deren Berichtigung oder Löschung, die Einschränkung der Verarbeitung und die Datenübertragbarkeit verlangen sowie der auf berechtigtem Interesse beruhenden Verarbeitung widersprechen (Art. 15-22 DSGVO). Eine erteilte Einwilligung können Sie jederzeit widerrufen, ohne dass die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung berührt wird.",
            "Zur Ausübung dieser Rechte schreiben Sie an {{email}}. Wenn Sie der Ansicht sind, dass die Verarbeitung gegen die DSGVO verstößt, können Sie Beschwerde bei der italienischen Datenschutzbehörde einlegen (www.garanteprivacy.it).",
          ],
        },
        {
          title: "Minderjährige",
          body: [
            "Diese Website richtet sich an ein erwachsenes Publikum und erhebt nicht wissentlich Daten von Kindern unter 14 Jahren.",
          ],
        },
      ],
      meta: {
        title: "Datenschutzerklärung",
        description:
          "Wie Paint Planet personenbezogene Daten von Website-Besuchern verarbeitet: Zwecke, Rechtsgrundlagen, Speicherdauer und Betroffenenrechte.",
      },
    },

    cookie: {
      key: "cookie",
      title: "Cookie-Richtlinie",
      intro:
        "Diese Seite erklärt, welche Cookies die Website von Paint Planet verwendet und wie Sie Ihre Präferenzen verwalten. Cookies sind kleine Textdateien, die Websites auf Ihrem Gerät speichern.",
      sections: [
        {
          title: "Technische Cookies (immer aktiv)",
          body: [
            "Sie sind für den Betrieb der Website erforderlich. Gemäß Art. 122 des italienischen Datenschutzkodex bedürfen sie keiner Einwilligung, wir legen sie dennoch offen.",
            "- pp-locale — speichert die gewählte Sprache (Italienisch oder Deutsch), damit die automatische Erkennung nicht bei jedem Besuch erneut greift. Dauer: 12 Monate.",
            "- pp-consent — speichert Ihre Antwort auf das Cookie-Banner. Dauer: 12 Monate.",
          ],
        },
        {
          title: "Cookies Dritter (nur mit Ihrer Einwilligung)",
          body: [
            "Auf der Kontaktseite ist eine Karte von Google eingebunden. Die Karte wird erst geladen, wenn Sie es erlauben: Bis dahin erhält Google keinerlei Daten von dieser Website.",
            "- Google Maps (Google Ireland Ltd.) — wenn Sie die Karte laden, erhält Google Ihre IP-Adresse und kann eigene Cookies setzen, auch zu Profilingzwecken. Datenschutzerklärung: policies.google.com/privacy",
            "Sie können die Karte auch ansehen, ohne sie hier zu laden, indem Sie Google Maps über den Link neben dem Kartenfeld direkt öffnen.",
          ],
        },
        {
          title: "Was wir NICHT verwenden",
          body: [
            "Diese Website verwendet keine Analyse-Cookies, keine Werbe-Profiling-Cookies, keine Social-Media-Tracking-Pixel und keine Statistikwerkzeuge Dritter. Die Schriftarten werden direkt von unserem Server ausgeliefert: Es erfolgen keine Aufrufe an Google Fonts oder andere externe CDNs.",
          ],
        },
        {
          title: "Präferenzen verwalten",
          body: [
            "Sie können Ihre im Banner getroffene Wahl jederzeit über die Schaltfläche unten ändern. Zudem können Sie Cookies in den Einstellungen Ihres Browsers blockieren oder löschen; die Vorgehensweise ist in den Hilfeseiten von Chrome, Firefox, Safari und Edge beschrieben. Das Deaktivieren technischer Cookies kann Funktionen der Website beeinträchtigen, etwa das Speichern der Sprache.",
          ],
        },
      ],
      meta: {
        title: "Cookie-Richtlinie",
        description:
          "Welche Cookies die Website von Paint Planet verwendet, wozu sie dienen und wie Sie die Einwilligung für Dienste Dritter verwalten.",
      },
    },

    terms: {
      key: "terms",
      title: "Impressum",
      intro:
        "Angaben zum Betreiber dieser Website und Nutzungsbedingungen für ihre Inhalte.",
      sections: [
        {
          title: "Anbieterkennzeichnung",
          body: [
            "Gemäß Art. 7 des GvD 70/2003:",
            "- Bezeichnung: {{legalName}}",
            "- Geschäftsbezeichnung: {{tradeName}}",
            "- Rechtsform: Einzelunternehmen",
            "- Inhaber: {{dataController}}",
            "- Sitz: {{registeredOffice}}",
            "- MwSt.-Nr.: {{vat}}",
            "- Steuernummer und Handelsregisternummer: {{taxCode}}",
            "- VWV-Nummer: {{rea}}",
            "- {{artisanRegistry}}",
            "- Tätigkeit: Maler und Lackierer; Verputzer; Stukkateur",
            "- E-Mail: {{email}}",
            "- PEC: {{pec}}",
            "- Telefon: {{phone}}",
          ],
        },
        {
          title: "Inhalte der Website",
          body: [
            "Die veröffentlichten Informationen dienen der Beschreibung und Bewerbung der angebotenen Leistungen. Sie stellen kein öffentliches Angebot im Sinne von Art. 1336 des italienischen Zivilgesetzbuchs dar: Jede Arbeit wird erst nach einer Besichtigung mit schriftlichem Kostenvoranschlag beziffert.",
            "Wir achten auf die Richtigkeit der Inhalte, gewährleisten jedoch nicht, dass sie stets vollständig und aktuell sind. Änderungen bleiben jederzeit und ohne Vorankündigung vorbehalten.",
          ],
        },
        {
          title: "Geistiges Eigentum",
          body: [
            "Texte, Fotografien, Marken, Grafiken und Code dieser Website sind Eigentum von {{legalName}} oder werden mit Lizenz genutzt. Die Fotografien zeigen tatsächlich ausgeführte Arbeiten. Die auch auszugsweise Vervielfältigung ohne schriftliche Genehmigung ist untersagt.",
          ],
        },
        {
          title: "Links zu externen Seiten",
          body: [
            "Die Website enthält Links zu Diensten Dritter (Instagram, WhatsApp, Google Maps). Wir haben keinen Einfluss auf deren Inhalte und Datenschutzpraktiken und übernehmen dafür keine Verantwortung.",
          ],
        },
        {
          title: "Anwendbares Recht",
          body: [
            "Es gilt italienisches Recht. Bei Streitigkeiten mit Verbrauchern bleibt der Gerichtsstand am Wohnsitz oder Aufenthaltsort des Verbrauchers unberührt, sofern dieser in Italien liegt.",
          ],
        },
      ],
      meta: {
        title: "Impressum",
        description:
          "Anbieterkennzeichnung von Paint Planet, Nutzungsbedingungen der Website-Inhalte und geistiges Eigentum.",
      },
    },
  },

  preloaderTagline: "Wir bringen Farbe in Ihre Räume",

  meta: {
    home: {
      title: "Paint Planet — Maler und Dekorateur in Bozen",
      description:
        "Anstriche, Dekorationen, Fassaden und Harze in Bozen. Paint Planet: Handwerker der Farbe für Wohnungen, Büros und Geschäfte. Kostenloses Angebot.",
    },
    tinteggiature: {
      title: "Innenanstriche in Bozen",
      description:
        "Anstrich von Wänden und Decken in Bozen mit massgeschneiderten Farben und sauberen Oberflächen: Wohnungen, Büros, Geschäfte. Kostenlose Besichtigung.",
    },
    decorazioni: {
      title: "Dekoration und Spachteltechnik in Bozen",
      description:
        "Stucco Veneziano, Spachteltechniken und Materialeffekte von Hand in Bozen. Oberflächen für einzigartige Räume, mit echten Mustern an Ihrer Wand.",
    },
    facciate: {
      title: "Fassaden und Wärmedämmung in Bozen",
      description:
        "Aussenanstriche, Verputz und Wärmedämmverbund für Kondominien und Einfamilienhäuser in Bozen und Südtirol. Gerüst und Sicherheit inklusive.",
    },
    resine: {
      title: "Harze und Mikrozement in Bozen",
      description:
        "Böden und Beläge aus Harz und Mikrozement in Bozen: durchgehende, fugenlose Oberflächen, auch direkt auf dem bestehenden Boden anwendbar.",
    },
    galleria: {
      // Der Ort gehört auch hier in den Titel: Danach wird gesucht.
      title: "Arbeitsgalerie in Bozen",
      description:
        "Fotos echter Arbeiten: Anstriche, Dekorationen, Harze, Trockenbau und Fassaden von Paint Planet in Bozen und Südtirol.",
    },
    chiSiamo: {
      title: "Über uns — Maler in Bozen",
      description:
        "Paint Planet ist das Handwerksunternehmen von Shahi Miklovan in Bozen: Maler, Lackierer und Stukkateur. Liebe zum Detail, saubere Baustellen.",
    },
    contatti: {
      title: "Kontakt — Kostenloses Angebot in Bozen",
      description:
        "Schreiben Sie uns auf WhatsApp für eine kostenlose Besichtigung und ein Angebot in Bozen: Anstriche, Dekorationen, Fassaden und Harze. Italienisch und Deutsch.",
    },
  },
};
