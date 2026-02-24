import Link from 'next/link';
import { LanguageSwitcher } from '@/components/language-switcher';
import { type Locale } from '@/lib/constants';
import { t } from '@/lib/i18n';

export function Navbar({ locale }: { locale: Locale }) {
  const isRtl = locale !== 'en';

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href={`/${locale}`} className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface font-bold text-gold">AW</span>
          <span className="text-sm font-semibold sm:text-base">{t(locale, 'factoryName')}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-4 text-sm md:flex">
          <Link href={`/${locale}`} className="hover:text-gold">{t(locale, 'navHome')}</Link>
          <Link href={`/${locale}/about`} className="hover:text-gold">{t(locale, 'navAbout')}</Link>
          <Link href={`/${locale}/services`} className="hover:text-gold">{t(locale, 'navServices')}</Link>
          <Link href={`/${locale}/portfolio`} className="hover:text-gold">{t(locale, 'navPortfolio')}</Link>
          <Link href={`/${locale}/contact`} className="hover:text-gold">{t(locale, 'navContact')}</Link>
          <Link href={`/${locale}/faq`} className="hover:text-gold">{t(locale, 'navFaq')}</Link>
        </nav>

        <div className={`flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <LanguageSwitcher activeLocale={locale} />
        </div>
      </div>
    </header>
  );
}
