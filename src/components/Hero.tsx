'use client';

import { Fragment } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Photo } from './Photo';
import { Icon } from './icons';
import styles from './Hero.module.css';

const ease = [0.2, 0.8, 0.2, 1] as const;
const TAG_ICONS = [Icon.drop, Icon.sparkles, Icon.house, Icon.leaf] as const;

export default function Hero() {
  const t = useTranslations('hero');
  const tags = t.raw('tags') as string[];

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.bg}>
        <Photo alt="Villa exterior premium" src="/images/IMG_8278.PNG" seed={3} className={styles.bgPhoto} />
        <div className={styles.scrim} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <motion.span
            className="kicker"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            {t('kicker')}
          </motion.span>

          <h1 className={styles.title}>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
            >
              {t('titleLine1')}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease }}
            >
              {t('titleLine2Pre')}
              <span className="accent">{t('titleLine2Accent')}</span>
            </motion.span>
          </h1>

          <motion.span
            className={styles.rule}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
          />

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            className={styles.tags}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease }}
          >
            {tags.map((tag, i) => {
              const I = TAG_ICONS[i % TAG_ICONS.length];
              return (
                <Fragment key={tag}>
                  {i > 0 && <i className={styles.sep} />}
                  <span className={styles.tag}>
                    <span className={styles.tagIcon}><I width={20} height={20} /></span>
                    <span>{tag}</span>
                  </span>
                </Fragment>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72, ease }}
          >
            <Link href="/#contacto" className="btn btn-ghost">
              {t('cta')}
              <span className="arrow">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
