/**
 * MobileControls Component
 * Touch gesture instructions overlay (auto-hide)
 */

import { useEffect, useState } from 'react';
import type { MobileControlsProps } from '@/types';
import styles from './MobileControls.module.scss';

export const MobileControls = ({
  autoHide = true,
  hideDelay = 3000,
}: MobileControlsProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => setVisible(false), hideDelay);
      return () => clearTimeout(timer);
    }
  }, [autoHide, hideDelay]);

  if (!visible) return null;

  return (
    <div className={styles.mobileControls}>
      <p className={styles.text}>
        👆 單指旋轉 • 👌 雙指縮放
      </p>
    </div>
  );
};
