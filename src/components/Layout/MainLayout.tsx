/**
 * MainLayout Component
 * Main page layout wrapper
 */

import type { MainLayoutProps } from '@/types';
import styles from './MainLayout.module.scss';

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.mainLayout}>
      {children}
    </div>
  );
};
