"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/animations/gsap-config";
import type { Content, GalleryItem } from "@/content";

/**
 * Grid lavori con filtro categoria e lightbox animato.
 * [PLACEHOLDER] — tile a gradiente in attesa delle foto reali dei lavori.
 */
export function GalleryGrid({ t }: { t: Content }) {
  const [filter, setFilter] = useState<string>("all");
  const [active, setActive] = useState<GalleryItem | null>(null);
  const gridRef = useRef<HTMLUListElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const categoryLabel = (key: string) =>
    t.gallery.categories.find((c) => c.key === key)?.label ?? key;

  const items =
    filter === "all"
      ? t.gallery.items
      : t.gallery.items.filter((g) => g.categoryKey === filter);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        grid.children,
        { opacity: 0, y: 32, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.05, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, [filter]);

  useEffect(() => {
    const box = lightboxRef.current;
    if (!active || !box) return;

    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    if (!prefersReducedMotion()) {
      gsap.fromTo(box, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.fromTo(
        box.querySelector("[data-lightbox-panel]"),
        { opacity: 0, scale: 0.92, y: 24 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power3.out", delay: 0.05 }
      );
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const close = useCallback(() => setActive(null), []);

  const filters: { key: string; label: string }[] = [
    { key: "all", label: t.gallery.filterAll },
    ...t.gallery.categories,
  ];

  return (
    <>
      {/* Filtri */}
      <div role="group" aria-label={t.gallery.filterLabel} className="flex flex-wrap gap-2">
        {filters.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setFilter(c.key)}
            aria-pressed={filter === c.key}
            className={`tech-label rounded-full border px-4 py-2.5 transition-colors duration-300 ${
              filter === c.key
                ? "border-cobalt bg-cobalt text-paper"
                : "border-paper/15 text-mist hover:border-cobalt hover:text-paper"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <ul ref={gridRef} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setActive(item)}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-card)] text-left"
              aria-label={`${t.gallery.open}: ${item.title}`}
            >
              {/* [PLACEHOLDER] sostituire con next/image + foto reale */}
              <span
                aria-hidden
                className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${item.placeholder.from}, ${item.placeholder.to})`,
                }}
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-80"
              />
              <span className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
                <span className="tech-label text-sun">{categoryLabel(item.categoryKey)}</span>
                <span className="font-display text-lg font-medium text-paper">{item.title}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {active && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[85] flex items-center justify-center bg-void/90 p-5 backdrop-blur-sm"
          onClick={close}
        >
          <div
            data-lightbox-panel
            className="relative w-full max-w-3xl overflow-hidden rounded-[var(--radius-card)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="aspect-[16/10] w-full"
              style={{
                background: `linear-gradient(135deg, ${active.placeholder.from}, ${active.placeholder.to})`,
              }}
            />
            <div className="flex items-center justify-between bg-nebula px-6 py-4">
              <div>
                <p className="tech-label text-sun">{categoryLabel(active.categoryKey)}</p>
                <p className="font-display mt-1 font-semibold text-paper">{active.title}</p>
              </div>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={close}
                className="rounded-full border border-paper/20 px-4 py-2 text-sm font-medium text-paper transition-colors hover:border-cobalt hover:text-cobalt"
              >
                {t.gallery.close} ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
