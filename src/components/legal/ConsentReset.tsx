"use client";

import { useConsent } from "@/lib/consent";
import type { Content } from "@/content";

/** Revoca la scelta sui cookie e fa ricomparire il banner. */
export function ConsentReset({ t }: { t: Pick<Content, "consent"> }) {
  const { consent, reopen } = useConsent();

  return (
    <div className="mt-6 flex flex-wrap items-center gap-4">
      <button
        type="button"
        onClick={reopen}
        disabled={consent === null}
        className="rounded-full bg-cobalt px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-cobalt-deep disabled:cursor-not-allowed disabled:opacity-50"
      >
        {t.consent.title}
      </button>
      <span className="text-sm text-mist-dim">
        {consent === "all"
          ? t.consent.acceptAll
          : consent === "necessary"
            ? t.consent.necessaryOnly
            : "non impostato"}
      </span>
    </div>
  );
}
