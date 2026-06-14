'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SITE } from '@/lib/site';
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
          <span className={styles.areas}>
            {t('areasLabel')}: {SITE.areaServed.slice(0, 5).join(' · ')}
          </span>
        </div>

        <div className={styles.col}>
          <h3>{t('nav')}</h3>
          {NAV.map((n) => (
            <Link key={n} href={`/#${n}`}>{tn(n)}</Link>
          ))}
        </div>

        <div className={styles.col}>
          <h3>{t('contact')}</h3>
          <a href={`mailto:${tc('email')}`}>{tc('email')}</a>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>

        <div className={styles.col}>
          <h3>{t('social')}</h3>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
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
