'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';
import { Photo } from './Photo';
import { Icon } from './icons';
import { unitLabel } from '@/lib/pricing';
import styles from './Services.module.css';

const SERVICES = [
  { key: 'patios', icon: Icon.drop, seed: 0, src: '/images/IMG_8321.PNG' },
  { key: 'fachadas', icon: Icon.building, seed: 2, src: '/images/IMG_8322.PNG' },
  { key: 'cubiertas', icon: Icon.house, seed: 3, src: '/images/IMG_8288.PNG' },
  { key: 'placas', icon: Icon.sun, seed: 1, src: '/images/IMG_8325.PNG' },
  { key: 'garajes', icon: Icon.car, seed: 4, src: '/images/IMG_8323.PNG' },
  { key: 'muros', icon: Icon.brick, seed: 5, src: '/images/IMG_8284.PNG' },
] as const;

export default function Services() {
  const t = useTranslations('services');

  return (
    <section id="servicios" className="section">
      <div className="container">
        <Reveal className={styles.head}>
          <span className="kicker">{t('kicker')}</span>
          <h2 className="display">
            {t('titleLine1')}
            <br />
            {t('titleLine2Pre')}
            <span className="accent">{t('titleLine2Accent')}</span>
          </h2>
          <p className="lead">{t('subtitle')}</p>
        </Reveal>

        <div className={styles.grid}>
          {SERVICES.map((s, i) => {
            const I = s.icon;
            return (
              <Reveal key={s.key} delay={i * 0.06} className={styles.cardWrap}>
                <article className={styles.card}>
                  <div className={styles.media}>
                    <Photo
                      alt={t(`items.${s.key}.title`)}
                      src={s.src}
                      seed={s.seed}
                      className={styles.mediaPhoto}
                    />
                    <span className={styles.price}>{unitLabel(s.key)}</span>
                  </div>
                  <div className={styles.body}>
                    <span className={styles.icon}>
                      <I />
                    </span>
                    <h3 className={styles.cardTitle}>{t(`items.${s.key}.title`)}</h3>
                    <p className={styles.cardDesc}>{t(`items.${s.key}.desc`)}</p>
                    <span className={styles.more} aria-hidden="true">→</span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
