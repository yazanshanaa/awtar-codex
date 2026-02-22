import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactMap } from '@/components/contact-map';
import { type Locale, SITE_URL } from '@/lib/constants';
import { t } from '@/lib/i18n';
import { getContactContent } from '@/lib/contact-content';
import { createLocaleAlternates } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const content = getContactContent(params.locale);
  return {
    title: t(params.locale, 'navContact'),
    description: content.description,
    alternates: {
      canonical: `/${params.locale}/contact`,
      languages: createLocaleAlternates('/contact')
    },
    openGraph: {
      title: `${t(params.locale, 'factoryName')} - ${t(params.locale, 'navContact')}`,
      description: content.description,
      url: `${SITE_URL}/${params.locale}/contact`
    }
  };
}

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const content = getContactContent(params.locale);
  const phone = t(params.locale, 'phone');
  const phoneDigits = phone.replace(/[^\d]/g, '');

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold sm:text-4xl">{content.heading}</h1>
        <p className="mt-4 text-fg/80">{content.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`https://wa.me/${phoneDigits}`} className="rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-black hover:opacity-90">
            {content.buttons.whatsapp}
          </a>
          <a href={`tel:${phone}`} className="rounded-lg border border-border bg-bg px-5 py-3 text-sm font-semibold hover:border-gold">
            {content.buttons.call}
          </a>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">{content.labels.hours}</h2>
          <ul className="mt-3 space-y-2 text-sm text-fg/85">
            {content.hours.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">{content.labels.address}</h2>
          <p className="mt-3 text-sm text-fg/85">{content.addressText}</p>
          <Link
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.mapQuery)}`}
            target="_blank"
            className="mt-4 inline-flex rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-gold"
          >
            {content.buttons.openMap}
          </Link>
        </article>
      </section>

      <section className="rounded-2xl border border-border bg-surface p-6">
        <h2 className="text-xl font-semibold">{content.labels.social}</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {content.socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              className="rounded-full border border-border px-4 py-2 text-sm hover:border-gold"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </section>

      <ContactMap query={content.mapQuery} loadLabel={content.buttons.loadMap} />
    </div>
  );
}
