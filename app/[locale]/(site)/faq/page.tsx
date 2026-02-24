import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/placeholder-page';
import { type Locale } from '@/lib/constants';
import { t } from '@/lib/i18n';
import { createLocaleAlternates } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  return {
    title: t(params.locale, 'navFaq'),
    description: t(params.locale, 'placeholderBody'),
    alternates: { canonical: `/${params.locale}/faq`, languages: createLocaleAlternates('/faq') }
  };
}

export default function FaqPage({ params }: { params: { locale: Locale } }) {
  return <PlaceholderPage locale={params.locale} title={t(params.locale, 'navFaq')} />;
}
