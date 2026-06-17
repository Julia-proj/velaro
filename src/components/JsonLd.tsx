import { getTranslations } from 'next-intl/server';
import { SITE } from '@/lib/site';
import { BASE_PRICE, PER_PANEL, type SurfaceKey } from '@/lib/pricing';

const SERVICE_KEYS: SurfaceKey[] = [
  'patios',
  'fachadas',
  'cubiertas',
  'placas',
  'garajes',
  'muros',
];

/**
 * Server-rendered JSON-LD structured data.
 * Helps Google show rich results and rank the business locally.
 */
export async function JsonLd({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'services' });
  const tf = await getTranslations({ locale, namespace: 'faq' });
  const base = SITE.url;
  const ogImage = `${base}/opengraph-image`;

  const business = {
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${base}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: base,
    telephone: SITE.phone,
    email: SITE.email,
    image: ogImage,
    logo: `${base}/icon.svg`,
    priceRange: SITE.priceRange,
    currenciesAccepted: 'EUR',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      postalCode: SITE.postalCode,
      addressCountry: SITE.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: SITE.areaServed.map((name) => ({ '@type': 'City', name })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '20:00',
    },
    sameAs: [SITE.instagram],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de limpieza exterior',
      itemListElement: SERVICE_KEYS.map((key) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: t(`items.${key}.title`),
          description: t(`items.${key}.desc`),
          serviceType: t(`items.${key}.title`),
          areaServed: SITE.locality,
          provider: { '@id': `${base}/#business` },
        },
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: BASE_PRICE[key],
          priceCurrency: 'EUR',
          unitText: PER_PANEL[key] ? 'panel' : 'm²',
        },
      })),
    },
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${base}/#website`,
    url: base,
    name: SITE.name,
    inLanguage: locale,
    publisher: { '@id': `${base}/#business` },
  };

  const faqItems = tf.raw('items') as { q: string; a: string }[];
  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${base}/#faq`,
    mainEntity: faqItems.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };

  const json = {
    '@context': 'https://schema.org',
    '@graph': [business, website, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
