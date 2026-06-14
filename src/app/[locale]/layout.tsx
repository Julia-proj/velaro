import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale, getMessages, getTranslations } from 'next-intl/server';
import { Geist, Bricolage_Grotesque } from 'next/font/google';
import { locales, defaultLocale, type Locale } from '@/i18n/config';
import { SITE } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';

const geist = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-geist',
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display-brand',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  // hreflang map: every locale + x-default → Spanish
  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [l, `${SITE.url}/${l}`])
  );
  languages['x-default'] = `${SITE.url}/${defaultLocale}`;

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: t('title'),
      template: t('titleTemplate'),
    },
    description: t('description'),
    keywords: t('keywords'),
    applicationName: SITE.name,
    authors: [{ name: SITE.name }],
    creator: SITE.name,
    publisher: SITE.name,
    category: 'Limpieza',
    alternates: {
      canonical: `${SITE.url}/${locale}`,
      languages,
    },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      title: t('title'),
      description: t('description'),
      url: `${SITE.url}/${locale}`,
      locale: SITE.ogLocale[locale] ?? 'es_ES',
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => SITE.ogLocale[l]),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    formatDetection: { telephone: true, email: true, address: true },
  };
}

export const viewport: Viewport = {
  themeColor: '#0a0c10',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${geist.variable} ${bricolage.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <JsonLd locale={locale} />
      </body>
    </html>
  );
}
