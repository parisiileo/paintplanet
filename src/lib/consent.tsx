"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

/**
 * Consenso cookie — implementazione minima e volutamente senza CMP esterna.
 *
 * Il sito usa SOLO cookie tecnici (lingua + questa scelta), che per l'art. 122
 * del Codice Privacy non richiedono consenso. L'unico trattamento che lo
 * richiede è la mappa di Google nella pagina Contatti, che è quindi caricata
 * in "click-to-load": finché l'utente non acconsente, verso Google non parte
 * nessuna richiesta.
 *
 * Stato persistito in localStorage (non in un cookie inviato al server: non
 * serve al rendering e così non appesantisce ogni richiesta).
 */

export type ConsentValue = "all" | "necessary";

const KEY = "pp-consent";

type ConsentState = {
  /** null = scelta non ancora effettuata → il banner è visibile */
  consent: ConsentValue | null;
  /** true finché non abbiamo letto localStorage (evita flash del banner) */
  ready: boolean;
  setConsent: (value: ConsentValue) => void;
  /** Riapre il banner: usato dal pulsante nella cookie policy */
  reopen: () => void;
};

const ConsentContext = createContext<ConsentState>({
  consent: null,
  ready: false,
  setConsent: () => {},
  reopen: () => {},
});

export function useConsent() {
  return useContext(ConsentContext);
}

function read(): ConsentValue | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw === "all" || raw === "necessary" ? raw : null;
  } catch {
    // Safari in navigazione privata può lanciare: trattiamo come "non scelto".
    return null;
  }
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<ConsentValue | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsentState(read());
    setReady(true);
  }, []);

  const setConsent = useCallback((value: ConsentValue) => {
    setConsentState(value);
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* storage non disponibile: la scelta vale per la sessione corrente */
    }
  }, []);

  const reopen = useCallback(() => {
    setConsentState(null);
    try {
      localStorage.removeItem(KEY);
    } catch {
      /* no-op */
    }
  }, []);

  return (
    <ConsentContext.Provider value={{ consent, ready, setConsent, reopen }}>
      {children}
    </ConsentContext.Provider>
  );
}
