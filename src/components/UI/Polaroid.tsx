/**
 * Polaroid Component
 * Modal displaying photo in polaroid style
 */

import type { PolaroidProps } from '@/types';
import styles from './Polaroid.module.scss';

export const Polaroid = ({ photo, onClose }: PolaroidProps) => {
  if (!photo) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.polaroid} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <div className={styles.imageContainer}>
          <img src={photo.url} alt={photo.caption} className={styles.image} />
        </div>

        <div className={styles.caption}>
          <p className={styles.captionText}>{photo.caption}</p>
          <p className={styles.date}>{photo.date}</p>
        </div>

        <div className={styles.stickyNote}>{photo.id}</div>
      </div>
    </div>
  );
};
