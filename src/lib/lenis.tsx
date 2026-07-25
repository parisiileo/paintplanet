"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations/gsap-config";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

/**
 * Smooth scroll globale, sincronizzato con GSAP ScrollTrigger.
 * Disattivato se prefers-reduced-motion.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Marca il JS attivo: gli stati iniziali dei reveal si applicano solo ora
    document.documentElement.classList.add("js");

    if (prefersReducedMotion()) return;

    const instance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    instance.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      instance.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };
    rafId.current = requestAnimationFrame(raf);

    // ScrollTrigger deve sapere che lo scroll è gestito da Lenis
    gsap.ticker.lagSmoothing(0);

    setLenis(instance);

    // Dev tool: espone l'istanza per debug/verifica (innocuo in produzione)
    if (process.env.NODE_ENV !== "production") {
      (window as unknown as { __lenis?: Lenis }).__lenis = instance;
    }

    /*
     * Ricalcolo delle posizioni dei ScrollTrigger dopo che il layout è
     * DEFINITIVO. I trigger dei reveal (header di sezione, ecc.) vengono
     * creati al mount, ma a quel punto:
     *   - i font custom non sono ancora caricati (lo swap sposta il layout);
     *   - il preloader può coprire la pagina;
     *   - l'evento `load` può essere già scattato prima che i trigger
     *     esistano, così l'auto-refresh interno di ScrollTrigger non parte.
     * Senza un refresh esplicito le soglie restano calcolate su un layout
     * sbagliato e gli header "in vista" non animano finché non si ricarica
     * la pagina a mano. Rifacciamo il refresh a più riprese per coprire
     * tutti questi casi.
     */
    const refresh = () => ScrollTrigger.refresh();
    const raf1 = requestAnimationFrame(refresh);
    const timeouts = [setTimeout(refresh, 400), setTimeout(refresh, 1200)];
    window.addEventListener("load", refresh);
    window.addEventListener("pp:preloader-done", refresh);
    if (document.fonts?.ready) document.fonts.ready.then(refresh).catch(() => {});

    return () => {
      cancelAnimationFrame(rafId.current);
      cancelAnimationFrame(raf1);
      timeouts.forEach(clearTimeout);
      window.removeEventListener("load", refresh);
      window.removeEventListener("pp:preloader-done", refresh);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
