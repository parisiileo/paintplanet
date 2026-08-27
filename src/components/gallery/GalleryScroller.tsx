"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/animations/gsap-config";
import type { Content } from "@/content";

type Props = {
  t: Content;
  /** Destinazione dei tile (pagina galleria) */
  href: string;
  className?: string;
};

/**
 * Scroller orizzontale dei lavori: snap, trascinamento col mouse,
 * frecce e barra di avanzamento. Le foto tengono il formato naturale,
 * così ritratti e panoramiche convivono nella stessa riga.
 */
export function GalleryScroller({ t, href, className = "" }: Props) {
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  /* Trascinamento col mouse con inerzia. Durante il drag lo scroll-snap va
     disattivato (classe .is-dragging): con snap attivo il browser rimbalza
     sul punto di aggancio a ogni assegnazione di scrollLeft e il rail sembra
     "incollato". Su touch resta lo scroll nativo. */
  const drag = useRef({
    active: false,
    startX: 0,
    startLeft: 0,
    moved: 0,
    lastX: 0,
    lastT: 0,
    velocity: 0,
  });
  const momentum = useRef(0);

  const stopMomentum = () => {
    if (momentum.current) {
      cancelAnimationFrame(momentum.current);
      momentum.current = 0;
    }
  };

  const updateProgress = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    updateProgress();
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("resize", updateProgress);
      stopMomentum();
    };
  }, [updateProgress]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "touch" || e.button !== 0) return;
    const el = railRef.current;
    if (!el) return;
    stopMomentum();
    drag.current = {
      active: true,
      startX: e.clientX,
      startLeft: el.scrollLeft,
      moved: 0,
      lastX: e.clientX,
      lastT: performance.now(),
      velocity: 0,
    };
    el.classList.add("is-dragging");
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = railRef.current;
    const d = drag.current;
    if (!el || !d.active) return;
    e.preventDefault();
    const dx = e.clientX - d.startX;
    d.moved = Math.max(d.moved, Math.abs(dx));
    el.scrollLeft = d.startLeft - dx;

    /* Velocità istantanea (px/ms) filtrata, serve per l'inerzia al rilascio. */
    const now = performance.now();
    const dt = now - d.lastT;
    if (dt > 0) {
      const v = (e.clientX - d.lastX) / dt;
      d.velocity = d.velocity * 0.7 + v * 0.3;
      d.lastX = e.clientX;
      d.lastT = now;
    }
  };

  const endDrag = (e: React.PointerEvent) => {
    const el = railRef.current;
    const d = drag.current;
    if (!el || !d.active) return;
    d.active = false;
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);

    /* Inerzia: continua a scorrere e decelera, poi riattiva lo snap. */
    let v = -d.velocity * 16; // px per frame
    const release = () => {
      el.classList.remove("is-dragging");
      momentum.current = 0;
    };
    if (Math.abs(v) < 0.6 || prefersReducedMotion()) {
      release();
      return;
    }
    const step = () => {
      el.scrollLeft += v;
      v *= 0.92;
      const atEdge = el.scrollLeft <= 0 || el.scrollLeft >= el.scrollWidth - el.clientWidth;
      if (Math.abs(v) < 0.4 || atEdge) {
        release();
        return;
      }
      momentum.current = requestAnimationFrame(step);
    };
    momentum.current = requestAnimationFrame(step);
  };

  /* Dopo un drag il click sul tile va annullato, altrimenti naviga. */
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved > 8) {
      e.preventDefault();
      e.stopPropagation();
    }
    drag.current.moved = 0;
  };

  const scrollByCards = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    stopMomentum();
    el.classList.remove("is-dragging");
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 640), behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div
        ref={railRef}
        onScroll={updateProgress}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        className="no-scrollbar drag-rail flex snap-x snap-proximity gap-4 overflow-x-auto px-[var(--gutter)] pb-2 scroll-px-[var(--gutter)] sm:gap-5"
      >
        {t.gallery.items.map((item, i) => (
          <Link
            key={item.id}
            href={href}
            draggable={false}
            className="group relative h-[clamp(20rem,42vh,30rem)] min-w-[13rem] max-w-[34rem] shrink-0 snap-start overflow-hidden rounded-[var(--radius-card)] border border-paper/10 bg-nebula/40"
            style={{ aspectRatio: `${item.width} / ${item.height}` }}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              draggable={false}
              sizes="(max-width: 640px) 80vw, 40vw"
              // Solo le prime due card sono visibili senza scorrere il rail.
              loading={i < 2 ? "eager" : "lazy"}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-void via-void/15 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95"
            />
            <span className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
              <span className="font-display text-base font-medium text-paper">{item.title}</span>
              <span className="text-xs leading-relaxed text-mist opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {item.caption}
              </span>
            </span>
          </Link>
        ))}

        {/* Card finale: porta alla galleria completa */}
        <Link
          href={href}
          draggable={false}
          className="group flex h-[clamp(20rem,42vh,30rem)] w-[16rem] shrink-0 snap-start flex-col items-start justify-end gap-3 rounded-[var(--radius-card)] border border-paper/15 bg-nebula/30 p-6 transition-colors duration-500 hover:border-cobalt"
        >
          <span className="tech-label text-sun">
            {t.gallery.items.length} {t.gallery.countLabel}
          </span>
          <span className="font-display text-2xl font-semibold leading-tight text-paper">
            {t.gallery.heroLabel}
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 text-paper transition-colors duration-500 group-hover:border-cobalt group-hover:text-cobalt-lite">
            →
          </span>
        </Link>
      </div>

      {/* Frecce + barra di avanzamento */}
      <div className="container-pp mt-6 flex items-center gap-5">
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={t.gallery.prev}
            onClick={() => scrollByCards(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper transition-colors hover:border-cobalt hover:text-cobalt-lite"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label={t.gallery.next}
            onClick={() => scrollByCards(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper transition-colors hover:border-cobalt hover:text-cobalt-lite"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div aria-hidden className="relative h-px flex-1 bg-paper/15">
          <span
            className="absolute inset-y-0 left-0 block h-px bg-cobalt transition-[width] duration-200 ease-out"
            style={{ width: `${Math.max(progress * 100, 8)}%` }}
          />
        </div>

      </div>
    </div>
  );
}
