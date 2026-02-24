import type { Metadata } from 'next';
import { PortfolioGallery } from '@/components/portfolio-gallery';
import { type Locale, SITE_URL } from '@/lib/constants';
import { t } from '@/lib/i18n';
import { createLocaleAlternates } from '@/lib/seo';
import { getPortfolioPageData } from '@/lib/portfolio-content';

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const { content } = getPortfolioPageData(params.locale);

  return {
    title: t(params.locale, 'navPortfolio'),
    description: content.description,
    alternates: {
      canonical: `/${params.locale}/portfolio`,
      languages: createLocaleAlternates('/portfolio')
    },
    openGraph: {
      title: `${t(params.locale, 'factoryName')} - ${t(params.locale, 'navPortfolio')}`,
      description: content.description,
      url: `${SITE_URL}/${params.locale}/portfolio`
    }
  };
}

export default function PortfolioPage({ params }: { params: { locale: Locale } }) {
  const { content, items } = getPortfolioPageData(params.locale);
  const isRtl = params.locale !== 'en';

  return (
    <section>
      <header className="mb-8">
        <h1 className="text-3xl font-bold sm:text-4xl">{content.heading}</h1>
        <p className="mt-3 max-w-3xl text-fg/80">{content.description}</p>
      </header>

      <PortfolioGallery
        locale={params.locale}
        isRtl={isRtl}
        items={items}
        content={content}
        quoteLabel={t(params.locale, 'ctaQuote')}
        whatsappLabel={t(params.locale, 'ctaWhatsApp')}
        phone={t(params.locale, 'phone')}
      />
    </section>
  );
}
