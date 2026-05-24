/**
 * Velaro pricing model — pure functions, no UI.
 * Tune these numbers freely; nothing else needs to change.
 *
 * Price = area(m²) × basePricePerM2[surface] × dirtMultiplier × urgencyMultiplier
 * Result is clamped to a minimum call-out fee and returned as a ± range.
 */

export type SurfaceKey =
  | 'patios'
  | 'fachadas'
  | 'cubiertas'
  | 'placas'
  | 'garajes'
  | 'muros';

export type DirtKey = 'low' | 'medium' | 'high';

// €/m² base rate per surface type
export const BASE_PRICE_PER_M2: Record<SurfaceKey, number> = {
  patios: 4.0,
  fachadas: 6.0,
  cubiertas: 7.5,
  placas: 3.0,
  garajes: 3.5,
  muros: 4.5,
};

export const DIRT_MULTIPLIER: Record<DirtKey, number> = {
  low: 1.0,
  medium: 1.25,
  high: 1.6,
};

export const URGENCY_MULTIPLIER = { no: 1.0, yes: 1.2 } as const;

export const MIN_PRICE = 90; // minimum call-out (€)
export const RANGE_SPREAD = 0.15; // ±15% shown as a range

export interface QuoteInput {
  surface: SurfaceKey;
  area: number; // m²
  dirt: DirtKey;
  urgent: boolean;
}

export interface QuoteResult {
  low: number;
  high: number;
  mid: number;
}

export function calculateQuote({
  surface,
  area,
  dirt,
  urgent,
}: QuoteInput): QuoteResult {
  const raw =
    area *
    BASE_PRICE_PER_M2[surface] *
    DIRT_MULTIPLIER[dirt] *
    (urgent ? URGENCY_MULTIPLIER.yes : URGENCY_MULTIPLIER.no);

  const mid = Math.max(MIN_PRICE, raw);
  const round = (n: number) => Math.round(n / 5) * 5;

  return {
    low: round(mid * (1 - RANGE_SPREAD)),
    high: round(mid * (1 + RANGE_SPREAD)),
    mid: round(mid),
  };
}

export function formatEUR(n: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(n);
}
