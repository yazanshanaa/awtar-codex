import { homeContentByLocale } from '@/content/home';
import type { Locale } from '@/lib/constants';

export function getHomeContent(locale: Locale) {
  return homeContentByLocale[locale];
}
