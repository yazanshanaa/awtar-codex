import type { Metadata } from 'next';
import { QuoteForm } from '@/components/quote-form';
import { type Locale, SITE_URL } from '@/lib/constants';
import { t } from '@/lib/i18n';
import { getQuoteContent } from '@/lib/quote-content';
import { createLocaleAlternates } from '@/lib/seo';

const validServices = new Set(['doors', 'railings', 'grills', 'windows', 'maintenance']);

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const content = getQuoteContent(params.locale);

  return {
    title: t(params.locale, 'ctaQuote'),
    description: content.description,
    alternates: {
      canonical: `/${params.locale}/quote`,
      languages: createLocaleAlternates('/quote')
    },
    openGraph: {
      title: `${t(params.locale, 'factoryName')} - ${t(params.locale, 'ctaQuote')}`,
      description: content.description,
      url: `${SITE_URL}/${params.locale}/quote`
    }
  };
}

export default function QuotePage({
  params,
  searchParams
}: {
  params: { locale: Locale };
  searchParams: { service?: string };
}) {
  const content = getQuoteContent(params.locale);
  const preferredService = searchParams.service && validServices.has(searchParams.service) ? searchParams.service : 'doors';

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold sm:text-4xl">{content.heading}</h1>
        <p className="mt-3 max-w-2xl text-fg/80">{content.description}</p>
      </header>
      <QuoteForm locale={params.locale} content={content} phone={t(params.locale, 'phone')} initialService={preferredService} />
    </section>
  );
}
