/**
 * Single source of truth for site-wide SEO / business data.
 * Set NEXT_PUBLIC_SITE_URL in Vercel to your real domain when it changes.
 */

const DEFAULT_SITE_URL = 'https://velaroexterior.es';

/**
 * Normalize NEXT_PUBLIC_SITE_URL into a valid absolute origin.
 * Tolerates a bare domain ("velaroexterior.es"), an http:// value, or a
 * trailing slash so a misconfigured env var can never crash the build
 * (e.g. `new URL(SITE.url)` in generateMetadata).
 */
function resolveSiteUrl(raw: string | undefined): string {
  const value = raw?.trim();
  if (!value) return DEFAULT_SITE_URL;
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    return new URL(withProtocol).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const SITE = {
  name: 'Velaro',
  legalName: 'Velaro Exterior Cleaning',
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  email: 'info@velaroexterior.es',

  // ── Contacto ───────────────────────────────────────────────
  whatsapp: '34624813480', // formato internacional sin + ni espacios
  phone: '+34624813480',
  phoneDisplay: '+34 624 813 480',
  hasPhone: true,
  // Local SEO signals
  locality: 'Madrid',
  region: 'Comunidad de Madrid',
  country: 'ES',
  postalCode: '28001',
  geo: { lat: 40.4168, lng: -3.7038 },
  areaServed: [
    'Madrid',
    'Las Rozas de Madrid',
    'Pozuelo de Alarcón',
    'Majadahonda',
    'Boadilla del Monte',
    'Comunidad de Madrid',
  ],
  priceRange: '€€',
  openingHours: 'Mo-Su 08:00-20:00',
  ogLocale: { es: 'es_ES', en: 'en_US', ru: 'ru_RU' } as Record<string, string>,
} as const;
