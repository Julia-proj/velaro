'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './Footer.module.css';

const NAV = ['inicio', 'servicios', 'nosotros', 'trabajos', 'contacto'] as const;

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const tc = useTranslations('contacto');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>VELARO</span>
          <span className={styles.tagline}>{t('tagline')}</span>
        </div>

        <div className={styles.col}>
          <h4>{t('nav')}</h4>
          {NAV.map((n) => (
            <Link key={n} href={`/#${n}`}>{tn(n)}</Link>
          ))}
        </div>

        <div className={styles.col}>
          <h4>{t('contact')}</h4>
          <a href={`mailto:${tc('email')}`}>{tc('email')}</a>
          <a href="tel:+34600123456">{tc('phone')}</a>
        </div>

        <div className={styles.col}>
          <h4>{t('social')}</h4>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://wa.me/34600123456" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          © {year} Velaro Premium Exterior Cleaning. {t('rights')}
        </div>
      </div>
    </footer>
  );
}
