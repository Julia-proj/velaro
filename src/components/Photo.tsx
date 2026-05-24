import styles from './Photo.module.css';

/**
 * Premium placeholder panel. Replace by passing a real `src`.
 * Designed to look intentional (dark architectural gradient), never "broken".
 */
export function Photo({
  src,
  alt,
  seed = 0,
  className,
}: {
  src?: string;
  alt: string;
  seed?: number;
  className?: string;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`${styles.img} ${className ?? ''}`} loading="lazy" />;
  }

  const hues = [218, 212, 205, 222, 230, 208];
  const h = hues[seed % hues.length];

  return (
    <div
      className={`${styles.ph} ${className ?? ''}`}
      role="img"
      aria-label={alt}
      style={
        {
          '--h': h,
        } as React.CSSProperties
      }
    >
      <div className={styles.glow} />
      <div className={styles.grid} />
      <span className={styles.tag}>{alt}</span>
    </div>
  );
}
