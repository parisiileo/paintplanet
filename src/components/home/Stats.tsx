import { Counter } from "@/components/ui/Counter";
import { StaggerReveal } from "@/components/ui/Reveal";
import type { Content } from "@/content";

type Props = { t: Content };

/** Fascia numeri su base cosmic: solo dati verificabili. */
export function Stats({ t }: Props) {
  return (
    <section className="relative border-y border-paper/10 py-16 md:py-20">
      <div className="container-pp">
        <StaggerReveal className="grid grid-cols-2 gap-8 md:grid-cols-4" stagger={0.08}>
          {t.stats.map((s) => (
            <Counter
              key={s.label}
              value={s.from === "galleryCount" ? t.gallery.items.length : s.value}
              suffix={s.suffix}
              label={s.label}
            />
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
