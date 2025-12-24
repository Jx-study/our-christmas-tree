/**
 * Login Page - Authentication Screen
 */

import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import styles from './LoginPage.module.scss';

export function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const success = login(password);

    if (success) {
      navigate('/');
    } else {
      setError('Invalid password');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setPassword('');
    }
  };

  return (
    <div className={styles.loginPage}>
      {/* Background decorations */}
      <div className={styles.snowfall}>
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={styles.snowflake}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Login form */}
      <div className={`${styles.loginCard} ${isShaking ? styles.shake : ''}`}>
        <div className={styles.treeIcon}>🎄</div>
        <h1 className={styles.title}>Our Christmas Tree</h1>
        <p className={styles.subtitle}>Enter password to view memories</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="Enter password"
              className={styles.input}
              autoFocus
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.submitButton}>
            Unlock Memories
          </button>
        </form>

        <div className={styles.hint}>
          <p>提示: Our special date(YYYYMMDD)</p>
        </div>
      </div>
    </div>
  );
}
