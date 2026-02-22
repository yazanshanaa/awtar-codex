import type { Locale } from '@/lib/constants';
import { SITE_URL, SUPPORTED_LOCALES } from '@/lib/constants';

export function createLocaleAlternates(pathname: string): Record<Locale, string> {
  return SUPPORTED_LOCALES.reduce(
    (acc, locale) => {
      acc[locale] = `${SITE_URL}/${locale}${pathname}`;
      return acc;
    },
    {} as Record<Locale, string>
  );
}
