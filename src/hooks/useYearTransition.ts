/**
 * Hook for handling year change transitions with animations
 */

import { useState, useCallback } from 'react';

export const useYearTransition = (onYearChange: (year: string) => void) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transitionToYear = useCallback(
    (newYear: string) => {
      if (isTransitioning) return;

      setIsTransitioning(true);

      // Fade out (300ms)
      setTimeout(() => {
        onYearChange(newYear);

        // Fade in (300ms)
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }, 300);
    },
    [onYearChange, isTransitioning]
  );

  return {
    isTransitioning,
    transitionToYear,
  };
};
