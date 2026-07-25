import type { Highlight } from "@/content";

type Props = {
  title: Highlight;
  /** Stile della parola evidenziata */
  color?: "cobalt" | "coral" | "sun" | "mint" | "pop";
};

const COLOR_CLS: Record<NonNullable<Props["color"]>, string> = {
  cobalt: "text-cobalt",
  coral: "text-coral",
  sun: "text-sun",
  mint: "text-mint",
  pop: "text-pop",
};

/** Renderizza un titolo con parola evidenziata: pre <span>highlight</span> post */
export function HighlightTitle({ title, color = "pop" }: Props) {
  return (
    <>
      {title.pre}
      {title.highlight && <span className={COLOR_CLS[color]}>{title.highlight}</span>}
      {title.post}
    </>
  );
}
