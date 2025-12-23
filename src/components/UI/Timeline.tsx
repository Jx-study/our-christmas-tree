/**
 * Timeline Component
 * Year selector with glassmorphism style
 */

import type { TimelineProps } from '@/types';
import styles from './Timeline.module.scss';

export const Timeline = ({ currentYear, years, onChange }: TimelineProps) => {
  return (
    <div className={styles.timeline}>
      <div className={styles.container}>
        {years.map((year) => (
          <button
            key={year}
            className={`${styles.yearButton} ${
              year === currentYear ? styles.active : ''
            }`}
            onClick={() => onChange(year)}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
};
