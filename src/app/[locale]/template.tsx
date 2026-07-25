/**
 * Template pass-through: Next monta una NUOVA istanza della pagina a ogni
 * navigazione client. Senza, React riusa lo stesso albero e le animazioni
 * d'ingresso GSAP — legate al mount — non ripartono mai (il testo resta
 * nascosto dallo stato iniziale anti-FOUC).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return children;
}
