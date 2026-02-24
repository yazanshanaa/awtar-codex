import { notFound } from 'next/navigation';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { type Locale, SUPPORTED_LOCALES } from '@/lib/constants';

export default function SiteLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (!SUPPORTED_LOCALES.includes(params.locale as Locale)) notFound();
  const locale = params.locale as Locale;

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-gold focus:px-3 focus:py-2 focus:text-black">
        Skip to content
      </a>
      <Navbar locale={locale} />
      <main id="main-content" className="mx-auto min-h-[70vh] max-w-6xl px-4 py-10">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
