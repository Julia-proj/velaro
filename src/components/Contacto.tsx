'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';
import { Icon } from './icons';
import { SITE } from '@/lib/site';
import styles from './Contacto.module.css';

const WHATSAPP = SITE.whatsapp;

export default function Contacto() {
  const t = useTranslations('contacto');
  const points = t.raw('points') as string[];

  return (
    <section id="contacto" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.left}>
          <span className="kicker">{t('kicker')}</span>
          <h2 className="display">
            {t('titleLine1')} <span className="accent">{t('titleAccent')}</span>
          </h2>
          <p className="lead" style={{ marginTop: '1.4rem' }}>{t('subtitle')}</p>

          <ul className={styles.points}>
            {points.map((p) => (
              <li key={p}>
                <Icon.check width={18} height={18} />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12} className={styles.card}>
          <div className={styles.cardGlow} />
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.waBtn}`}
          >
            <Icon.whatsapp width={20} height={20} />
            {t('whatsapp')}
          </a>

          <div className={styles.channels}>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channel}
            >
              <span className={styles.cIcon}><Icon.whatsapp width={22} height={22} /></span>
              <span>
                <em>WhatsApp</em>
                <strong>{t('whatsapp')}</strong>
              </span>
            </a>
            <a href={`mailto:${t('email')}`} className={styles.channel}>
              <span className={styles.cIcon}><Icon.mail width={22} height={22} /></span>
              <span>
                <em>Email</em>
                <strong>{t('email')}</strong>
              </span>
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className={styles.channel}>
              <span className={styles.cIcon}><Icon.instagram width={22} height={22} /></span>
              <span>
                <em>Instagram</em>
                <strong>{t('instagram')}</strong>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
