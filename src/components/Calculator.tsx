'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import { Icon } from './icons';
import {
  calculateQuote,
  formatEUR,
  type SurfaceKey,
  type DirtKey,
} from '@/lib/pricing';
import styles from './Calculator.module.css';

const SURFACES: SurfaceKey[] = ['patios', 'fachadas', 'cubiertas', 'placas', 'garajes', 'muros'];
const DIRT: DirtKey[] = ['low', 'medium', 'high'];

// WhatsApp number in international format, no + or spaces
const WHATSAPP = '34600123456';

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

  const [surface, setSurface] = useState<SurfaceKey>('patios');
  const [area, setArea] = useState(40);
  const [dirt, setDirt] = useState<DirtKey>('medium');
  const [urgent, setUrgent] = useState(false);

  const quote = useMemo(
    () => calculateQuote({ surface, area, dirt, urgent }),
    [surface, area, dirt, urgent]
  );

  const waText = useMemo(() => {
    const msg =
      `Hola Velaro, me gustaría un presupuesto.%0A` +
      `Superficie: ${t(`surfaces.${surface}`)}%0A` +
      `Área: ${area} m²%0A` +
      `Suciedad: ${t(`dirtLevels.${dirt}`)}%0A` +
      `Urgente: ${urgent ? 'Sí' : 'No'}%0A` +
      `Estimación web: ${formatEUR(quote.low)}–${formatEUR(quote.high)}`;
    return `https://wa.me/${WHATSAPP}?text=${msg}`;
  }, [surface, area, dirt, urgent, quote, t]);

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
                    onClick={() => setSurface(s)}
                  >
                    {t(`surfaces.${s}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Area slider */}
            <div className={styles.field}>
              <label className={styles.label}>
                {t('labelArea')}
                <span className={styles.areaVal}>
                  {area} {t('areaUnit')}
                </span>
              </label>
              <input
                type="range"
                min={5}
                max={500}
                step={5}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className={styles.range}
                style={{ '--pct': `${((area - 5) / 495) * 100}%` } as React.CSSProperties}
              />
              <div className={styles.rangeScale}>
                <span>5 {t('areaUnit')}</span>
                <span>500 {t('areaUnit')}</span>
              </div>
            </div>

            {/* Dirt level */}
            <div className={styles.field}>
              <label className={styles.label}>{t('labelDirt')}</label>
              <div className={styles.segments}>
                {DIRT.map((d) => (
                  <button
                    key={d}
                    className={`${styles.segment} ${dirt === d ? styles.segmentActive : ''}`}
                    onClick={() => setDirt(d)}
                  >
                    {t(`dirtLevels.${d}`)}
                  </button>
                ))}
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
              <AnimatedNumber value={quote.low} />
              <span className={styles.dash}>–</span>
              <AnimatedNumber value={quote.high} />
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
