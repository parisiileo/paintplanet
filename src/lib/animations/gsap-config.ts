"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Registrazione centralizzata dei plugin GSAP.
 * Importare gsap SOLO da qui nei componenti client.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "power3.out", duration: 1 });

  /* Su mobile la barra dell'indirizzo si nasconde e riappare a ogni cambio
     di direzione dello scroll: ognuna di quelle oscillazioni emette un
     `resize` e ScrollTrigger risponde con un refreshAll() completo. Misurati
     70 ricalcoli di stile (68,6 ms a 4x CPU) per una singola oscillazione.
     Con questo flag ignora i resize di sola altezza sotto il 25% del
     viewport, che è esattamente il caso della barra URL. */
  ScrollTrigger.config({ ignoreMobileResize: true });
}

/** True se l'utente preferisce ridurre il movimento. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger };
