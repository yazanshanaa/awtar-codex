import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { type Locale, SITE_URL } from '@/lib/constants';
import { t } from '@/lib/i18n';
import { createLocaleAlternates } from '@/lib/seo';
import { getAboutContent } from '@/lib/about-content';

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const content = getAboutContent(params.locale);
  return {
    title: t(params.locale, 'navAbout'),
    description: content.intro,
    alternates: {
      canonical: `/${params.locale}/about`,
      languages: createLocaleAlternates('/about')
    },
    openGraph: {
      title: `${t(params.locale, 'factoryName')} - ${t(params.locale, 'navAbout')}`,
      description: content.intro,
      url: `${SITE_URL}/${params.locale}/about`
    }
  };
}

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const content = getAboutContent(params.locale);

  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold sm:text-4xl">{content.heading}</h1>
        <p className="mt-4 max-w-3xl text-fg/80">{content.intro}</p>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        <article className="rounded-2xl border border-border bg-surface p-6 lg:col-span-2">
          <h2 className="text-2xl font-semibold">{content.storyTitle}</h2>
          <p className="mt-3 text-fg/85">{content.storyBody}</p>
        </article>
        <article className="rounded-2xl border border-border bg-surface p-6 text-center">
          <p className="text-sm font-medium text-fg/70">{content.experienceLabel}</p>
          <p className="mt-2 text-5xl font-bold text-gold">{content.yearsExperience}+</p>
        </article>
      </section>

      <section className="rounded-2xl border border-border bg-surface p-6">
        <h2 className="text-2xl font-semibold">{content.areasTitle}</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {content.areas.map((area) => (
            <li key={area} className="rounded-lg border border-border bg-bg px-4 py-2 text-sm">{area}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">{content.workshopTitle}</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {content.workshopImages.map((image) => (
            <article key={image.alt} className="overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-gold bg-surface p-6">
        <h2 className="text-2xl font-semibold text-gold">{content.warrantyTitle}</h2>
        <p className="mt-3 text-fg/85">{content.warrantyBody}</p>
      </section>

      <section className="flex flex-wrap gap-3">
        <Link href={`/${params.locale}/quote`} className="rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-black hover:opacity-90">
          {t(params.locale, 'ctaQuote')}
        </Link>
        <a href={`https://wa.me/${t(params.locale, 'phone').replace(/[^\d]/g, '')}`} className="rounded-lg border border-border bg-bg px-5 py-3 text-sm font-semibold hover:border-gold">
          {t(params.locale, 'ctaWhatsApp')}
        </a>
      </section>
    </div>
  );
}
