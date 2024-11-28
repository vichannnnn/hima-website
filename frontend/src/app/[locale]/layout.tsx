import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { getMessages } from 'next-intl/server';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Providers } from '@providers/Providers';
import '../globals.css';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('Index.title'),
    description: t('Index.description'),
    keywords: t('Index.keywords'),
    openGraph: {
      title: t('Index.title'),
      description: t('Index.description'),
      images: [
        {
          url: 'https://image.himaa.me/hima-chan-posing.png',
        },
      ],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
