/**
 * Velaro pricing model — pure functions, no UI.
 * Tune these numbers freely; nothing else needs to change.
 *
 * Price = quantity × unitPrice[surface] (clamped to a minimum call-out fee),
 * then +20% if the job is urgent. Shown as a small ± range.
 *
 * `placas` (solar panels) is priced per panel; every other surface per m².
 */

export type SurfaceKey =
  | 'patios'
  | 'fachadas'
  | 'cubiertas'
  | 'placas'
  | 'garajes'
  | 'muros';

// Unit price per surface (€/m², except `placas` which is €/panel).
export const BASE_PRICE: Record<SurfaceKey, number> = {
  patios: 5,
  garajes: 5,
  muros: 5,
  fachadas: 7,
  cubiertas: 7,
  placas: 10, // €/panel
};

// Surfaces charged per solar panel instead of per m².
export const PER_PANEL: Record<SurfaceKey, boolean> = {
  patios: false,
  fachadas: false,
  cubiertas: false,
  garajes: false,
  muros: false,
  placas: true,
};

export const URGENCY_SURCHARGE = 0.2; // +20% for urgent service
export const MIN_PRICE = 120; // minimum call-out (€)

/** "10 €/panel" or "5 €/m²" for a given surface. */
export function unitLabel(surface: SurfaceKey): string {
  return PER_PANEL[surface]
    ? `${BASE_PRICE[surface]} €/panel`
    : `${BASE_PRICE[surface]} €/m²`;
}

export interface QuoteInput {
  surface: SurfaceKey;
  quantity: number; // m² or number of panels depending on the surface
  urgent: boolean;
}

/**
 * Exact price for the entered quantity:
 * quantity × unit rate, never below the minimum call-out, +20% if urgent.
 */
export function calculatePrice({
  surface,
  quantity,
  urgent,
}: QuoteInput): number {
  const raw = quantity * BASE_PRICE[surface];
  const withMin = Math.max(MIN_PRICE, raw);
  const total = withMin * (urgent ? 1 + URGENCY_SURCHARGE : 1);
  return Math.round(total);
}

export function formatEUR(n: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(n);
}
