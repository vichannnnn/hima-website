import createMiddleware from 'next-intl/middleware';
import { defaultLocale, localePrefix, locales, pathnames } from './config';
import { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales: locales,
    defaultLocale: defaultLocale,
    localePrefix: localePrefix,
    pathnames: pathnames,
  });
  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/', '/(ja|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
