'use client';

import { useState } from 'react';

export function ContactMap({ query, loadLabel }: { query: string; loadLabel: string }) {
  const [loaded, setLoaded] = useState(false);
  const encoded = encodeURIComponent(query);

  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      {!loaded ? (
        <div className="space-y-3">
          <div className="rounded-xl border border-border bg-bg p-8 text-center text-sm text-fg/75">Map preview is hidden for privacy.</div>
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-gold"
          >
            {loadLabel}
          </button>
        </div>
      ) : (
        <iframe
          title="Location map"
          src={`https://www.google.com/maps?q=${encoded}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[320px] w-full rounded-xl border border-border"
        />
      )}
    </div>
  );
}
