"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/animations/gsap-config";

const SEEN_KEY = "pp-intro-seen";

/**
 * Intro animata: wordmark che si compone + "colata" di progresso, poi wipe.
 * - solo alla prima visita della sessione, skippabile con click/tasto
 * - saltata del tutto con prefers-reduced-motion
 * - al termine dà il via (hero-go) all'entrata della home hero
 */
export function Preloader({ tagline }: { tagline: string }) {
  const [show, setShow] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (prefersReducedMotion() || sessionStorage.getItem(SEEN_KEY)) {
      document.documentElement.classList.add("hero-go");
      return;
    }
    sessionStorage.setItem(SEEN_KEY, "1");
    setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    const root = rootRef.current;
    if (!root) return;

    const letters = root.querySelectorAll("[data-letter]");
    const line = root.querySelector("[data-line]");

    const tl = gsap.timeline({
      onComplete: () => {
        setShow(false);
        document.documentElement.classList.add("hero-go");
        window.dispatchEvent(new Event("pp:preloader-done"));
      },
    });
    tl.fromTo(
      letters,
      { yPercent: 120 },
      { yPercent: 0, duration: 0.7, stagger: 0.035, ease: "power4.out" }
    )
      .fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power2.inOut" }, "<0.15")
      .to(root, { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, "+=0.15");

    tlRef.current = tl;

    const skip = () => tl.progress(1);
    root.addEventListener("click", skip);
    window.addEventListener("keydown", skip);

    return () => {
      root.removeEventListener("click", skip);
      window.removeEventListener("keydown", skip);
      tl.kill();
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      ref={rootRef}
      role="presentation"
      aria-hidden
      className="fixed inset-0 z-[90] flex cursor-pointer flex-col items-center justify-center gap-6 bg-void"
    >
      <p className="font-display flex overflow-hidden text-[clamp(2rem,7vw,4.5rem)] font-semibold text-paper">
        {"PAINT PLANET".split("").map((ch, i) => (
          <span key={i} data-letter className="inline-block will-change-transform">
            {ch === " " ? " " : ch}
          </span>
        ))}
      </p>
      <div className="h-px w-[min(60vw,20rem)] overflow-hidden bg-paper/10">
        <div
          data-line
          className="h-full w-full origin-left scale-x-0"
          style={{ background: "linear-gradient(90deg, var(--cobalt), var(--coral), var(--sun))" }}
        />
      </div>
      <p className="tech-label text-mist">{tagline}</p>
    </div>
  );
}
