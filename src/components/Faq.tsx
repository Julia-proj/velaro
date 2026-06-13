'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';
import styles from './Faq.module.css';

type QA = { q: string; a: string };

export default function Faq() {
  const t = useTranslations('faq');
  const items = t.raw('items') as QA[];

  return (
    <section id="faq" className="section">
      <div className="container">
        <Reveal className={styles.head}>
          <span className="kicker">{t('kicker')}</span>
          <h2 className="display">
            {t('titleLine1')} <span className="accent">{t('titleAccent')}</span>
          </h2>
        </Reveal>

        <div className={styles.list}>
          {items.map((it, i) => (
            <Reveal key={it.q} delay={i * 0.05}>
              <details className={styles.item}>
                <summary className={styles.q}>
                  {it.q}
                  <span className={styles.icon} aria-hidden="true">+</span>
                </summary>
                <p className={styles.a}>{it.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
