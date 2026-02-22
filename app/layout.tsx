import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Inter } from 'next/font/google';
import './globals.css';
import { getDirection, normalizeLocale } from '@/lib/i18n';
import { FACTORY_NAME, SITE_URL } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: FACTORY_NAME,
    template: `%s | ${FACTORY_NAME}`
  },
  description: 'Professional ironwork solutions for homes, retail, and industrial facilities.',
  openGraph: {
    title: FACTORY_NAME,
    description: 'Professional ironwork solutions for homes, retail, and industrial facilities.',
    url: SITE_URL,
    siteName: FACTORY_NAME,
    type: 'website',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: FACTORY_NAME }]
  },
  twitter: {
    card: 'summary_large_image',
    title: FACTORY_NAME,
    description: 'Professional ironwork solutions for homes, retail, and industrial facilities.',
    images: ['/og.svg']
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = normalizeLocale(headers().get('x-locale'));

  return (
    <html lang={locale} dir={getDirection(locale)} suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
