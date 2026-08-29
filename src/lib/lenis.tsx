"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations/gsap-config";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

/**
 * Smooth scroll globale, sincronizzato con GSAP ScrollTrigger.
 * Attivo SOLO su puntatore fine (mouse/trackpad): vedi nota sotto.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Marca il JS attivo: gli stati iniziali dei reveal si applicano solo ora
    document.documentElement.classList.add("js");

    /*
     * Ricalcolo delle posizioni dei ScrollTrigger dopo che il layout è
     * DEFINITIVO. I trigger dei reveal (header di sezione, ecc.) vengono
     * creati al mount, ma a quel punto:
     *   - i font custom non sono ancora caricati (lo swap sposta il layout);
     *   - l'evento `load` può essere già scattato prima che i trigger
     *     esistano, così l'auto-refresh interno di ScrollTrigger non parte.
     * Va fatto comunque, con o senza Lenis.
     */
    const refresh = () => ScrollTrigger.refresh();
    const refreshRaf = requestAnimationFrame(refresh);
    const timeouts = [setTimeout(refresh, 400), setTimeout(refresh, 1200)];
    window.addEventListener("load", refresh);
    if (document.fonts?.ready) document.fonts.ready.then(refresh).catch(() => {});

    const cleanupCommon = () => {
      cancelAnimationFrame(refreshRaf);
      timeouts.forEach(clearTimeout);
      window.removeEventListener("load", refresh);
    };

    /*
     * Lenis solo su puntatore fine.
     *
     * Con `syncTouch` al default (false) Lenis NON smussa lo scroll touch:
     * su mobile lo scroll resta quello nativo e la libreria non aggiunge
     * nulla. In cambio registra comunque `touchmove` su window come NON
     * passivo (lenis/dist/lenis.mjs: `const listenerOptions = { passive:
     * false }`, applicato incondizionatamente), e un touchmove non passivo
     * impedisce al compositor di avviare lo scroll prima che il JS abbia
     * girato. Costo su ogni gesto, beneficio zero: qui non parte proprio.
     */
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer || prefersReducedMotion()) return cleanupCommon;

    const instance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    instance.on("scroll", ScrollTrigger.update);

    /* Un solo rAF in tutta l'applicazione: Lenis è pilotato dal ticker di
       GSAP invece di tenere un loop proprio in parallelo. */
    const tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    setLenis(instance);

    // Dev tool: espone l'istanza per debug/verifica (innocuo in produzione)
    if (process.env.NODE_ENV !== "production") {
      (window as unknown as { __lenis?: Lenis }).__lenis = instance;
    }

    return () => {
      cleanupCommon();
      gsap.ticker.remove(tick);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
