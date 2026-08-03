import type { Content } from "./types";

/**
 * PAINT PLANET — Dizionario Italiano.
 * Dati identificativi e statistiche allineati alla visura camerale del
 * 21/03/2024 (protocollo 23797/2024). Nessun dato inventato: se un numero
 * non è verificabile, non sta qui.
 */
export const it: Content = {
  site: {
    name: "Paint Planet",
    payoffPrimary: "Diamo colore ai tuoi spazi",
    payoffSecondary: "Imbianchino, pittore e decoratore a Bolzano",
    phone: "+39 327 578 7264",
    phoneHref: "tel:+393275787264",
    // Casella dichiarata al Registro Imprese: è il recapito indicato anche
    // nell'informativa privacy per l'esercizio dei diritti GDPR.
    email: "shahimiklovan@gmail.com",
    emailHref: "mailto:shahimiklovan@gmail.com",
    whatsapp: "+39 327 578 7264",
    whatsappHref: "https://wa.me/393275787264",
    address: "Piazza Giuseppe Mazzini 18/B, 39100 Bolzano (BZ)",
    instagram: "@paint_planett",
    instagramHref: "https://www.instagram.com/paint_planett/",
    city: "Bolzano",
    region: "Alto Adige — Südtirol",
  },

  a11y: {
    skipToContent: "Salta al contenuto principale",
    mainNav: "Navigazione principale",
    mobileNav: "Navigazione mobile",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
  },

  nav: [
    { label: "Servizi", key: "services" },
    { label: "Chi siamo", key: "about" },
    { label: "Galleria", key: "gallery" },
    { label: "Contatti", key: "contact" },
  ],

  cta: {
    quote: "Chiedi un preventivo",
    call: "Chiama ora",
    discover: "Scopri di più",
    whatsapp: "Scrivici su WhatsApp",
  },

  hero: {
    label: "Imbianchino · Decoratore · Bolzano",
    titleLead: "Diamo",
    titleAccent: "colore",
    titleTail: "ai tuoi spazi",
    lead: "Tinteggiature, decorazioni e finiture d'autore per case, uffici e spazi commerciali. Un intero pianeta di colore, steso con mani esperte.",
    ctaServices: "I nostri servizi",
    scroll: "Scorri",
  },

  story: {
    label: "Come lavoriamo",
    steps: [
      {
        num: "01",
        title: "Sopralluogo e colore",
        text: "Veniamo da te, ascoltiamo l'ambiente e studiamo la palette giusta: campionature reali sulle tue pareti, non solo cartelle colori.",
      },
      {
        num: "02",
        title: "Preparazione impeccabile",
        text: "Protezione di mobili e pavimenti, stuccature, carteggiature e fondi: il 70% di un lavoro pulito sta in ciò che non si vede.",
      },
      {
        num: "03",
        title: "Applicazione a regola d'arte",
        text: "Pitture, spatolati e resine stese con la mano giusta. Materiali certificati, tempi rispettati, cantiere ordinato ogni sera.",
      },
      {
        num: "04",
        title: "Il colore prende vita",
        text: "Consegniamo spazi finiti e vivibili da subito. Ti lasciamo la scheda dei colori usati per ogni futuro ritocco.",
      },
    ],
  },

  servicesSection: {
    label: "Servizi",
    title: {
      pre: "Tutto ciò che serve per ",
      highlight: "trasformare",
      post: " uno spazio",
    },
    text: "Dall'appartamento alla facciata condominiale, dalla stanza da rinnovare al locale di design: un unico interlocutore per ogni superficie.",
  },

  services: [
    {
      key: "tinteggiature",
      num: "01",
      title: "Tinteggiature & Pareti",
      short:
        "Pitturazione di interni per case, uffici e negozi con finiture pulite e colori su misura.",
      tone: "cobalt",
      heroTitle: "Tinteggiature d'interni",
      heroText:
        "Pareti e soffitti perfetti, bordi netti e colori calibrati sulla luce dei tuoi ambienti. Pitture traspiranti, lavabili e anti-muffa a seconda della stanza.",
      features: [
        {
          title: "Pitture murali premium",
          text: "Traspiranti, lavabili, super-coprenti: scegliamo il prodotto giusto per ogni ambiente e destinazione d'uso.",
        },
        {
          title: "Colori su misura",
          text: "Tintometria di precisione e campionature reali in loco per trovare la tonalità esatta che hai in mente.",
        },
        {
          title: "Bordi e finiture nette",
          text: "Nastrature, tagli a filo e protezioni impeccabili: cornici, infissi e battiscopa restano puliti.",
        },
        {
          title: "Anti-muffa e risanamento",
          text: "Trattamenti specifici per bagni, cucine e pareti umide, per un risultato sano e duraturo.",
        },
      ],
      process: [
        {
          title: "Sopralluogo",
          text: "Valutiamo superfici, luce e stato delle pareti e ti proponiamo la palette.",
        },
        {
          title: "Preparazione",
          text: "Protezioni, stuccature, carteggiatura e fondo fissante uniformante.",
        },
        {
          title: "Applicazione",
          text: "Due o più mani a rullo e pennello per una copertura uniforme.",
        },
        {
          title: "Consegna pulita",
          text: "Rimozione protezioni, pulizia del cantiere e verifica insieme a te.",
        },
      ],
    },
    {
      key: "decorazioni",
      num: "02",
      title: "Decorazioni & Spatolati",
      short:
        "Spatolati, veneziani, effetti materici e decori d'autore per superfici uniche.",
      tone: "coral",
      heroTitle: "Decorazioni & finiture materiche",
      heroText:
        "Stucchi veneziani, spatolati, effetti sabbia, metallo e cemento. Superfici che diventano protagoniste, realizzate a mano con materiali di pregio.",
      features: [
        {
          title: "Stucco veneziano",
          text: "Lucido o satinato, dalla profondità marmorea, per pareti di forte carattere.",
        },
        {
          title: "Effetti materici",
          text: "Sabbiati, cemento, ossidi e metalli: texture contemporanee su misura del progetto.",
        },
        {
          title: "Decori & pareti d'accento",
          text: "Geometrie, fasce e superfici tono su tono che disegnano l'ambiente.",
        },
        {
          title: "Consulenza di stile",
          text: "Ti affianchiamo nella scelta di effetto, finitura e abbinamenti cromatici.",
        },
      ],
      process: [
        {
          title: "Concept",
          text: "Definiamo effetto, colore e riferimenti visivi insieme a te.",
        },
        {
          title: "Campione",
          text: "Realizziamo un provino reale sulla parete o su pannello dedicato.",
        },
        {
          title: "Stesura a mano",
          text: "Applicazione in più fasi con spatola, frattazzo e tecniche dedicate.",
        },
        {
          title: "Protezione",
          text: "Cere e finiture protettive per resistenza e facilità di pulizia.",
        },
      ],
    },
    {
      key: "facciate",
      num: "03",
      title: "Facciate & Cappotto",
      short:
        "Tinteggiatura esterni, rasature e cappotto termico per condomini e case singole.",
      tone: "sun",
      heroTitle: "Facciate & isolamento a cappotto",
      heroText:
        "Proteggiamo e valorizziamo l'esterno: pitture ai silicati e silossaniche, rasature, e sistemi a cappotto per efficienza energetica e comfort.",
      features: [
        {
          title: "Pitture per esterni",
          text: "Silossaniche e ai silicati, resistenti a intemperie, smog e raggi UV.",
        },
        {
          title: "Cappotto termico",
          text: "Sistemi ETICS a regola d'arte per ridurre le dispersioni e le bollette.",
        },
        {
          title: "Rasature & finiture",
          text: "Rasanti e intonachini colorati per una facciata uniforme e duratura.",
        },
        {
          title: "Ponteggi e sicurezza",
          text: "Cantiere organizzato, in sicurezza e nel rispetto delle tempistiche.",
        },
      ],
      process: [
        {
          title: "Verifica",
          text: "Analisi dello stato della facciata e delle esigenze termiche.",
        },
        {
          title: "Preparazione",
          text: "Pulizia, consolidamento dei fondi e posa dei sistemi.",
        },
        {
          title: "Applicazione",
          text: "Rasature, finiture e tinteggiatura con prodotti per esterni.",
        },
        {
          title: "Collaudo",
          text: "Controllo finale e smontaggio ponteggi in ordine.",
        },
      ],
    },
    {
      key: "resine",
      num: "04",
      title: "Resine & Finiture speciali",
      short:
        "Pavimenti e rivestimenti in resina, microcemento e finiture continue senza fughe.",
      tone: "mint",
      heroTitle: "Resine, microcemento & superfici continue",
      heroText:
        "Pavimenti e pareti in resina e microcemento: superfici continue, moderne e resistenti per bagni, cucine, negozi e loft.",
      features: [
        {
          title: "Pavimenti in resina",
          text: "Superfici continue, impermeabili e facili da pulire, in un'ampia gamma di finiture.",
        },
        {
          title: "Microcemento",
          text: "Effetto materico su pavimenti, pareti e piani, anche in bagno e doccia.",
        },
        {
          title: "Rivestimenti continui",
          text: "Nessuna fuga, look contemporaneo e grande resistenza al calpestio.",
        },
        {
          title: "Applicazione su esistente",
          text: "Spesso posabili sopra piastrelle e superfici esistenti, senza demolizioni.",
        },
      ],
      process: [
        {
          title: "Valutazione",
          text: "Controllo del sottofondo e scelta del ciclo di resina adatto.",
        },
        {
          title: "Preparazione",
          text: "Primer, rasature e correzione delle imperfezioni del fondo.",
        },
        {
          title: "Stesura",
          text: "Applicazione a più strati della resina o del microcemento.",
        },
        {
          title: "Protezione",
          text: "Finitura protettiva trasparente per durata e igiene.",
        },
      ],
    },
  ],

  servicePage: {
    backToServices: "Tutti i servizi",
    includesLabel: "Cosa comprende",
    includesTitle: { pre: "Un servizio ", highlight: "completo", post: "" },
    processLabel: "Il metodo",
    processTitle: "Come lo realizziamo",
    ctaLabel: "Partiamo?",
    ctaTitle: "Raccontaci il tuo spazio",
    ctaText:
      "Un sopralluogo gratuito è il modo migliore per capire cosa serve davvero. Scrivici: ti rispondiamo in fretta.",
  },

  whyUs: {
    label: "Perché Paint Planet",
    title: {
      pre: "Artigiani del colore, ",
      highlight: "non solo imbianchini",
      post: "",
    },
    about:
      "Paint Planet nasce a Bolzano dalla passione per il colore e per le cose fatte bene. Trattiamo ogni casa come se fosse la nostra: puliti, precisi e puntuali.",
    values: [
      "Preventivi chiari",
      "Cantiere pulito",
      "Materiali certificati",
      "Puntualità",
    ],
    strengths: [
      {
        title: "Precisione artigianale",
        text: "Ogni bordo, ogni angolo e ogni finitura curati nel dettaglio, come si faceva una volta.",
      },
      {
        title: "Consulenza sul colore",
        text: "Ti aiutiamo a scegliere tonalità e finiture giuste per luce, stile e utilizzo di ogni ambiente.",
      },
      {
        title: "Ordine e rispetto",
        text: "Proteggiamo mobili e pavimenti e lasciamo il cantiere pulito ogni giorno.",
      },
      {
        title: "Un solo referente",
        text: "Dalla prima idea alla consegna sei seguito da chi conosce davvero il tuo progetto.",
      },
    ],
  },

  /* Ogni numero è verificabile: galleria, visura camerale, modo di lavorare.
     Niente "anni di esperienza" o "ambienti trasformati" inventati. */
  stats: [
    { value: 0, suffix: "", label: "Lavori nella nostra galleria", from: "galleryCount" },
    { value: 3, suffix: "", label: "Lavorazioni artigiane iscritte a registro" },
    { value: 2, suffix: "", label: "Lingue in cantiere: italiano e tedesco" },
    { value: 0, suffix: "€", label: "Sopralluogo e preventivo" },
  ],

  contactStrip: {
    label: "Iniziamo",
    title: {
      pre: "Un'idea di colore in mente? ",
      highlight: "Diamole vita",
      post: "",
    },
    text: "Sopralluogo e preventivo gratuiti in tutta Bolzano e dintorni.",
    labels: { phone: "Telefono", email: "Email", address: "Zona" },
  },

  about: {
    heroLabel: "Chi siamo",
    heroTitle: "Il colore è il nostro mestiere",
    story: [
      "Paint Planet è la realtà di imbianchini e decoratori di Bolzano che mette il colore al centro di ogni progetto. Nasce dal lavoro artigianale e dall'attenzione al dettaglio, con l'idea che una parete ben fatta cambi il modo di vivere uno spazio.",
      "Lavoriamo per privati, condomìni, uffici e attività commerciali in tutto l'Alto Adige. Tinteggiature, decorazioni, facciate e resine: un'unica squadra per ogni superficie, dentro e fuori casa.",
      "Crediamo nei preventivi chiari, nei materiali certificati e nel rispetto dei tuoi spazi e dei tuoi tempi. Perché un buon lavoro si vede — e si vive — ogni giorno.",
    ],
    whereLabel: "Dove operiamo",
    whereTitle: "Bolzano e tutto l'Alto Adige",
    whereText:
      "Con base a Bolzano seguiamo cantieri in città e nei comuni vicini della provincia. Contattaci per verificare la copertura della tua zona.",
    valuesLabel: "I nostri valori",
    valuesTitle: "Come lavoriamo",
    values: [
      {
        title: "Cura del dettaglio",
        text: "La differenza tra un lavoro discreto e uno impeccabile sta nei bordi, negli angoli e nei tempi di asciugatura.",
      },
      {
        title: "Materiali giusti",
        text: "Solo prodotti certificati e adatti alla destinazione: interno, esterno, ambienti umidi, superfici tecniche.",
      },
      {
        title: "Trasparenza",
        text: "Preventivi dettagliati, senza sorprese, e comunicazione costante durante il lavoro.",
      },
      {
        title: "Rispetto",
        text: "Dei tuoi spazi, dei tuoi tempi e dell'ambiente: cantiere ordinato e pulizia finale sempre incluse.",
      },
    ],
  },

  gallery: {
    heroLabel: "Galleria",
    heroTitle: { pre: "I nostri ", highlight: "lavori", post: "" },
    heroText:
      "Appartamenti, camere, bagni, corridoi e terrazze: ambienti reali finiti da noi, tra decorativi, resine, cartongesso e tinteggiature.",
    countLabel: "lavori realizzati",
    filterAll: "Tutti",
    filtersLabel: "Filtra i lavori per lavorazione",
    thumbsLabel: "Miniature dei lavori",
    categories: {
      tinteggiature: "Tinteggiature",
      decorazioni: "Decorazioni",
      cartongesso: "Cartongesso",
      resine: "Resine",
      facciate: "Facciate",
      azienda: "Azienda",
    },
    items: [
      {
        id: 1,
        title: "Bagno in microcemento",
        caption: "Microcemento tortora su pareti, vasca e pavimento in continuità",
        src: "/gallery/bagno-microcemento.jpg",
        width: 1200,
        height: 1600,
        category: "resine",
      },
      {
        id: 2,
        title: "Parete effetto marmo con camino",
        caption: "Finitura marmorizzata su parete e rivestimento del camino",
        src: "/gallery/parete-marmorizzata-camino.png",
        width: 915,
        height: 512,
        category: "decorazioni",
      },
      {
        id: 3,
        title: "Parete in pietra ricostruita",
        caption: "Rivestimento in pietra con velo di luce radente da cartongesso",
        src: "/gallery/parete-pietra-ricostruita.jpg",
        width: 460,
        height: 1024,
        category: "decorazioni",
      },
      {
        id: 4,
        title: "Parete TV in spatolato",
        caption: "Spatolato grigio perla nella zona living con mobile a sospensione",
        src: "/gallery/soggiorno-parete-tv.png",
        width: 805,
        height: 413,
        category: "decorazioni",
      },
      {
        id: 5,
        title: "Corridoio con faretti",
        caption: "Tinteggiatura tono su tono e controsoffitto con faretti incassati",
        src: "/gallery/corridoio-faretti.jpg",
        width: 1536,
        height: 2048,
        category: "tinteggiature",
      },
      {
        id: 6,
        title: "Camera con parete decorativa",
        caption: "Decorativo effetto marmo dietro la testata e velette in cartongesso",
        src: "/gallery/camera-effetto-marmo.jpg",
        width: 2048,
        height: 1380,
        category: "decorazioni",
      },
      {
        id: 7,
        title: "Cucina con controsoffitto luminoso",
        caption: "Cartongesso su misura con luce a scomparsa sopra il piano cottura",
        src: "/gallery/cucina-controsoffitto.jpg",
        width: 1600,
        height: 594,
        category: "cartongesso",
      },
      {
        id: 8,
        title: "Terrazza e finiture esterne",
        caption: "Finitura esterna bianca, opere di completamento e pavimento in gres",
        src: "/gallery/terrazza-esterno.jpg",
        width: 1536,
        height: 2048,
        category: "facciate",
      },
      {
        id: 9,
        title: "Camera con parquet",
        caption: "Bianco caldo su pareti e soffitto, raccordi e finiture pulite",
        src: "/gallery/camera-parquet.jpg",
        width: 1200,
        height: 1600,
        category: "tinteggiature",
      },
      {
        id: 10,
        title: "Soggiorno in spatolato grigio",
        caption: "Spatolato materico grigio antracite su due pareti, soffitto bianco opaco",
        src: "/gallery/soggiorno-spatolato-grigio.jpg",
        width: 1600,
        height: 900,
        category: "decorazioni",
      },
      {
        id: 11,
        title: "Corridoio tinteggiato in beige",
        caption: "Ingresso e disimpegno tono su tono, spigoli e raccordi rifiniti a mano",
        src: "/gallery/corridoio-tinteggiato-beige.jpg",
        width: 1536,
        height: 2048,
        category: "tinteggiature",
      },
      {
        id: 12,
        title: "Corridoio con velette e parete verde",
        caption: "Controsoffitto con faretti incassati e parete d'accento verde salvia",
        src: "/gallery/corridoio-controsoffitto-parete-verde.jpg",
        width: 1200,
        height: 1600,
        category: "cartongesso",
      },
      {
        id: 13,
        title: "Soggiorno con veletta in cartongesso",
        caption: "Setto e veletta su misura con luce indiretta, finitura bianca",
        src: "/gallery/soggiorno-veletta-cartongesso.jpg",
        width: 1536,
        height: 2048,
        category: "cartongesso",
      },
      {
        id: 14,
        title: "Parete TV con nicchie e LED",
        caption: "Cartongesso su misura con nicchie, camino lineare e luce a pavimento",
        src: "/gallery/parete-tv-nicchie-led.jpg",
        width: 700,
        height: 981,
        category: "cartongesso",
      },
      {
        id: 15,
        title: "Controsoffitto in fase di stuccatura",
        caption: "Nastratura e stuccatura delle giunzioni prima della finitura",
        src: "/gallery/controsoffitto-stuccatura.jpg",
        width: 1200,
        height: 1600,
        category: "cartongesso",
      },
      {
        id: 16,
        title: "Soggiorno tinteggiato in tortora",
        caption: "Pareti tortora e soffitto bianco con faretti, cantiere protetto",
        src: "/gallery/soggiorno-tortora.jpg",
        width: 1536,
        height: 2048,
        category: "tinteggiature",
      },
      {
        id: 17,
        title: "Parete verde smeraldo",
        caption: "Applicazione a rullo di una parete d'accento in verde profondo",
        src: "/gallery/parete-verde-smeraldo.jpg",
        width: 1200,
        height: 1600,
        category: "tinteggiature",
      },
      {
        id: 18,
        title: "Cameretta con soffitto rosa",
        caption: "Soffitto rosa cipria e pareti bianche per una camera su misura",
        src: "/gallery/cameretta-soffitto-rosa.jpg",
        width: 1536,
        height: 2048,
        category: "tinteggiature",
      },
      {
        id: 19,
        title: "Soffitto rosa in mansarda",
        caption: "Mascheratura completa e stesura del colore sul soffitto sottotetto",
        src: "/gallery/mansarda-soffitto-rosa.jpg",
        width: 1200,
        height: 1600,
        category: "tinteggiature",
      },
      {
        id: 20,
        title: "Decoro artistico su parete",
        caption: "Fondo materico con silhouette e pioggia di lettere dipinte a mano",
        src: "/gallery/decoro-artistico-silhouette.jpg",
        width: 1200,
        height: 1600,
        category: "decorazioni",
      },
      {
        id: 21,
        title: "Bagno con carta da parati tropicale",
        caption: "Posa di carta da parati a tema jungle su parete di fondo",
        src: "/gallery/bagno-carta-parati-tropicale.jpg",
        width: 1200,
        height: 1600,
        category: "decorazioni",
      },
      {
        id: 22,
        title: "Camino effetto marmo argento",
        caption: "Finitura marmorizzata con venature argento su cappa e base",
        src: "/gallery/camino-effetto-marmo-argento.jpg",
        width: 902,
        height: 1600,
        category: "decorazioni",
      },
      {
        id: 23,
        title: "Cucina con parete gialla",
        caption: "Decorativo giallo ocra a tutta altezza con luce LED sotto pensile",
        src: "/gallery/cucina-parete-gialla.jpg",
        width: 1200,
        height: 1600,
        category: "decorazioni",
      },
      {
        id: 24,
        title: "Scala con cornici decorative",
        caption: "Boiserie in cornici sagomate lungo la rampa, faretti sul pianerottolo",
        src: "/gallery/scala-boiserie-cornici.jpg",
        width: 458,
        height: 458,
        category: "decorazioni",
      },
      {
        id: 25,
        title: "Bagno in mansarda con microcemento",
        caption: "Microcemento tortora su pavimento, vasca e pareti sottotetto",
        src: "/gallery/bagno-mansarda-microcemento.jpg",
        width: 1200,
        height: 1600,
        category: "resine",
      },
      {
        id: 26,
        title: "Pavimento in resina blu",
        caption: "Resina continua stesa sopra il vecchio pavimento, senza demolizioni",
        src: "/gallery/resina-pavimento-blu.jpg",
        width: 1200,
        height: 1600,
        category: "resine",
      },
      {
        id: 27,
        title: "Resina blu — stesura a rullo",
        caption: "Seconda mano a rullo per una superficie uniforme e antiscivolo",
        src: "/gallery/resina-pavimento-blu-dettaglio.jpg",
        width: 1200,
        height: 1600,
        category: "resine",
      },
      {
        id: 28,
        title: "Rasatura di frontalini esterni",
        caption: "Lavorazione da piattaforma aerea su balconi e frontalini",
        src: "/gallery/facciata-rasatura-piattaforma.jpg",
        width: 1536,
        height: 2048,
        category: "facciate",
      },
      {
        id: 29,
        title: "Parete in cartongesso con isolante",
        caption: "Orditura metallica e lana minerale prima della chiusura delle lastre",
        src: "/gallery/cartongesso-isolamento-lana-roccia.jpg",
        width: 1000,
        height: 750,
        category: "cartongesso",
      },
      {
        id: 30,
        title: "Contropareti in cartongesso",
        caption: "Struttura a montanti per contropareti divisorie in ambiente commerciale",
        src: "/gallery/parete-cartongesso-struttura.jpg",
        width: 745,
        height: 559,
        category: "cartongesso",
      },
      {
        id: 31,
        title: "Parete divisoria coibentata",
        caption: "Riempimento in lana minerale per isolamento termico e acustico",
        src: "/gallery/parete-cartongesso-isolante.jpg",
        width: 750,
        height: 500,
        category: "cartongesso",
      },
      {
        id: 34,
        title: "I mezzi Paint Planet",
        caption: "La nostra flotta: sempre pronti a raggiungere il cantiere",
        src: "/gallery/mezzi-paint-planet.jpg",
        width: 1600,
        height: 1200,
        category: "azienda",
      },
    ],
    open: "Apri",
    close: "Chiudi",
    prev: "Precedente",
    next: "Successivo",
    dragHint: "Trascina per scorrere",
  },

  contact: {
    heroLabel: "Contatti",
    heroTitle: "Parliamo del tuo progetto",
    heroText:
      "Raccontaci cosa hai in mente: stanza, facciata, decorazione o resina. Ti ricontattiamo per un sopralluogo e un preventivo gratuiti.",
    dataLabel: "I nostri riferimenti",
    whatsapp: {
      title: "Scrivici su WhatsApp",
      text: "Il modo più rapido per raccontarci il tuo progetto. Mandaci un messaggio con qualche dettaglio: ti rispondiamo in fretta e fissiamo un sopralluogo gratuito.",
      cta: "Scrivici su WhatsApp",
      note: "Preferisci telefono o email? Trovi tutti i riferimenti qui accanto.",
      prefill:
        "Ciao Paint Planet! Vorrei un preventivo per il mio progetto. Ecco qualche dettaglio:",
    },
    mapsEmbed:
      "https://www.google.com/maps?q=Piazza%20Giuseppe%20Mazzini%2018%2FB%2C%2039100%20Bolzano%20BZ&output=embed",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Piazza%20Giuseppe%20Mazzini%2018%2FB%2C%2039100%20Bolzano%20BZ",
  },

  footer: {
    ctaLabel: "Pronti a iniziare",
    ctaTitle: "Diamo colore",
    ctaTitleMuted: "al tuo prossimo spazio",
    blurb:
      "Paint Planet — imbianchino, pittore e decoratore a Bolzano. Tinteggiature, decorazioni, facciate e resine con cura artigianale.",
    exploreLabel: "Naviga",
    contactsLabel: "Contatti",
    legalLabel: "Informazioni legali",
  },

  /* Dati identificativi obbligatori. Impresa individuale: il titolare
     persona fisica è anche titolare del trattamento ai sensi del GDPR.
     Resta da inserire la sola P.IVA. */
  company: {
    legalName: "Shahi Miklovan",
    tradeName: "Paint Planet di Shahi Miklovan",
    registeredOffice: "Piazza Giuseppe Mazzini 18/B, 39100 Bolzano (BZ)",
    vat: "03249430210",
    vatLabel: "P.IVA",
    taxCode: "SHHMLV97L09Z100W",
    rea: "BZ - 244388 (CCIAA di Bolzano)",
    artisanRegistry:
      "Iscritta al Registro Imprese di Bolzano dal 21/03/2024, sezione speciale, con la qualifica di impresa artigiana",
    pec: "shahi.miklovan@pec.it",
    dataController: "Shahi Miklovan",
  },

  openingHours: {
    label: "Orari",
    days: "Lunedì — Sabato",
    hours: "8:00 – 12:00 · 13:00 – 19:00",
    closed: "Domenica chiuso",
  },

  consent: {
    title: "Cookie e servizi esterni",
    text: "Usiamo solo cookie tecnici, necessari al funzionamento del sito (ad esempio per ricordare la lingua scelta). Nella pagina Contatti è presente una mappa di Google: se la carichi, Google può impostare cookie propri e ricevere il tuo indirizzo IP. Puoi decidere tu.",
    acceptAll: "Accetta tutto",
    necessaryOnly: "Solo necessari",
    policyLink: "Cookie policy",
    mapTitle: "Mappa di Google",
    mapText: "Caricando la mappa accetti che Google riceva il tuo indirizzo IP e possa impostare cookie sul tuo dispositivo.",
    mapLoad: "Carica la mappa",
    mapOpenExternal: "Apri su Google Maps",
  },

  legal: {
    updated: "2 agosto 2026",
    updatedLabel: "Ultimo aggiornamento",

    privacy: {
      key: "privacy",
      title: "Informativa sulla privacy",
      intro:
        "Questa informativa descrive come Paint Planet tratta i dati personali di chi visita questo sito, ai sensi degli articoli 13 e 14 del Regolamento (UE) 2016/679 (GDPR).",
      sections: [
        {
          title: "Titolare del trattamento",
          body: [
            "Il titolare del trattamento è {{legalName}}, impresa individuale che opera con l'insegna «{{tradeName}}», con sede in {{registeredOffice}}, {{vatLabel}} {{vat}}, codice fiscale {{taxCode}}.",
            "Non è stato nominato un Responsabile della protezione dei dati (DPO): non ricorrono i casi previsti dall'art. 37 del GDPR.",
            "Per qualsiasi richiesta relativa ai tuoi dati puoi scrivere a {{email}} oppure alla PEC {{pec}}.",
          ],
        },
        {
          title: "Quali dati raccogliamo",
          body: [
            "Questo sito non ha moduli di contatto, aree riservate né sistemi di pagamento: non ti chiediamo di inserire dati. I trattamenti che avvengono sono i seguenti.",
            "- Dati di navigazione: il server che ospita il sito registra automaticamente indirizzo IP, data e ora della richiesta, pagina richiesta, tipo di browser e sistema operativo. Sono dati tecnici necessari a erogare il sito e a garantirne la sicurezza.",
            "- Preferenza di lingua: un cookie tecnico ricorda se hai scelto italiano o tedesco.",
            "- Scelta sui cookie: un cookie tecnico ricorda la tua risposta al banner, così non te lo riproponiamo a ogni visita.",
            "- Contatti diretti: se ci scrivi via e-mail o WhatsApp, trattiamo i dati che ci fornisci spontaneamente in quel messaggio (nome, recapito, contenuto della richiesta).",
          ],
        },
        {
          title: "Perché li trattiamo e su quale base",
          body: [
            "- Erogare il sito e garantirne la sicurezza — legittimo interesse del titolare (art. 6.1.f GDPR).",
            "- Ricordare lingua e scelta sui cookie — legittimo interesse; sono cookie tecnici, per i quali non è richiesto il consenso.",
            "- Rispondere alle tue richieste di preventivo o informazioni — esecuzione di misure precontrattuali su tua richiesta (art. 6.1.b GDPR).",
            "- Caricare la mappa di Google — tuo consenso, che puoi dare o negare liberamente e revocare in ogni momento (art. 6.1.a GDPR).",
          ],
        },
        {
          title: "A chi comunichiamo i dati",
          body: [
            "Non vendiamo né cediamo i tuoi dati. Possono accedervi, come responsabili del trattamento o titolari autonomi, solo i fornitori tecnici necessari al funzionamento del sito:",
            "- Vercel Inc. — hosting e distribuzione del sito.",
            "- Google Ireland Ltd. — solo se scegli di caricare la mappa nella pagina Contatti.",
            "- Il tuo provider di posta o WhatsApp (Meta Platforms Ireland Ltd.), se ci contatti tramite questi canali.",
            "Alcuni di questi fornitori possono trattare dati fuori dallo Spazio Economico Europeo. In tal caso il trasferimento avviene sulla base delle Clausole Contrattuali Standard approvate dalla Commissione Europea o di una decisione di adeguatezza.",
          ],
        },
        {
          title: "Per quanto tempo li conserviamo",
          body: [
            "- Log del server: per il tempo tecnico necessario alla sicurezza, di norma non oltre 12 mesi.",
            "- Cookie tecnici: fino a 12 mesi, o finché non li cancelli dal browser.",
            "- Comunicazioni ricevute via e-mail o WhatsApp: per il tempo necessario a gestire la richiesta e, se ne nasce un rapporto commerciale, per i termini di legge in materia fiscale e civilistica.",
          ],
        },
        {
          title: "I tuoi diritti",
          body: [
            "Puoi in ogni momento chiedere l'accesso ai tuoi dati, la loro rettifica o cancellazione, la limitazione del trattamento, la portabilità, e opporti al trattamento fondato sul legittimo interesse (artt. 15-22 GDPR). Se hai dato un consenso, puoi revocarlo in qualsiasi momento senza che ciò pregiudichi la liceità del trattamento avvenuto prima della revoca.",
            "Per esercitare questi diritti scrivi a {{email}}. Se ritieni che il trattamento violi il GDPR puoi proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).",
          ],
        },
        {
          title: "Minori",
          body: [
            "Questo sito si rivolge a un pubblico adulto e non raccoglie consapevolmente dati di minori di 14 anni.",
          ],
        },
      ],
      meta: {
        title: "Informativa sulla privacy",
        description:
          "Come Paint Planet tratta i dati personali di chi visita il sito: finalità, basi giuridiche, conservazione e diritti dell'interessato.",
      },
    },

    cookie: {
      key: "cookie",
      title: "Cookie policy",
      intro:
        "Questa pagina spiega quali cookie usa il sito di Paint Planet e come gestire le tue preferenze. I cookie sono piccoli file di testo che i siti salvano sul tuo dispositivo.",
      sections: [
        {
          title: "Cookie tecnici (sempre attivi)",
          body: [
            "Servono al funzionamento del sito. Ai sensi dell'art. 122 del Codice Privacy non richiedono il tuo consenso, ma te ne diamo comunque conto.",
            "- pp-locale — ricorda la lingua scelta (italiano o tedesco) per non riproporti il rilevamento automatico a ogni visita. Durata: 12 mesi.",
            "- pp-consent — ricorda la tua risposta al banner cookie. Durata: 12 mesi.",
          ],
        },
        {
          title: "Cookie di terze parti (solo con il tuo consenso)",
          body: [
            "Nella pagina Contatti è presente una mappa fornita da Google. La mappa non viene caricata finché non lo autorizzi: fino a quel momento Google non riceve alcun dato da questo sito.",
            "- Google Maps (Google Ireland Ltd.) — se carichi la mappa, Google riceve il tuo indirizzo IP e può impostare cookie propri, anche di profilazione. Informativa: policies.google.com/privacy",
            "Puoi consultare la mappa anche senza caricarla nel sito, aprendo Google Maps direttamente dal link che trovi accanto al riquadro.",
          ],
        },
        {
          title: "Cosa NON usiamo",
          body: [
            "Questo sito non utilizza cookie analitici, cookie di profilazione pubblicitaria, pixel di tracciamento dei social network né strumenti di statistica di terze parti. I caratteri tipografici sono ospitati direttamente sul nostro server: non vengono effettuate chiamate a Google Fonts o ad altri CDN esterni.",
          ],
        },
        {
          title: "Come gestire le preferenze",
          body: [
            "Puoi modificare in ogni momento la scelta fatta nel banner usando il pulsante qui sotto. Puoi inoltre bloccare o cancellare i cookie dalle impostazioni del tuo browser: la procedura è documentata nelle guide di Chrome, Firefox, Safari ed Edge. La disattivazione dei cookie tecnici può compromettere alcune funzioni del sito, come la memoria della lingua.",
          ],
        },
      ],
      meta: {
        title: "Cookie policy",
        description:
          "Quali cookie usa il sito di Paint Planet, a cosa servono e come gestire il consenso per i servizi di terze parti.",
      },
    },

    terms: {
      key: "terms",
      title: "Note legali",
      intro:
        "Informazioni sulla titolarità di questo sito e sulle condizioni d'uso dei suoi contenuti.",
      sections: [
        {
          title: "Dati identificativi",
          body: [
            "Ai sensi dell'art. 7 del D.lgs. 70/2003:",
            "- Denominazione: {{legalName}}",
            "- Insegna: {{tradeName}}",
            "- Forma giuridica: impresa individuale",
            "- Titolare: {{dataController}}",
            "- Sede: {{registeredOffice}}",
            "- Partita IVA: {{vat}}",
            "- Codice fiscale e n. iscr. Registro Imprese: {{taxCode}}",
            "- Numero REA: {{rea}}",
            "- {{artisanRegistry}}",
            "- Attività: pittore e verniciatore; intonacatore; stuccatore",
            "- E-mail: {{email}}",
            "- PEC: {{pec}}",
            "- Telefono: {{phone}}",
          ],
        },
        {
          title: "Contenuti del sito",
          body: [
            "Le informazioni pubblicate hanno finalità descrittiva e promozionale dei servizi offerti. Non costituiscono un'offerta al pubblico ai sensi dell'art. 1336 del Codice Civile: ogni lavorazione viene quotata solo dopo sopralluogo, con preventivo scritto.",
            "Curiamo l'accuratezza dei contenuti, ma non garantiamo che siano sempre completi e aggiornati. Ci riserviamo di modificarli in qualsiasi momento senza preavviso.",
          ],
        },
        {
          title: "Proprietà intellettuale",
          body: [
            "Testi, fotografie, marchi, grafica e codice di questo sito sono di proprietà di {{legalName}} o utilizzati con licenza. Le fotografie ritraggono lavori effettivamente realizzati. È vietata la riproduzione, anche parziale, senza autorizzazione scritta.",
          ],
        },
        {
          title: "Collegamenti a siti esterni",
          body: [
            "Il sito contiene collegamenti a servizi di terzi (Instagram, WhatsApp, Google Maps). Non abbiamo controllo sui loro contenuti e sulle loro politiche di trattamento dei dati e non rispondiamo di essi.",
          ],
        },
        {
          title: "Legge applicabile",
          body: [
            "Il rapporto è regolato dalla legge italiana. Per le controversie con consumatori resta ferma la competenza del foro di residenza o domicilio del consumatore, se ubicato in Italia.",
          ],
        },
      ],
      meta: {
        title: "Note legali",
        description:
          "Dati identificativi di Paint Planet, condizioni d'uso dei contenuti del sito e proprietà intellettuale.",
      },
    },
  },

  preloaderTagline: "Diamo colore ai tuoi spazi",

  meta: {
    home: {
      title: "Paint Planet — Imbianchino e Decoratore a Bolzano",
      description:
        "Tinteggiature, decorazioni, facciate e resine a Bolzano. Paint Planet: artigiani del colore per case, uffici e spazi commerciali. Preventivo gratuito.",
    },
    tinteggiature: {
      title: "Tinteggiature d'interni a Bolzano",
      description:
        "Pitturazione di pareti e soffitti a Bolzano con colori su misura e finiture pulite: case, uffici e negozi. Sopralluogo e preventivo gratuiti.",
    },
    decorazioni: {
      title: "Decorazioni e spatolati a Bolzano",
      description:
        "Stucco veneziano, spatolati ed effetti materici stesi a mano a Bolzano. Superfici d'autore per ambienti unici, con campionature reali sulle tue pareti.",
    },
    facciate: {
      title: "Facciate e cappotto termico a Bolzano",
      description:
        "Tinteggiatura esterni, rasature e cappotto termico per condomìni e case singole a Bolzano e in Alto Adige. Ponteggi e sicurezza inclusi nel preventivo.",
    },
    resine: {
      title: "Resine e microcemento a Bolzano",
      description:
        "Pavimenti e rivestimenti in resina e microcemento a Bolzano: superfici continue senza fughe, applicabili anche sopra il pavimento esistente.",
    },
    galleria: {
      // La località va nel titolo anche qui: è la query che porta clienti.
      title: "Galleria lavori a Bolzano",
      description:
        "Foto di lavori reali: tinteggiature, decorazioni, resine, cartongesso e facciate realizzati da Paint Planet a Bolzano e in Alto Adige.",
    },
    chiSiamo: {
      title: "Chi siamo — Imbianchini a Bolzano",
      description:
        "Paint Planet è l'impresa artigiana di Shahi Miklovan a Bolzano: pittore, verniciatore e stuccatore. Cura del dettaglio e cantieri puliti.",
    },
    contatti: {
      title: "Contatti — Preventivo gratuito a Bolzano",
      description:
        "Scrivici su WhatsApp per un sopralluogo e un preventivo gratuiti a Bolzano: tinteggiature, decorazioni, facciate e resine. Si parla italiano e tedesco.",
    },
  },
};
