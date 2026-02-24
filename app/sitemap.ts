import type { MetadataRoute } from 'next';
import { SITE_URL, SUPPORTED_LOCALES } from '@/lib/constants';

const localeRoutes = ['', '/about', '/services', '/portfolio', '/contact', '/faq', '/quote'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const localizedEntries = SUPPORTED_LOCALES.flatMap((locale) =>
    localeRoutes.map((route) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.7
    }))
  );

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1
    },
    ...localizedEntries
  ];
}
