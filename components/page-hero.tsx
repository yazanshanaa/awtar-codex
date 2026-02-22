import Link from 'next/link';
import { type Locale } from '@/lib/constants';
import { t } from '@/lib/i18n';

export function PageHero({ locale, title, body }: { locale: Locale; title: string; body: string }) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-base text-fg/85 sm:text-lg">{body}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/${locale}/quote`}
          className="rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
        >
          {t(locale, 'ctaQuote')}
        </Link>
        <a
          href={`https://wa.me/${t(locale, 'phone').replace(/[^\d]/g, '')}`}
          className="rounded-lg border border-border bg-bg px-5 py-3 text-sm font-semibold transition hover:border-gold"
        >
          {t(locale, 'ctaWhatsApp')}
        </a>
      </div>
    </section>
  );
}
