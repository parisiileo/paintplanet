import type { Content } from "./types";

/**
 * PAINT PLANET — Dizionario Italiano.
 * [PLACEHOLDER] segnala dati da confermare col cliente (P.IVA, indirizzo,
 * telefono, numeri statistiche, foto reali).
 */
export const it: Content = {
  site: {
    name: "Paint Planet",
    payoffPrimary: "Diamo colore ai tuoi spazi",
    payoffSecondary: "Imbianchino, pittore e decoratore a Bolzano",
    phone: "+39 3275787264", // [PLACEHOLDER]
    phoneHref: "tel:+393275787264",
    email: "info@paintplanet.bz.it", // [PLACEHOLDER]
    emailHref: "mailto:info@paintplanet.bz.it", // [PLACEHOLDER]
    whatsapp: "+39 327 578 7264",
    whatsappHref: "https://wa.me/393275787264", // [PLACEHOLDER]
    address: "Bolzano — Bozen, Alto Adige", // [PLACEHOLDER indirizzo esatto]
    instagram: "@paint_planett",
    instagramHref: "https://www.instagram.com/paint_planett/",
    vat: "P.IVA 00000000000", // [PLACEHOLDER]
    city: "Bolzano",
    region: "Alto Adige — Südtirol",
  },

  nav: [
    { label: "Servizi", href: "/#servizi" },
    { label: "Chi siamo", href: "/chi-siamo" },
    { label: "Galleria", href: "/galleria" },
    { label: "Contatti", href: "/contatti" },
  ],

  cta: {
    quote: "Chiedi un preventivo",
    call: "Chiama ora",
    discover: "Scopri di più",
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
      slug: "tinteggiature",
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
      slug: "decorazioni",
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
      slug: "facciate",
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
      slug: "resine",
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

  stats: [
    { value: 12, suffix: "+", label: "Anni di esperienza" }, // [PLACEHOLDER]
    { value: 800, suffix: "+", label: "Ambienti trasformati" }, // [PLACEHOLDER]
    { value: 40, suffix: "+", label: "Tonalità a campione" }, // [PLACEHOLDER]
    { value: 100, suffix: "%", label: "Cantieri puliti a fine giornata" },
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
        id: 32,
        title: "Orditura del controsoffitto",
        caption: "Struttura portante e predisposizione degli impianti a soffitto",
        src: "/gallery/controsoffitto-orditura.jpg",
        width: 600,
        height: 450,
        category: "cartongesso",
      },
      {
        id: 33,
        title: "Struttura metallica a soffitto",
        caption: "Profili e pendini allineati prima della posa delle lastre",
        src: "/gallery/controsoffitto-struttura-metallica.jpg",
        width: 600,
        height: 450,
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
    // [PLACEHOLDER] embed generico su Bolzano finché non si conferma l'indirizzo esatto
    mapsEmbed: "https://www.google.com/maps?q=Bolzano%20Bozen&output=embed",
    mapsLink: "https://www.google.com/maps/place/Bolzano",
  },

  footer: {
    ctaLabel: "Pronti a iniziare",
    ctaTitle: "Diamo colore",
    ctaTitleMuted: "al tuo prossimo spazio",
    blurb:
      "Paint Planet — imbianchino, pittore e decoratore a Bolzano. Tinteggiature, decorazioni, facciate e resine con cura artigianale.",
    exploreLabel: "Naviga",
    contactsLabel: "Contatti",
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
        "Pitturazione di pareti e soffitti con colori su misura e finiture pulite. Interni per case, uffici e negozi a Bolzano.",
    },
    decorazioni: {
      title: "Decorazioni e spatolati a Bolzano",
      description:
        "Stucco veneziano, spatolati ed effetti materici realizzati a mano. Superfici d'autore per ambienti unici.",
    },
    facciate: {
      title: "Facciate e cappotto termico a Bolzano",
      description:
        "Tinteggiatura esterni, rasature e isolamento a cappotto per condomìni e case singole in Alto Adige.",
    },
    resine: {
      title: "Resine e microcemento a Bolzano",
      description:
        "Pavimenti e rivestimenti in resina e microcemento: superfici continue e moderne senza fughe.",
    },
    galleria: {
      title: "Galleria lavori",
      description:
        "Una selezione di interni, decorazioni, facciate e resine realizzati da Paint Planet a Bolzano.",
    },
    chiSiamo: {
      title: "Chi siamo",
      description:
        "Paint Planet: imbianchini e decoratori di Bolzano. Cura del dettaglio, materiali certificati e cantieri puliti.",
    },
    contatti: {
      title: "Contatti",
      description:
        "Contatta Paint Planet a Bolzano per un sopralluogo e un preventivo gratuiti per tinteggiature, decorazioni, facciate e resine.",
    },
  },
};
