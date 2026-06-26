'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Icon } from './icons';
import { SITE } from '@/lib/site';
import styles from './MobileCta.module.css';

export default function MobileCta() {
  const t = useTranslations('hero');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('inicio');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.bar} ${visible ? styles.visible : ''}`}>
      <Link href="/#presupuesto" className={`btn btn-primary ${styles.primary}`}>
        {t('cta')}
      </Link>
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.wa}
        aria-label="WhatsApp"
      >
        <Icon.whatsapp width={24} height={24} />
      </a>
    </div>
  );
}
