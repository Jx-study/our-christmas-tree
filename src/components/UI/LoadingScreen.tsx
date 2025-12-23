/**
 * LoadingScreen Component
 * Full-screen loading indicator
 */

import type { LoadingScreenProps } from '@/types';
import styles from './LoadingScreen.module.scss';

export const LoadingScreen = ({ progress }: LoadingScreenProps) => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.content}>
        <div className={styles.spinner} />
        <h2 className={styles.title}>Loading Memories...</h2>
        {progress !== undefined && (
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
