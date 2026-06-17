import Image from 'next/image';
import styles from './Photo.module.css';

/**
 * Premium image wrapper on top of next/image (auto WebP/AVIF, responsive,
 * lazy by default). Always rendered with `fill`, so the parent must be a
 * positioned, sized box (aspect-ratio or absolute).
 * Without a `src` it shows an intentional dark placeholder, never "broken".
 */
export function Photo({
  src,
  alt,
  seed = 0,
  className,
  sizes = '(max-width: 880px) 100vw, 50vw',
  priority = false,
}: {
  src?: string;
  alt: string;
  seed?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`${styles.img} ${className ?? ''}`}
      />
    );
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
