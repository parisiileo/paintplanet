"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations/gsap-config";
import { useIsoLayoutEffect } from "@/lib/animations/hooks";
import type { Content, GalleryCategory, GalleryItem } from "@/content";

/**
 * Galleria lavori: masonry a colonne (le foto mantengono il loro formato
 * naturale) + lightbox con scroller di miniature, frecce, tastiera e swipe.
 * I filtri in testa restringono il flusso a una famiglia di lavorazione.
 */

type Filter = GalleryCategory | "all";
/** Numero di colonne in base al breakpoint corrente. */
function useColumnCount() {
  const [cols, setCols] = useState(3);

  useEffect(() => {
    const sm = window.matchMedia("(min-width: 640px)");
    const lg = window.matchMedia("(min-width: 1024px)");
    const sync = () => setCols(lg.matches ? 3 : sm.matches ? 2 : 1);
    sync();
    sm.addEventListener("change", sync);
    lg.addEventListener("change", sync);
    return () => {
      sm.removeEventListener("change", sync);
      lg.removeEventListener("change", sync);
    };
  }, []);

  return cols;
}

/**
 * Masonry bilanciato: le foto più alte vengono sistemate per prime nella
 * colonna al momento più corta (longest-processing-time). Le colonne
 * chiudono quasi alla stessa altezza con qualunque mix di verticali e
 * panoramiche, senza ritagliare le immagini.
 */
function distribute<T extends { width: number; height: number }>(items: T[], cols: number) {
  const columns: T[][] = Array.from({ length: cols }, () => []);
  const heights: number[] = new Array(cols).fill(0);
  const ratio = (it: T) => it.height / it.width;

  for (const item of [...items].sort((a, b) => ratio(b) - ratio(a))) {
    const shortest = heights.indexOf(Math.min(...heights));
    columns[shortest].push(item);
    heights[shortest] += ratio(item);
  }
  return columns;
}

export function GalleryGrid({ t }: { t: Content }) {
  const all = t.gallery.items;
  const [filter, setFilter] = useState<Filter>("all");
  const [index, setIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cols = useColumnCount();

  /* Solo le famiglie davvero presenti fra i lavori, nell'ordine dei contenuti. */
  const filters = useMemo<Filter[]>(() => {
    const order = Object.keys(t.gallery.categories) as GalleryCategory[];
    return ["all", ...order.filter((c) => all.some((it) => it.category === c))];
  }, [all, t.gallery.categories]);

  const items = useMemo(
    () => (filter === "all" ? all : all.filter((it) => it.category === filter)),
    [all, filter]
  );
  const columns = distribute(items, cols);

  const open = useCallback((i: number) => setIndex(i), []);
  const close = useCallback(() => setIndex(null), []);
  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length]
  );

  /* Reveal a cascata delle tile; si ricrea quando cambiano colonne o filtro. */
  useIsoLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(grid.querySelectorAll("[data-tile]"), {
        start: "top 92%",
        once: true,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 44, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.08, ease: "power3.out" }
          ),
      });
    }, grid);
    return () => ctx.revert();
  }, [cols, filter]);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2.5" role="tablist" aria-label={t.gallery.heroLabel}>
        {filters.map((f) => {
          const active = f === filter;
          const label = f === "all" ? t.gallery.filterAll : t.gallery.categories[f];
          const count = f === "all" ? all.length : all.filter((it) => it.category === f).length;

          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                setFilter(f);
                setIndex(null);
              }}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                active
                  ? "border-cobalt bg-cobalt/10 text-paper"
                  : "border-paper/15 text-mist hover:border-paper/35 hover:text-paper"
              }`}
            >
              {label}
              <span className={active ? "text-cobalt" : "text-mist-dim"}>{count}</span>
            </button>
          );
        })}
      </div>

      <div ref={gridRef} className="flex items-start gap-4 sm:gap-5">
        {columns.map((column, c) => (
          <div key={c} className="flex min-w-0 flex-1 flex-col gap-4 sm:gap-5">
            {column.map((item) => {
              const i = items.indexOf(item);
              return (
                <button
                  key={item.id}
                  type="button"
                  data-tile
                  onClick={() => open(i)}
                  aria-label={`${t.gallery.open}: ${item.title}`}
                  className="group relative block w-full overflow-hidden rounded-[var(--radius-card)] border border-paper/10 bg-nebula/40 text-left"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
                    className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Velo solo sul bordo basso: la foto resta pulita */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-void via-void/55 to-transparent transition-opacity duration-500 group-hover:opacity-90"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5">
                    <span className="font-display text-lg font-medium leading-snug text-paper drop-shadow-[0_2px_12px_rgba(7,9,18,0.9)]">
                      {item.title}
                    </span>
                    <span className="max-h-0 overflow-hidden text-sm leading-relaxed text-mist opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                      {item.caption}
                    </span>
                  </span>

                  {/* Indicatore "apri" */}
                  <span
                    aria-hidden
                    className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-paper/25 bg-void/50 text-paper opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path
                        d="M15 3h6v6M21 3l-8 8M9 21H3v-6M3 21l8-8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {index !== null && (
        <Lightbox
          t={t}
          items={items}
          index={index}
          onClose={close}
          onPrev={() => go(-1)}
          onNext={() => go(1)}
          onSelect={setIndex}
        />
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */

type LightboxProps = {
  t: Content;
  /** Sottoinsieme attualmente a schermo: la navigazione resta dentro il filtro. */
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (i: number) => void;
};

/** Viewer a tutto schermo con frecce, tastiera, swipe e rail di miniature. */
function Lightbox({ t, items, index, onClose, onPrev, onNext, onSelect }: LightboxProps) {
  const active = items[index];
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  /* Apertura: blocca lo scroll di pagina, focus sul close, fade-in. */
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    if (!prefersReducedMotion() && rootRef.current) {
      gsap.fromTo(rootRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
    }
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  /* Esc chiude, frecce navigano. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onNext();
      else if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  /* Cambio slide: micro-animazione + miniatura attiva sempre in vista. */
  useEffect(() => {
    if (!prefersReducedMotion() && stageRef.current) {
      gsap.fromTo(
        stageRef.current,
        { opacity: 0, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 0.45, ease: "power3.out" }
      );
    }
    railRef.current?.querySelector(`[data-thumb="${index}"]`)?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [index]);

  return (
    <div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label={active.title}
      className="fixed inset-0 z-[85] flex flex-col bg-void/95 backdrop-blur-md"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 60) (dx < 0 ? onNext : onPrev)();
        touchX.current = null;
      }}
    >
      {/* Barra superiore */}
      <div
        className="flex shrink-0 items-center justify-between gap-4 px-5 py-4 md:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="tech-label text-sun">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2 text-sm font-medium text-paper transition-colors hover:border-cobalt hover:text-cobalt"
        >
          {t.gallery.close} ✕
        </button>
      </div>

      {/* Palco */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 md:px-20">
        <button
          type="button"
          aria-label={t.gallery.prev}
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-paper/20 bg-void/60 text-paper transition-colors hover:border-cobalt hover:text-cobalt md:left-6"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          ref={stageRef}
          className="relative flex h-full max-h-full w-full items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            key={active.id}
            src={active.src}
            alt={active.title}
            width={active.width}
            height={active.height}
            sizes="(max-width: 768px) 94vw, 78vw"
            priority
            className="max-h-full w-auto max-w-full rounded-[var(--radius-card)] object-contain"
          />
        </div>

        <button
          type="button"
          aria-label={t.gallery.next}
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-paper/20 bg-void/60 text-paper transition-colors hover:border-cobalt hover:text-cobalt md:right-6"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Didascalia + scroller miniature */}
      <div className="shrink-0 px-5 pb-6 pt-4 md:px-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-display text-lg font-semibold text-paper">{active.title}</p>
          <span className="tech-label text-cobalt">{t.gallery.categories[active.category]}</span>
        </div>
        <p className="mt-1 text-sm text-mist">{active.caption}</p>

        <div
          ref={railRef}
          className="no-scrollbar mt-4 flex gap-2.5 overflow-x-auto pb-1"
          role="tablist"
          aria-label={t.gallery.heroLabel}
        >
          {items.map((it, i) => (
            <button
              key={it.id}
              type="button"
              data-thumb={i}
              role="tab"
              aria-selected={i === index}
              aria-label={it.title}
              onClick={() => onSelect(i)}
              className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition-all duration-300 ${
                i === index
                  ? "border-cobalt opacity-100"
                  : "border-paper/15 opacity-50 hover:opacity-90"
              }`}
            >
              <Image src={it.src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
