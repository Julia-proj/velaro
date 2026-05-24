'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';
import { Icon } from './icons';
import styles from './Resenas.module.css';

type Review = { name: string; location: string; text: string };

export default function Resenas() {
  const t = useTranslations('reseñas');
  const items = t.raw('items') as Review[];

  return (
    <section className="section">
      <div className="container">
        <Reveal className={styles.head}>
          <span className="kicker">{t('kicker')}</span>
          <h2 className="display">
            {t('titleLine1')} <span className="accent">{t('titleAccent')}</span>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {items.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08} className={styles.cardWrap}>
              <figure className={styles.card}>
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon.star key={s} width={16} height={16} fill="var(--accent-bright)" stroke="var(--accent-bright)" />
                  ))}
                </div>
                <blockquote className={styles.text}>“{r.text}”</blockquote>
                <figcaption className={styles.author}>
                  <span className={styles.avatar}>{r.name.charAt(0)}</span>
                  <span>
                    <strong>{r.name}</strong>
                    <em>{r.location}</em>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
