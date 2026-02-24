import { quoteContentByLocale } from '@/content/quote';
import type { Locale } from '@/lib/constants';

export function getQuoteContent(locale: Locale) {
  return quoteContentByLocale[locale];
}
