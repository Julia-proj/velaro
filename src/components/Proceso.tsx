'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';
import { Photo } from './Photo';
import { Icon } from './icons';
import styles from './Proceso.module.css';

const ICONS = [Icon.search, Icon.clipboard, Icon.spray, Icon.sparkles];

type Step = { num: string; title: string; desc: string };

export default function Proceso() {
  const t = useTranslations('proceso');
  const steps = t.raw('steps') as Step[];

  return (
    <section className="section">
      <div className={`container ${styles.split}`}>
        <Reveal className={styles.left}>
          <span className="kicker">{t('kicker')}</span>
          <h2 className="display">
            {t('titleLine1')} <span className="accent">{t('titleAccent')}</span>
          </h2>
          <p className="lead">{t('subtitle')}</p>

          <div className={styles.steps}>
            {steps.map((s, i) => {
              const I = ICONS[i];
              return (
                <div key={s.num} className={styles.step}>
                  <div className={styles.stepNum}>{s.num}</div>
                  <div className={styles.timeline}>
                    <div className={styles.dot} />
                    {i < steps.length - 1 && <div className={styles.line} />}
                  </div>
                  <div className={styles.stepContent}>
                    <span className={styles.stepIcon}>
                      <I width={28} height={28} />
                    </span>
                    <div className={styles.stepText}>
                      <h3 className={styles.stepTitle}>{s.title}</h3>
                      <p className={styles.stepDesc}>{s.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.14} className={styles.visual}>
          <div className={styles.imgWrap}>
            <Photo alt="Proceso de limpieza premium" src="/images/IMG_8279.PNG" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
