"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations/gsap-config";
import { useLenis } from "@/lib/lenis";

/**
 * Page transition a wipe: overlay che copre la pagina prima del cambio
 * route e la rivela dopo. Niente flash. Con prefers-reduced-motion la
 * navigazione resta nativa (nessun overlay).
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();
  const lenisRef = useRef(lenis);
  lenisRef.current = lenis;

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement).closest?.("a");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/")) return;

      const url = new URL(href, window.location.origin);
      if (url.pathname === window.location.pathname) return; // stessa pagina / hash

      e.preventDefault();
      if (isAnimating.current) return;
      isAnimating.current = true;

      const overlay = overlayRef.current;
      if (!overlay) {
        router.push(href);
        return;
      }

      gsap.set(overlay, { transformOrigin: "bottom", scaleY: 0, display: "block" });
      gsap.to(overlay, {
        scaleY: 1,
        duration: 0.5,
        ease: "power4.inOut",
        onComplete: () => router.push(href),
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  const revealPage = useCallback(() => {
    const overlay = overlayRef.current;

    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();

    if (!overlay || !isAnimating.current) return;
    gsap.set(overlay, { transformOrigin: "top" });
    gsap.to(overlay, {
      scaleY: 0,
      duration: 0.55,
      delay: 0.05,
      ease: "power4.inOut",
      onComplete: () => {
        gsap.set(overlay, { display: "none" });
        isAnimating.current = false;
      },
    });
  }, []);

  useEffect(() => {
    revealPage();
  }, [pathname, revealPage]);

  return (
    <>
      <div
        ref={overlayRef}
        aria-hidden
        className="fixed inset-0 z-[80] hidden bg-void will-change-transform"
      >
        <div className="flex h-full items-center justify-center">
          <span className="tech-label text-pop">Paint Planet</span>
        </div>
      </div>
      {children}
    </>
  );
}
