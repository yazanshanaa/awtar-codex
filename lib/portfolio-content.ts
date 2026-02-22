import { portfolioItems } from '@/content/data';
import { portfolioContentByLocale } from '@/content/portfolio';
import type { Locale } from '@/lib/constants';

export function getPortfolioPageData(locale: Locale) {
  return {
    content: portfolioContentByLocale[locale],
    items: portfolioItems
  };
}
