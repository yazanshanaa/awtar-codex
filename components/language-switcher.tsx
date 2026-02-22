'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type Locale, SUPPORTED_LOCALES } from '@/lib/constants';

export function LanguageSwitcher({ activeLocale }: { activeLocale: Locale }) {
  const pathname = usePathname();
  const suffix = pathname.replace(/^\/(ar|en|he)/, '') || '/';

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-surface p-1">
      {SUPPORTED_LOCALES.map((locale) => {
        const isActive = locale === activeLocale;
        return (
          <Link
            key={locale}
            href={`/${locale}${suffix}`}
            className={`rounded-full px-2 py-1 text-xs font-semibold uppercase transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
              isActive ? 'bg-gold text-black' : 'text-fg hover:text-gold'
            }`}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}
