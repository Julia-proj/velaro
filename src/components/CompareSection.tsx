'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';
import { BeforeAfter } from './BeforeAfter';
import styles from './Split.module.css';

// Each pair lines up by index with the captions in messages → compare.items
const PAIRS = [
  { before: '/images/IMG_8283.PNG', after: '/images/IMG_8284.PNG' }, // Patios y terrazas
  { before: '/images/IMG_8304.PNG', after: '/images/IMG_8305.PNG' }, // Terrazas
  { before: '/images/IMG_8285.PNG', after: '/images/IMG_8286.PNG' }, // Placas solares
  { before: '/images/IMG_8326.PNG', after: '/images/IMG_8325.PNG' }, // Placas solares
  { before: '/images/IMG_8307.PNG', after: '/images/IMG_8306.JPG.jpeg' }, // Garajes
  { before: '/images/IMG_8312.PNG', after: '/images/IMG_8311.PNG' }, // Entradas y accesos
];

export default function CompareSection() {
  const t = useTranslations('compare');
  const captions = t.raw('items') as string[];

  return (
    <section id="trabajos" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal className={styles.galleryHead}>
          <span className="kicker">{t('kicker')}</span>
          <h2 className="display">
            {t('titleLine1')} <span className="accent">{t('titleAccent')}</span>
          </h2>
          <p className="lead">{t('subtitle')}</p>
        </Reveal>

        <div className={styles.gallery}>
          {PAIRS.map((p, i) => (
            <Reveal key={p.before} delay={(i % 2) * 0.1}>
              <BeforeAfter
                beforeLabel={t('before')}
                afterLabel={t('after')}
                beforeSrc={p.before}
                afterSrc={p.after}
                caption={captions[i]}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
