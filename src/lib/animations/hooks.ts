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
    if (!el || prefersReducedMotion()) return;

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
    if (!el || prefersReducedMotion()) return;

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

/** Contatore animato quando entra in viewport. */
export function useCounter<T extends HTMLElement>(target: number, options?: { duration?: number }) {
  const ref = useRef<T>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.textContent = String(target);
      return;
    }

    const obj = { v: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        v: target,
        duration: options?.duration ?? 2,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onUpdate: () => {
          el.textContent = String(Math.round(obj.v));
        },
      });
    });
    return () => ctx.revert();
  }, [target, options?.duration]);

  return ref;
}

export { gsap, ScrollTrigger };
