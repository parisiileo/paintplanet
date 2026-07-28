import type { Content } from "./types";

/**
 * PAINT PLANET — Wörterbuch Deutsch.
 * [PLACEHOLDER] markiert Daten, die mit dem Kunden zu bestätigen sind.
 */
export const de: Content = {
  site: {
    name: "Paint Planet",
    payoffPrimary: "Wir bringen Farbe in Ihre Räume",
    payoffSecondary: "Maler, Anstreicher und Dekorateur in Bozen",
    phone: "+39 327 578 7264",
    phoneHref: "tel:+393275787264",
    email: "info@paintplanet.bz.it", // [PLACEHOLDER]
    emailHref: "mailto:info@paintplanet.bz.it", // [PLACEHOLDER]
    whatsapp: "+39 327 578 7264",
    whatsappHref: "https://wa.me/393275787264", // [PLACEHOLDER]
    address: "Bozen — Bolzano, Südtirol", // [PLACEHOLDER genaue Adresse]
    instagram: "@paint_planett",
    instagramHref: "https://www.instagram.com/paint_planett/",
    vat: "MwSt.-Nr. 00000000000", // [PLACEHOLDER]
    city: "Bozen",
    region: "Südtirol — Alto Adige",
  },

  nav: [
    { label: "Leistungen", href: "/#servizi" },
    { label: "Über uns", href: "/chi-siamo" },
    { label: "Galerie", href: "/galleria" },
    { label: "Kontakt", href: "/contatti" },
  ],

  cta: {
    quote: "Angebot anfragen",
    call: "Jetzt anrufen",
    discover: "Mehr erfahren",
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
      slug: "tinteggiature",
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
      slug: "decorazioni",
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
      slug: "facciate",
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
      slug: "resine",
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

  stats: [
    { value: 12, suffix: "+", label: "Jahre Erfahrung" }, // [PLACEHOLDER]
    { value: 800, suffix: "+", label: "Verwandelte Räume" }, // [PLACEHOLDER]
    { value: 40, suffix: "+", label: "Farbtöne als Muster" }, // [PLACEHOLDER]
    { value: 100, suffix: "%", label: "Am Tagesende saubere Baustellen" },
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
    mapsEmbed: "https://www.google.com/maps?q=Bozen%20Bolzano&output=embed",
    mapsLink: "https://www.google.com/maps/place/Bozen",
  },

  footer: {
    ctaLabel: "Bereit zu starten",
    ctaTitle: "Wir bringen Farbe",
    ctaTitleMuted: "in Ihren nächsten Raum",
    blurb:
      "Paint Planet — Maler und Dekorateur in Bozen. Anstriche, Dekorationen, Fassaden und Harze mit handwerklicher Sorgfalt.",
    exploreLabel: "Navigation",
    contactsLabel: "Kontakt",
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
        "Anstrich von Wänden und Decken mit massgeschneiderten Farben und sauberen Oberflächen. Innenräume in Bozen.",
    },
    decorazioni: {
      title: "Dekoration und Spachteltechnik in Bozen",
      description:
        "Stucco Veneziano, Spachteltechniken und Materialeffekte von Hand. Oberflächen für einzigartige Räume.",
    },
    facciate: {
      title: "Fassaden und Wärmedämmung in Bozen",
      description:
        "Aussenanstriche, Verputz und Wärmedämmverbund für Kondominien und Einfamilienhäuser in Südtirol.",
    },
    resine: {
      title: "Harze und Mikrozement in Bozen",
      description:
        "Böden und Beläge aus Harz und Mikrozement: durchgehende, moderne, fugenlose Oberflächen.",
    },
    galleria: {
      title: "Arbeitsgalerie",
      description:
        "Eine Auswahl von Innenräumen, Dekorationen, Fassaden und Harzen von Paint Planet in Bozen.",
    },
    chiSiamo: {
      title: "Über uns",
      description:
        "Paint Planet: Maler und Dekorateure aus Bozen. Liebe zum Detail, zertifizierte Materialien und saubere Baustellen.",
    },
    contatti: {
      title: "Kontakt",
      description:
        "Kontaktieren Sie Paint Planet in Bozen für eine kostenlose Besichtigung und ein Angebot für Anstriche, Dekorationen, Fassaden und Harze.",
    },
  },
};
