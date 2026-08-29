"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./gsap-config";

/**
 * Le cleanup GSAP DEVONO girare in un layout effect: le cleanup di
 * useEffect (passive) girano DOPO la rimozione del DOM, e con
 * ScrollTrigger `pin` (che ri-parenta i nodi in un pin-spacer) React
 * crasherebbe con NotFoundError su removeChild al cambio pagina.
 */
export const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Su mobile i reveal sono disattivati del tutto.
 *
 * Motivo: `html.js [data-reveal] { opacity: 0 }` nasconde il contenuto finché
 * GSAP non è idratato, e l'idratazione su mobile finiva a ~4 s. Chi scrolla
 * prima trovava sezioni vuote. In più durata 1,1 s e stagger 0,1 s per figlio
 * significavano che un contenitore da 8 elementi finiva di comparire dopo 1,7 s,
 * mentre il dito è già due sezioni più giù. Su desktop l'effetto resta.
 */
function skipReveal(): boolean {
  return (
    prefersReducedMotion() ||
    window.matchMedia("(max-width: 860px), (pointer: coarse)").matches
  );
}

/**
 * Reveal on-scroll di un elemento (fade + rise).
 * Usare insieme all'attributo data-reveal sull'elemento per evitare FOUC.
 */
export function useReveal<T extends HTMLElement>(options?: {
  delay?: number;
  y?: number;
  start?: string;
}) {
  const ref = useRef<T>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || skipReveal()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: options?.y ?? 48 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          delay: options?.delay ?? 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: options?.start ?? "top 85%",
            once: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, [options?.delay, options?.y, options?.start]);

  return ref;
}

/**
 * Reveal a cascata dei figli diretti (per liste di righe/card).
 * Usare data-reveal-line sul contenitore.
 */
export function useStaggerReveal<T extends HTMLElement>(options?: {
  stagger?: number;
  y?: number;
  start?: string;
}) {
  const ref = useRef<T>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || skipReveal()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.children,
        { opacity: 0, y: options?.y ?? 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: options?.stagger ?? 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: options?.start ?? "top 85%",
            once: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, [options?.stagger, options?.y, options?.start]);

  return ref;
}

/** Parallasse leggero: l'elemento trasla di `amount` px sull'intera visibilità. */
export function useParallax<T extends HTMLElement>(amount = 60) {
  const ref = useRef<T>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -amount },
        {
          y: amount,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, [amount]);

  return ref;
}

export { gsap, ScrollTrigger };
