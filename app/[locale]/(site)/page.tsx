import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { type Locale, SITE_URL } from '@/lib/constants';
import { t } from '@/lib/i18n';
import { createLocaleAlternates } from '@/lib/seo';
import { getHomeContent } from '@/lib/home-content';

function ServiceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M4 11h16v2H4zm7-7h2v16h-2z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M9.55 18.2L3.8 12.45l1.4-1.4 4.35 4.35 9.25-9.25 1.4 1.4z" />
    </svg>
  );
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const content = getHomeContent(params.locale);
  return {
    title: t(params.locale, 'factoryName'),
    description: t(params.locale, 'tagline'),
    alternates: {
      canonical: `/${params.locale}`,
      languages: createLocaleAlternates('')
    },
    openGraph: {
      title: t(params.locale, 'factoryName'),
      description: t(params.locale, 'tagline'),
      url: `${SITE_URL}/${params.locale}`
    },
    twitter: {
      title: t(params.locale, 'factoryName'),
      description: content.hero.trustLine
    }
  };
}

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const content = getHomeContent(locale);
  const localBusinessJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: t(locale, 'factoryName'),
    description: t(locale, 'tagline'),
    telephone: t(locale, 'phone'),
    email: t(locale, 'email'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: t(locale, 'address')
    }
  });

  return (
    <div className="space-y-16">
      <section className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-10">
        <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">{content.hero.title}</h1>
        <p className="mt-4 text-sm text-fg/75 sm:text-base">{content.hero.trustLine}</p>
        <div className="mt-8 flex flex-wrap gap-3">
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

      <section>
        <h2 className="mb-5 text-2xl font-semibold">{content.beforeAfter.title}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {content.beforeAfter.items.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                width={1200}
                height={800}
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <h3 className="p-4 text-base font-medium">{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-semibold">{content.services.title}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.items.map((service) => (
            <Link
              key={service.id}
              href={`/${locale}/services#${service.id}`}
              className="rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-gold hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <div className="mb-3 inline-flex rounded-full border border-border bg-bg p-2">
                <ServiceIcon />
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-fg/80">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-semibold">{content.whyUs.title}</h2>
        <ul className="space-y-3">
          {content.whyUs.points.map((point) => (
            <li key={point} className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm sm:text-base">
              <CheckIcon />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-semibold">{content.testimonials.title}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.testimonials.items.map((item) => (
            <blockquote key={item.name} className="rounded-xl border border-border bg-surface p-4 text-sm shadow-sm">
              <p className="text-fg/85">“{item.quote}”</p>
              <footer className="mt-3 text-xs font-semibold text-gold">{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <Script id="local-business-jsonld" type="application/ld+json" strategy="afterInteractive">
        {localBusinessJsonLd}
      </Script>
    </div>
  );
}
