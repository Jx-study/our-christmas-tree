/**
 * Hook for managing photo modal (Polaroid) state
 */

import { useState } from 'react';
import type { Photo } from '@/types';

export const usePhotoModal = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openPhoto = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  return {
    selectedPhoto,
    openPhoto,
    closePhoto,
    isOpen: selectedPhoto !== null,
  };
};
