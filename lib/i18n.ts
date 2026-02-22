import ar from '@/content/messages/ar.json';
import en from '@/content/messages/en.json';
import he from '@/content/messages/he.json';
import { DEFAULT_LOCALE, type Locale, RTL_LOCALES, SUPPORTED_LOCALES } from '@/lib/constants';

export type Messages = typeof ar;

const messagesByLocale: Record<Locale, Messages> = { ar, en, he };

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale];
}

export function getDirection(locale: Locale): 'rtl' | 'ltr' {
  return RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';
}

export function t(locale: Locale, key: keyof Messages): string {
  return messagesByLocale[locale][key];
}

export function normalizeLocale(value?: string | null): Locale {
  if (value && isLocale(value)) return value;
  return DEFAULT_LOCALE;
}
