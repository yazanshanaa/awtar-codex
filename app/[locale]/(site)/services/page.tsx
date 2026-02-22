import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { type Locale, SITE_URL } from '@/lib/constants';
import { t } from '@/lib/i18n';
import { createLocaleAlternates } from '@/lib/seo';
import { getServicesContent } from '@/lib/services-content';

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const content = getServicesContent(params.locale);

  return {
    title: t(params.locale, 'navServices'),
    description: content.introBody,
    alternates: {
      canonical: `/${params.locale}/services`,
      languages: createLocaleAlternates('/services')
    },
    openGraph: {
      title: `${t(params.locale, 'factoryName')} - ${t(params.locale, 'navServices')}`,
      description: content.introBody,
      url: `${SITE_URL}/${params.locale}/services`
    }
  };
}

export default function ServicesPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const content = getServicesContent(locale);

  return (
    <div className="space-y-14">
      <section className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold sm:text-4xl">{content.introTitle}</h1>
        <p className="mt-4 max-w-3xl text-base text-fg/80">{content.introBody}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={`/${locale}/quote`}
            className="rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {t(locale, 'ctaQuote')}
          </Link>
          <a
            href={`https://wa.me/${t(locale, 'phone').replace(/[^\d]/g, '')}`}
            className="rounded-lg border border-border bg-bg px-6 py-3 text-sm font-semibold transition hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {t(locale, 'ctaWhatsApp')}
          </a>
        </div>
      </section>

      <nav aria-label="Service sections" className="rounded-2xl border border-border bg-surface p-4">
        <ul className="flex flex-wrap gap-2">
          {content.services.map((service) => (
            <li key={service.key}>
              <a
                href={`#${service.key}`}
                className="inline-flex rounded-full border border-border px-3 py-1.5 text-sm transition hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {content.services.map((service) => (
        <section key={service.key} id={service.key} className="scroll-mt-28 rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="mt-3 text-sm text-fg/80 sm:text-base">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm sm:text-base">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/quote?service=${service.key}`}
                className="mt-6 inline-flex rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {t(locale, 'ctaQuote')}
              </Link>
            </div>

            <div className={`grid gap-3 ${service.images.length > 1 ? 'sm:grid-cols-2' : ''}`}>
              {service.images.map((image) => (
                <article key={image.alt} className="overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="h-auto w-full"
                    sizes={service.images.length > 1 ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 100vw, 40vw'}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
