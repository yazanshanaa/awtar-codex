import { type Locale } from '@/lib/constants';
import { t } from '@/lib/i18n';
import { PageHero } from '@/components/page-hero';

export function PlaceholderPage({ locale, title }: { locale: Locale; title: string }) {
  return <PageHero locale={locale} title={title} body={t(locale, 'placeholderBody')} />;
}
