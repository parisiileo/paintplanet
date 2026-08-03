type Props = {
  num?: string;
  children: React.ReactNode;
  /** true se posizionata su superficie chiara (plaster) */
  onLight?: boolean;
  className?: string;
};

/** Etichetta tecnica mono uppercase, es. [ 01 — Servizi ]. Default: su base cosmic scura. */
export function SectionLabel({ num, children, onLight = false, className = "" }: Props) {
  return (
    <p
      className={`tech-label flex items-center gap-3 ${
        onLight ? "text-slate" : "text-mist"
      } ${className}`}
    >
      <span aria-hidden className="h-px w-8 bg-cobalt" />
      {num && <span className="text-coral">{num}</span>}
      <span>{children}</span>
    </p>
  );
}
