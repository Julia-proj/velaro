'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { Photo } from './Photo';
import styles from './BeforeAfter.module.css';

export function BeforeAfter({
  beforeLabel,
  afterLabel,
  beforeSrc,
  afterSrc,
}: {
  beforeLabel: string;
  afterLabel: string;
  beforeSrc?: string;
  afterSrc?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(52);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (dragging.current) update(e.clientX);
    };
    const up = () => (dragging.current = false);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
  }, [update]);

  return (
    <div
      ref={ref}
      className={styles.wrap}
      onPointerDown={(e) => {
        dragging.current = true;
        update(e.clientX);
      }}
    >
      <div className={styles.after}>
        <Photo alt={afterLabel} src={afterSrc} seed={1} />
        <span className={`${styles.label} ${styles.labelRight}`}>{afterLabel}</span>
      </div>

      <div className={styles.before} style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Photo alt={beforeLabel} src={beforeSrc} seed={5} />
        <span className={`${styles.label} ${styles.labelLeft}`}>{beforeLabel}</span>
      </div>

      <div className={styles.divider} style={{ left: `${pos}%` }}>
        <button
          className={styles.handle}
          aria-label="Comparar antes y después"
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') setPos((p) => Math.max(2, p - 4));
            if (e.key === 'ArrowRight') setPos((p) => Math.min(98, p + 4));
          }}
        >
          <span>‹</span>
          <span>›</span>
        </button>
      </div>
    </div>
  );
}
