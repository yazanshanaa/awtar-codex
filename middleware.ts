import { NextResponse, type NextRequest } from 'next/server';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from '@/lib/constants';

function pickLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const supported = new Set(SUPPORTED_LOCALES);
  for (const language of acceptLanguage.split(',')) {
    const code = language.trim().split(';')[0]?.slice(0, 2) as Locale;
    if (supported.has(code)) return code;
  }
  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    const locale = pickLocale(request);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  const segment = pathname.split('/')[1];
  const locale = SUPPORTED_LOCALES.includes(segment as Locale) ? (segment as Locale) : DEFAULT_LOCALE;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-locale', locale);

  return NextResponse.next({
    request: { headers: requestHeaders }
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)']
};
