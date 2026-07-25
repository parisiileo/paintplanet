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
}

/** True se l'utente preferisce ridurre il movimento. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger };
