import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Velaro — Limpieza exterior profesional',
    short_name: 'Velaro',
    description:
      'Limpieza exterior profesional en Madrid: patios, fachadas, placas solares y más.',
    start_url: `/${'es'}`,
    display: 'standalone',
    background_color: '#0a0c10',
    theme_color: '#0a0c10',
    lang: 'es',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
    categories: ['business', 'utilities'],
  };
}
