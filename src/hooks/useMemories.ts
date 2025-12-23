/**
 * Hook for managing memory data and current year state
 */

import { useState, useMemo } from 'react';
import { MEMORIES, YEARS } from '@/data/memories';
import type { Photo } from '@/types';

export const useMemories = () => {
  const [currentYear, setCurrentYear] = useState<string>(YEARS[0]);

  const currentPhotos = useMemo(() => {
    return MEMORIES.find(m => m.year === currentYear)?.photos || [];
  }, [currentYear]);

  const allYears = useMemo(() => YEARS, []);

  return {
    currentYear,
    setYear: setCurrentYear,
    currentPhotos,
    allYears,
  };
};
