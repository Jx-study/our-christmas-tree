/**
 * Header Component
 * Page title with festive typography
 */

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Our Christmas Memory Tree</h1>
      <p className={styles.subtitle}>2022 - 2025</p>
    </header>
  );
};
