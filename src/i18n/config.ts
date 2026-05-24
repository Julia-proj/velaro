export const locales = ['es', 'en', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const localeNames: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
  ru: 'RU',
};
