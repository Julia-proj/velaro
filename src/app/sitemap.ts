import type { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/i18n/config';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${SITE.url}/${l}`])
  );

  // Stable date — bump when the site content changes (avoids noisy lastmod every build)
  const lastModified = new Date('2026-06-14');

  return locales.map((locale) => ({
    url: `${SITE.url}/${locale}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: locale === defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
}
