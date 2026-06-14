'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';
import { Icon } from './icons';
import Calculator from './Calculator';
import { BASE_PRICE, PER_PANEL, type SurfaceKey } from '@/lib/pricing';
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

        <div className={styles.grid}>
          {ROWS.map(({ key, icon: I }, i) => (
            <Reveal key={key} delay={i * 0.05}>
              <div className={`${styles.tariff} ${key === 'placas' ? styles.featured : ''}`}>
                {key === 'placas' && <span className={styles.star}>{t('featured')}</span>}
                <span className={styles.icon}><I width={24} height={24} /></span>
                <span className={styles.name}>{ts(`items.${key}.title`)}</span>
                <span className={styles.price}>
                  {BASE_PRICE[key]} €
                  <span className={styles.unit}>/{PER_PANEL[key] ? 'panel' : 'm²'}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className={styles.strip}>
          <span className={styles.chip}>
            <strong>{t('minValue')}</strong> {t('min')}
          </span>
          <span className={styles.chip}>
            <strong>{t('urgentValue')}</strong> {t('urgent')}
          </span>
        </Reveal>

        <p className={styles.note}>{t('note')}</p>

        <Calculator />
      </div>
    </section>
  );
}
