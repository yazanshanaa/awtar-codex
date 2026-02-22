import { notFound } from 'next/navigation';
import { type Locale, SUPPORTED_LOCALES } from '@/lib/constants';
import { getDirection } from '@/lib/i18n';

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (!SUPPORTED_LOCALES.includes(params.locale as Locale)) {
    notFound();
  }

  return (
    <div lang={params.locale} dir={getDirection(params.locale as Locale)}>
      {children}
    </div>
  );
}
