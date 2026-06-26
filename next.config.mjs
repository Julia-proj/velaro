import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  outputFileTracingRoot: process.cwd(),
  // SEO: el dominio canónico es velaroexterior.es. Redirige de forma
  // permanente cualquier acceso por la URL técnica de Vercel para evitar
  // contenido duplicado y consolidar toda la autoridad en el dominio real.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'velaro-puce.vercel.app' }],
        destination: 'https://velaroexterior.es/:path*',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
