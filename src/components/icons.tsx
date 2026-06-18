import type { SVGProps } from 'react';

const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export const Icon = {
  drop: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><path d="M12 3s6 6.5 6 10.5a6 6 0 1 1-12 0C6 9.5 12 3 12 3Z" /></svg>
  ),
  sofa: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M3 11a2 2 0 0 1 2 2v3h14v-3a2 2 0 0 1 2-2M5 18v2M19 18v2" /></svg>
  ),
  building: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><path d="M6 21V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v17M15 9h3a1 1 0 0 1 1 1v11M3 21h18M9 7h2M9 11h2M9 15h2" /></svg>
  ),
  house: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><path d="M4 11 12 4l8 7M6 10v10h12V10M10 20v-5h4v5" /></svg>
  ),
  sun: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" /></svg>
  ),
  car: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><path d="M5 11l1.5-4A2 2 0 0 1 8.4 6h7.2a2 2 0 0 1 1.9 1l1.5 4M4 11h16v5H4zM7 16v2M17 16v2" /><circle cx="7.5" cy="13.5" r="1" /><circle cx="16.5" cy="13.5" r="1" /></svg>
  ),
  brick: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><path d="M3 6h18v4H3zM3 14h18v4H3zM9 6v4M15 6v4M6 14v4M12 14v4M18 14v4" /></svg>
  ),
  badge: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><circle cx="12" cy="9" r="5" /><path d="M9 13l-1.5 7 4.5-2.5L16.5 20 15 13" /></svg>
  ),
  leaf: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><path d="M5 19s-1-9 7-13c4-2 7-1 7-1s1 9-7 13c-3 1.6-7 1-7 1ZM5 19 12 9" /></svg>
  ),
  user: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" /></svg>
  ),
  clock: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
  ),
  shield: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6Z" /><path d="m9 12 2 2 4-4" /></svg>
  ),
  search: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><circle cx="11" cy="11" r="6" /><path d="m20 20-3.5-3.5" /></svg>
  ),
  clipboard: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><path d="M9 4h6v3H9zM7 5H5v15h14V5h-2M9 12l1.5 1.5L14 10" /></svg>
  ),
  spray: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><path d="M10 8h5v12h-5zM10 8V5h3M7 6h1M7 9h1M7 12h1M16 11h2M16 14h2" /></svg>
  ),
  sparkles: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><path d="M12 4l1.5 4L18 9.5 13.5 11 12 15l-1.5-4L6 9.5 10.5 8ZM18 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8Z" /></svg>
  ),
  whatsapp: (p: SVGProps<SVGSVGElement>) => (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.042zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01a1.1 1.1 0 0 0-.792.372c-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  ),
  mail: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
  ),
  phone: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><path d="M4 5a1 1 0 0 1 1-1h3l1.5 4-2 1.2a12 12 0 0 0 5.3 5.3l1.2-2 4 1.5v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5Z" /></svg>
  ),
  instagram: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><rect x="4" y="4" width="16" height="16" rx="4.5" /><circle cx="12" cy="12" r="3.5" /><circle cx="17" cy="7" r="0.6" fill="currentColor" /></svg>
  ),
  water: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><path d="M7 4h10M8 4c0 4-3 5-3 9a7 7 0 0 0 14 0c0-4-3-5-3-9" /></svg>
  ),
  check: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><path d="m5 12 4 4L19 6" /></svg>
  ),
  star: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}><path d="m12 4 2.3 5 5.7.6-4.3 3.8 1.3 5.6L12 16.9 6.7 19l1.3-5.6L3.7 9.6 9.4 9Z" /></svg>
  ),
};
