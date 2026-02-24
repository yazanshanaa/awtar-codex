export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
export const FACTORY_NAME = 'Awtar Ironworks';
export const SUPPORTED_LOCALES = ['ar', 'en', 'he'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const RTL_LOCALES: Locale[] = ['ar', 'he'];
export const DEFAULT_LOCALE: Locale = 'ar';
