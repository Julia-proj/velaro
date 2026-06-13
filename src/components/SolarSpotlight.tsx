'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';
import { BeforeAfter } from './BeforeAfter';
import { Icon } from './icons';
import styles from './Split.module.css';

const STATS = [
  ['stat1Value', 'stat1Label'],
  ['stat2Value', 'stat2Label'],
  ['stat3Value', 'stat3Label'],
] as const;

export default function SolarSpotlight() {
  const t = useTranslations('solar');
  const points = t.raw('points') as string[];

  return (
    <section
      id="placas-solares"
      className={`section ${styles.section}`}
      style={{ background: 'var(--bg-elevated)' }}
    >
      <div className={`container ${styles.split}`}>
        <Reveal className={styles.text}>
          <span className="kicker">{t('kicker')}</span>
          <h2 className="display">
            {t('titleLine1')} <span className="accent">{t('titleAccent')}</span>
          </h2>
          <p className="lead" style={{ marginTop: '1.4rem' }}>{t('intro')}</p>

          <ul className={styles.points}>
            {points.map((p) => (
              <li key={p} className={styles.point}>
                <span className={styles.pIcon}>
                  <Icon.check width={20} height={20} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className={styles.stats}>
            {STATS.map(([v, l]) => (
              <div key={l} className={styles.stat}>
                <span className={styles.statValue}>{t(v)}</span>
                <span className={styles.statLabel}>{t(l)}</span>
              </div>
            ))}
          </div>

          <a href="#presupuesto" className={`btn btn-primary ${styles.solarCta}`}>
            <Icon.sun width={20} height={20} />
            {t('cta')}
          </a>
        </Reveal>

        <Reveal delay={0.12} className={styles.visual} y={20}>
          <BeforeAfter
            beforeLabel={t('before')}
            afterLabel={t('after')}
            beforeSrc="/images/IMG_8285.PNG"
            afterSrc="/images/IMG_8286.PNG"
            caption={t('caption')}
          />
        </Reveal>
      </div>
    </section>
  );
}
