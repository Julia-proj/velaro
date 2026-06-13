'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';
import { Icon } from './icons';
import { unitLabel, type SurfaceKey } from '@/lib/pricing';
import styles from './Precios.module.css';

const ROWS: { key: SurfaceKey; icon: typeof Icon.sun }[] = [
  { key: 'placas', icon: Icon.sun },
  { key: 'patios', icon: Icon.drop },
  { key: 'fachadas', icon: Icon.building },
  { key: 'cubiertas', icon: Icon.house },
  { key: 'garajes', icon: Icon.car },
  { key: 'muros', icon: Icon.brick },
];

export default function Precios() {
  const t = useTranslations('precios');
  const ts = useTranslations('services');

  return (
    <section id="precios" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal className={styles.head}>
          <span className="kicker">{t('kicker')}</span>
          <h2 className="display">
            {t('titleLine1')} <span className="accent">{t('titleAccent')}</span>
          </h2>
          <p className="lead" style={{ marginTop: '1.2rem', marginInline: 'auto' }}>
            {t('subtitle')}
          </p>
        </Reveal>

        <Reveal delay={0.1} className={styles.card}>
          {ROWS.map(({ key, icon: I }) => (
            <div
              key={key}
              className={`${styles.row} ${key === 'placas' ? styles.featured : ''}`}
            >
              <span className={styles.rowLeft}>
                <span className={styles.icon}><I width={22} height={22} /></span>
                {ts(`items.${key}.title`)}
              </span>
              <span className={styles.price}>{unitLabel(key)}</span>
            </div>
          ))}

          <div className={`${styles.row} ${styles.extra}`}>
            <span className={styles.rowLeft}>{t('min')}</span>
            <span className={styles.price}>{t('minValue')}</span>
          </div>
          <div className={`${styles.row} ${styles.extra}`}>
            <span className={styles.rowLeft}>{t('urgent')}</span>
            <span className={styles.price}>{t('urgentValue')}</span>
          </div>

          <p className={styles.note}>{t('note')}</p>
        </Reveal>
      </div>
    </section>
  );
}
