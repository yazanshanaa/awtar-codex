import { servicesContentByLocale } from '@/content/services';
import type { Locale } from '@/lib/constants';

export function getServicesContent(locale: Locale) {
  return servicesContentByLocale[locale];
}
