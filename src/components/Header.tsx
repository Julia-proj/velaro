'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { locales, localeNames, type Locale } from '@/i18n/config';
import styles from './Header.module.css';

const SECTIONS = [
  ['inicio', '#inicio'],
  ['servicios', '#servicios'],
  ['nosotros', '#nosotros'],
  ['trabajos', '#trabajos'],
  ['contacto', '#contacto'],
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const switchLocale = (next: Locale) => {
    router.replace(pathname, { locale: next });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/#inicio" className={styles.logo} aria-label="Velaro">
          <span className={styles.mark} aria-hidden="true">
            <svg viewBox="0 0 40 44" width="34" height="38">
              {/* Full V body — silver gradient (left arm + structure) */}
              <path d="M2 4 L20 40 L38 4 L30 4 L20 26 L10 4 Z" fill="url(#vg)" />
              {/* Blue right arm — parallelogram overlaying the right arm */}
              <path d="M38 4 L30 4 L19 26 L27 26 Z" fill="url(#bg)" />
              {/* Blue bottom diamond at V tip */}
              <path d="M20 28 L22 34 L20 40 L18 34 Z" fill="var(--accent-bright)" />
              <defs>
                <linearGradient id="vg" x1="0" y1="0" x2="0.6" y2="1">
                  <stop offset="0" stopColor="#e8eef8" />
                  <stop offset="1" stopColor="#7a8799" />
                </linearGradient>
                <linearGradient id="bg" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#74b3ff" />
                  <stop offset="1" stopColor="#2f7de8" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className={styles.wordmark}>
            <strong>VELARO</strong>
            <em>Premium Exterior Cleaning</em>
          </span>
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {SECTIONS.map(([key, href]) => (
            <Link
              key={key}
              href={href}
              className={styles.navLink}
              onClick={() => setOpen(false)}
            >
              {t(key)}
            </Link>
          ))}
          <div className={styles.langMobile}>
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={l === locale ? styles.langActive : ''}
              >
                {localeNames[l]}
              </button>
            ))}
          </div>
        </nav>

        <div className={styles.right}>
          <div className={styles.lang}>
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={l === locale ? styles.langActive : ''}
                aria-label={localeNames[l]}
              >
                {localeNames[l]}
              </button>
            ))}
          </div>
          <Link href="/#contacto" className={`btn btn-ghost ${styles.cta}`}>
            {t('presupuesto')}
            <span className="arrow">→</span>
          </Link>
          <button
            className={styles.burger}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
