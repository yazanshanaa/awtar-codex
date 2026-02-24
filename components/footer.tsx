import { type Locale } from '@/lib/constants';
import { t } from '@/lib/i18n';

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-16 border-t border-border bg-surface/60">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3">
        <section>
          <h2 className="mb-2 text-sm font-semibold text-gold">{t(locale, 'footerContact')}</h2>
          <p className="text-sm">{t(locale, 'phone')}</p>
          <p className="text-sm">{t(locale, 'email')}</p>
          <p className="text-sm">{t(locale, 'address')}</p>
        </section>
        <section>
          <h2 className="mb-2 text-sm font-semibold text-gold">{t(locale, 'footerHours')}</h2>
          <p className="text-sm">{t(locale, 'hoursValue')}</p>
        </section>
        <section>
          <h2 className="mb-2 text-sm font-semibold text-gold">{t(locale, 'footerSocial')}</h2>
          <p className="text-sm">Facebook</p>
          <p className="text-sm">Instagram</p>
          <p className="text-sm">LinkedIn</p>
        </section>
      </div>
    </footer>
  );
}
