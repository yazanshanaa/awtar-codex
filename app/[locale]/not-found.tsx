import Link from 'next/link';
import { type Locale } from '@/lib/constants';
import { t } from '@/lib/i18n';

export default function NotFound({ params }: { params: { locale: Locale } }) {
  return (
    <section className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface p-8 text-center sm:p-12">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-3 text-lg font-semibold">{t(params.locale, 'placeholderTitle')}</p>
      <p className="mt-2 text-sm text-fg/80">The page you are looking for is unavailable.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href={`/${params.locale}`} className="rounded-lg border border-border px-4 py-2 text-sm hover:border-gold">
          {t(params.locale, 'navHome')}
        </Link>
        <Link href={`/${params.locale}/contact`} className="rounded-lg border border-border px-4 py-2 text-sm hover:border-gold">
          {t(params.locale, 'navContact')}
        </Link>
        <Link href={`/${params.locale}/quote`} className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-black hover:opacity-90">
          {t(params.locale, 'ctaQuote')}
        </Link>
      </div>
    </section>
  );
}
