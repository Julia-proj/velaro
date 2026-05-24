'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';
import { BeforeAfter } from './BeforeAfter';
import styles from './Split.module.css';

export default function CompareSection() {
  const t = useTranslations('compare');

  return (
    <section id="trabajos" className={`section ${styles.section}`}>
      <div className={`container ${styles.split}`}>
        <Reveal className={styles.text}>
          <span className="kicker">{t('kicker')}</span>
          <h2 className="display">
            {t('titleLine1')} <span className="accent">{t('titleAccent')}</span>
          </h2>
          <p className="lead">{t('subtitle')}</p>
        </Reveal>

        <Reveal delay={0.12} className={styles.visual}>
          <BeforeAfter
            beforeLabel={t('before')}
            afterLabel={t('after')}
            beforeSrc="/images/IMG_8283.PNG"
            afterSrc="/images/IMG_8284.PNG"
          />
        </Reveal>
      </div>
    </section>
  );
}
