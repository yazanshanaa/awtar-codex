import type { MetadataRoute } from 'next';
import { SITE_URL, SUPPORTED_LOCALES } from '@/lib/constants';

const routes = ['', '/about', '/services', '/portfolio', '/contact', '/quote', '/faq'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return SUPPORTED_LOCALES.flatMap((locale) =>
    routes.map((route) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.7
    }))
  );
}
