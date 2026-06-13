'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';
import { Photo } from './Photo';
import { Icon } from './icons';
import styles from './Split.module.css';

export default function Tecnologia() {
  const t = useTranslations('tecnologia');
  const points = t.raw('points') as string[];

  return (
    <section className={`section ${styles.section}`} style={{ background: 'var(--bg-elevated)' }}>
      <div className={`container ${styles.split}`}>
        <Reveal className={styles.text}>
          <span className="kicker">{t('kicker')}</span>
          <h2 className="display">
            {t('titleLine1')}
            <br />
            {t('titleLine2Pre')}
            <span className="accent">{t('titleLine2Accent')}</span>
          </h2>
          <p className="lead" style={{ marginTop: '1.4rem' }}>{t('subtitle')}</p>
          <ul className={styles.points}>
            {points.map((p) => (
              <li key={p} className={styles.point}>
                <span className={styles.pIcon}><Icon.check width={20} height={20} /></span>
                {p}
              </li>
            ))}
          </ul>
          <p className={styles.footnote}>{t('footnote')}</p>
        </Reveal>

        <Reveal delay={0.12} className={styles.visual} y={20}>
          <div style={{ width: '100%', maxWidth: '440px', marginInline: 'auto', aspectRatio: '4 / 3', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--surface-line)', boxShadow: 'var(--shadow-card)' }}>
            <Photo alt="Resultado de limpieza profesional de placas solares" src="/images/IMG_8286.PNG" seed={2} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
