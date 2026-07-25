"use client";

import { useEffect, useRef, type RefObject } from "react";
import { prefersReducedMotion } from "@/lib/animations/gsap-config";

/**
 * Pennellata scroll-driven: due larghe bande di vernice che si "disegnano" da
 * sinistra a destra mano a mano che si scrolla (stroke-dashoffset), con un
 * pennello che cavalca il bordo d'attacco e il colore che attraversa la
 * palette (cobalto → corallo → sole). Bordi PULITI (round-cap + leggera
 * sfumatura, niente rumore/turbulence).
 *
 * Sorgente di verità: `render(reveal)` esposto al parent via `apiRef` e
 * pilotato dallo scroll (ScrollTrigger.onUpdate) → funziona anche dove il rAF
 * è throttlato. Un rAF one-shot fa solo l'intro di ingresso.
 */

type Props = {
  progress: RefObject<number>;
  apiRef: RefObject<((reveal: number) => void) | null>;
  base?: number;
};

const STOPS: [number, [number, number, number]][] = [
  [0.0, [59, 91, 255]],
  [0.5, [255, 90, 77]],
  [1.0, [255, 194, 61]],
];

function colorAt(f: number): string {
  const x = Math.max(0, Math.min(1, f));
  for (let i = 1; i < STOPS.length; i++) {
    const [p1, c1] = STOPS[i - 1];
    const [p2, c2] = STOPS[i];
    if (x <= p2) {
      const t = (x - p1) / (p2 - p1);
      const r = Math.round(c1[0] + (c2[0] - c1[0]) * t);
      const g = Math.round(c1[1] + (c2[1] - c1[1]) * t);
      const b = Math.round(c1[2] + (c2[2] - c1[2]) * t);
      return `rgb(${r},${g},${b})`;
    }
  }
  return "rgb(255,194,61)";
}

export function PaintSweep({ progress, apiRef, base = 0.3 }: Props) {
  const path1 = useRef<SVGPathElement>(null);
  const path2 = useRef<SVGPathElement>(null);
  const brush = useRef<SVGGElement>(null);
  const bristles = useRef<SVGPathElement>(null);
  const drip = useRef<SVGPathElement>(null);

  useEffect(() => {
    const p1 = path1.current;
    const p2 = path2.current;
    const b = brush.current;
    if (!p1 || !p2 || !b) return;

    const len1 = p1.getTotalLength();
    const len2 = p2.getTotalLength();
    p1.style.strokeDasharray = `${len1}`;
    p2.style.strokeDasharray = `${len2}`;

    const render = (reveal: number) => {
      const r = Math.max(0, Math.min(1, reveal));
      p1.style.strokeDashoffset = `${len1 * (1 - r)}`;
      const r2 = Math.max(0, (r - 0.05) / 0.95);
      p2.style.strokeDashoffset = `${len2 * (1 - r2)}`;

      // pennello sul bordo d'attacco della banda superiore
      const pt = p1.getPointAtLength(len1 * r);
      b.setAttribute("transform", `translate(${pt.x} ${pt.y})`);
      b.style.opacity = r > 0.02 && r < 0.985 ? "1" : "0";

      const col = colorAt(r);
      bristles.current?.setAttribute("fill", col);
      drip.current?.setAttribute("fill", col);
    };

    apiRef.current = render;

    if (prefersReducedMotion()) {
      render(0.5);
      return () => {
        apiRef.current = null;
      };
    }

    render(base + (progress.current ?? 0) * (1 - base));

    // intro one-shot
    const start = performance.now();
    const INTRO = 1300;
    let raf = 0;
    const tick = () => {
      const it = Math.min(1, (performance.now() - start) / INTRO);
      const eased = it === 1 ? 1 : 1 - Math.pow(2, -10 * it);
      render(base * eased + (progress.current ?? 0) * (1 - base));
      if (it < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      apiRef.current = null;
    };
  }, [progress, apiRef, base]);

  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 1440 820"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="pp-paint" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1440" y2="0">
          <stop offset="0" stopColor="#4a63ff" />
          <stop offset="0.5" stopColor="#ff5a4d" />
          <stop offset="1" stopColor="#ffc23d" />
        </linearGradient>
        <linearGradient id="pp-paint-2" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1440" y2="0">
          <stop offset="0" stopColor="#2f4bea" />
          <stop offset="0.5" stopColor="#e63c2f" />
          <stop offset="1" stopColor="#eba51c" />
        </linearGradient>
        {/* Sfocatura DIREZIONALE: pochissima in orizzontale (fronte di
            disegno nitido, striscia definita "come prima") e molta in
            verticale → i bordi alto/basso si dissolvono nel buio, niente
            righe orizzontali che tagliano la fascia. */}
        <filter id="pp-soft" x="-6%" y="-60%" width="112%" height="220%">
          <feGaussianBlur stdDeviation="1.5 14" />
        </filter>
      </defs>

      {/* Bande di vernice (si disegnano con lo scroll), bordi alto/basso sfumati */}
      <g>
        <g filter="url(#pp-soft)">
          <path
            ref={path2}
            d="M -160 600 C 260 508, 560 700, 900 590 C 1180 502, 1380 672, 1680 600"
            fill="none"
            stroke="url(#pp-paint-2)"
            strokeWidth="250"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            ref={path1}
            d="M -160 348 C 240 240, 540 468, 840 346 C 1080 250, 1320 440, 1680 348"
            fill="none"
            stroke="url(#pp-paint)"
            strokeWidth="290"
            strokeLinecap="round"
          />
        </g>
      </g>

      {/* Pennello che cavalca il bordo (orientato dall'alto-destra) */}
      <g ref={brush} opacity={0}>
        <g transform="rotate(38)">
          <path ref={drip} d="M -6 60 q 9 26 0 46 q -9 -18 0 -46 Z" fill="#4a63ff" opacity="0.9" />
          <path ref={bristles} d="M -38 6 L 38 6 L 24 62 Q 0 76 -24 62 Z" fill="#4a63ff" />
          <rect x="-38" y="-30" width="76" height="40" rx="7" fill="#d3d8e6" />
          <rect x="-38" y="-10" width="76" height="6" fill="#a9b0c8" />
          <rect x="-16" y="-210" width="32" height="184" rx="16" fill="#131a34" />
          <rect x="-16" y="-210" width="13" height="184" rx="6.5" fill="#26305c" />
          <circle cx="0" cy="-202" r="10" fill="#0c1128" />
        </g>
      </g>
    </svg>
  );
}
