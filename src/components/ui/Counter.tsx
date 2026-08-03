"use client";

import { useCounter } from "@/lib/animations/hooks";

type Props = {
  value: number;
  suffix?: string;
  label: string;
  /** true su superficie chiara (plaster) */
  onLight?: boolean;
};

/** Statistica con contatore animato on-scroll. */
export function Counter({ value, suffix = "", label, onLight = false }: Props) {
  const ref = useCounter<HTMLSpanElement>(value);

  return (
    <div className="flex flex-col gap-2">
      <p
        className={`font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-none ${
          onLight ? "text-ink" : "text-paper"
        }`}
      >
        {/* Il valore finale è già nell'HTML: senza JS (o prima
            dell'idratazione) la fascia mostra i numeri veri, non zeri.
            È `useCounter` a riportarlo a 0 subito prima di animare. */}
        <span ref={ref}>{value}</span>
        <span className="text-coral">{suffix}</span>
      </p>
      <p className={`text-sm ${onLight ? "text-ink/60" : "text-mist"}`}>{label}</p>
    </div>
  );
}
