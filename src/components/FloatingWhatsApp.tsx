'use client';

import { Icon } from './icons';
import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/34600123456"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="WhatsApp"
    >
      <Icon.whatsapp width={28} height={28} />
      <span className={styles.pulse} />
    </a>
  );
}
