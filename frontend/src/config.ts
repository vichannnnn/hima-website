import { Pathnames, LocalePrefix } from 'next-intl/routing';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'ja'] as const;

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/pathnames': {
    en: '/en',
    ja: '/ja',
  },
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';
