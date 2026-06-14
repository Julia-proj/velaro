'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import { Icon } from './icons';
import {
  calculatePrice,
  formatEUR,
  PER_PANEL,
  type SurfaceKey,
} from '@/lib/pricing';
import { SITE } from '@/lib/site';
import styles from './Calculator.module.css';

const SURFACES: SurfaceKey[] = ['placas', 'patios', 'fachadas', 'cubiertas', 'garajes', 'muros'];

const WHATSAPP = SITE.whatsapp;

// Slider config per measurement unit.
const AREA = { min: 5, max: 500, step: 5, def: 40 };
const PANELS = { min: 1, max: 60, step: 1, def: 12 };

function AnimatedNumber({ value }: { value: number }) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={value}
        initial={{ y: 14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -14, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
        style={{ display: 'inline-block' }}
      >
        {formatEUR(value)}
      </motion.span>
    </AnimatePresence>
  );
}

export default function Calculator() {
  const t = useTranslations('calculadora');

  const [surface, setSurface] = useState<SurfaceKey>('placas');
  const [quantity, setQuantity] = useState(PANELS.def);
  const [urgent, setUrgent] = useState(false);

  const isPanels = PER_PANEL[surface];
  const cfg = isPanels ? PANELS : AREA;
  const unit = isPanels ? t('panelUnit') : t('areaUnit');

  const price = useMemo(
    () => calculatePrice({ surface, quantity, urgent }),
    [surface, quantity, urgent]
  );

  const selectSurface = (s: SurfaceKey) => {
    // Switching between m² and panels: reset to a sensible default.
    if (PER_PANEL[s] !== isPanels) setQuantity(PER_PANEL[s] ? PANELS.def : AREA.def);
    setSurface(s);
  };

  const waText = useMemo(() => {
    const msg =
      `Hola Velaro, me gustaría un presupuesto.%0A` +
      `Superficie: ${t(`surfaces.${surface}`)}%0A` +
      `${isPanels ? 'Paneles' : 'Área'}: ${quantity} ${isPanels ? 'paneles' : 'm²'}%0A` +
      `Urgente: ${urgent ? 'Sí' : 'No'}%0A` +
      `Precio web: ${formatEUR(price)}`;
    return `https://wa.me/${WHATSAPP}?text=${msg}`;
  }, [surface, quantity, isPanels, urgent, price, t]);

  return (
    <section id="presupuesto" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal className={styles.head}>
          <span className="kicker">{t('kicker')}</span>
          <h2 className="display">
            {t('titleLine1')} <span className="accent">{t('titleAccent')}</span>
          </h2>
          <p className="lead">{t('subtitle')}</p>
        </Reveal>

        <Reveal delay={0.1} className={styles.panel}>
          <div className={styles.controls}>
            {/* Surface type */}
            <div className={styles.field}>
              <label className={styles.label}>{t('labelSurface')}</label>
              <div className={styles.chips}>
                {SURFACES.map((s) => (
                  <button
                    key={s}
                    className={`${styles.chip} ${surface === s ? styles.chipActive : ''}`}
                    onClick={() => selectSurface(s)}
                  >
                    {t(`surfaces.${s}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity slider (m² or panels) */}
            <div className={styles.field}>
              <label className={styles.label}>
                {isPanels ? t('labelPanels') : t('labelArea')}
                <span className={styles.areaVal}>
                  {quantity} {unit}
                </span>
              </label>
              <input
                type="range"
                min={cfg.min}
                max={cfg.max}
                step={cfg.step}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className={styles.range}
                style={{
                  '--pct': `${((quantity - cfg.min) / (cfg.max - cfg.min)) * 100}%`,
                } as React.CSSProperties}
              />
              <div className={styles.rangeScale}>
                <span>{cfg.min} {unit}</span>
                <span>{cfg.max} {unit}</span>
              </div>
            </div>

            {/* Urgency */}
            <div className={styles.field}>
              <label className={styles.label}>{t('labelUrgency')}</label>
              <div className={styles.segments}>
                <button
                  className={`${styles.segment} ${!urgent ? styles.segmentActive : ''}`}
                  onClick={() => setUrgent(false)}
                >
                  {t('urgency.no')}
                </button>
                <button
                  className={`${styles.segment} ${urgent ? styles.segmentActive : ''}`}
                  onClick={() => setUrgent(true)}
                >
                  {t('urgency.yes')}
                </button>
              </div>
            </div>
          </div>

          {/* Result */}
          <aside className={styles.result}>
            <div className={styles.resultGlow} />
            <span className={styles.resultLabel}>{t('estimateLabel')}</span>
            <div className={styles.amount}>
              <AnimatedNumber value={price} />
            </div>
            <span className={styles.perJob}>{t('perJob')}</span>

            <a
              href={waText}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-primary ${styles.waBtn}`}
            >
              <Icon.whatsapp width={20} height={20} />
              {t('cta')}
            </a>

            <p className={styles.disclaimer}>{t('disclaimer')}</p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
