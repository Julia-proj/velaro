'use client';

import { useTranslations } from 'next-intl';
import { Icon } from './icons';
import styles from './TrustBand.module.css';

const ICONS = [Icon.check, Icon.shield, Icon.house, Icon.clock] as const;

export default function TrustBand() {
  const t = useTranslations('trust');
  const items = t.raw('items') as string[];

  return (
    <div className={styles.band}>
      <div className={`container ${styles.inner}`}>
        {items.map((it, i) => {
          const I = ICONS[i % ICONS.length];
          return (
            <span key={it} className={styles.item}>
              <I width={20} height={20} />
              {it}
            </span>
          );
        })}
      </div>
    </div>
  );
}
