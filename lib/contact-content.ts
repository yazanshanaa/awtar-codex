import { contactContentByLocale } from '@/content/contact';
import type { Locale } from '@/lib/constants';

export function getContactContent(locale: Locale) {
  return contactContentByLocale[locale];
}
