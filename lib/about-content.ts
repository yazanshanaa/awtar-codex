import { aboutContentByLocale } from '@/content/about';
import type { Locale } from '@/lib/constants';

export function getAboutContent(locale: Locale) {
  return aboutContentByLocale[locale];
}
