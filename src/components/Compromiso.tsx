'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';
import { Photo } from './Photo';
import { Icon } from './icons';
import styles from './Split.module.css';

const ICONS = [Icon.badge, Icon.leaf, Icon.user, Icon.clock, Icon.shield, Icon.sparkles, Icon.check, Icon.star];

export default function Compromiso() {
  const t = useTranslations('compromiso');
  const points = t.raw('points') as string[];

  return (
    <section id="nosotros" className={`section ${styles.section}`}>
      <div className={`container ${styles.split} ${styles.reverse}`}>
        <Reveal className={styles.visual} y={20}>
          <div style={{ position: 'relative', aspectRatio: '4 / 3', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--surface-line)', boxShadow: 'var(--shadow-card)' }}>
            <Photo alt="Terraza premium al atardecer" src="/images/IMG_8281.PNG" seed={4} />
          </div>
        </Reveal>

        <Reveal delay={0.1} className={styles.text}>
          <span className="kicker">{t('kicker')}</span>
          <h2 className="display">
            {t('titleLine1')} <span className="accent">{t('titleAccent')}</span>
          </h2>
          <p className="lead" style={{ marginTop: '1.4rem' }}>{t('intro')}</p>
          <ul className={styles.points}>
            {points.map((p, i) => {
              const I = ICONS[i % ICONS.length];
              return (
                <li key={p} className={styles.point}>
                  <span className={styles.pIcon}><I width={22} height={22} /></span>
                  {p}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
