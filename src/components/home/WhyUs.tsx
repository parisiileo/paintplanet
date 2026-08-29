import { HighlightTitle } from "@/components/ui/HighlightTitle";
import { Reveal, StaggerReveal } from "@/components/ui/Reveal";
import type { Content } from "@/content";

type Props = { t: Content };

export function WhyUs({ t }: Props) {
  return (
    <section className="surface-light section-y">
      <div className="container-pp grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal as="h2" className="font-display text-h2 font-semibold leading-[1.05] text-ink">
            <HighlightTitle title={t.whyUs.title} color="coral" />
          </Reveal>
          <Reveal className="mt-6 max-w-md text-ink/70" delay={0.05}>
            {t.whyUs.about}
          </Reveal>
          <StaggerReveal className="mt-8 flex flex-wrap gap-3" stagger={0.06}>
            {t.whyUs.values.map((v) => (
              <span
                key={v}
                className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink/80"
              >
                {v}
              </span>
            ))}
          </StaggerReveal>
        </div>

        <StaggerReveal className="grid gap-x-10 gap-y-8 sm:grid-cols-2" stagger={0.08}>
          {t.whyUs.strengths.map((s, i) => (
            <div key={s.title} className="border-t border-ink/15 pt-5">
              <span className="font-mono text-sm text-cobalt">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display mt-3 text-xl font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.text}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
