/**
 * Photo Preloading Utilities
 */

import type { Photo } from '@/types';

/**
 * Preload an array of images
 * @param photos Array of photo objects
 * @returns Promise that resolves when all images are loaded
 */
export const preloadImages = async (photos: Photo[]): Promise<void> => {
  const promises = photos.map(photo => {
    return new Promise<void>((resolve, _reject) => {
      const img = new Image();
      img.src = photo.url;
      img.onload = () => resolve();
      img.onerror = () => {
        console.warn(`Failed to load image: ${photo.url}`);
        resolve(); // Resolve anyway to not block other images
      };
    });
  });

  await Promise.all(promises);
};

/**
 * Preload images in the background using requestIdleCallback
 * @param photos Array of photo objects
 */
export const preloadInBackground = (photos: Photo[]): void => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      preloadImages(photos);
    });
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    setTimeout(() => {
      preloadImages(photos);
    }, 1000);
  }
};

/**
 * Get loading progress for photos
 * @param photos Array of photo objects
 * @param onProgress Callback for progress updates (0-100)
 * @returns Promise that resolves when all images are loaded
 */
export const preloadImagesWithProgress = async (
  photos: Photo[],
  onProgress?: (progress: number) => void
): Promise<void> => {
  let loadedCount = 0;
  const totalCount = photos.length;

  const promises = photos.map(photo => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.src = photo.url;

      const handleComplete = () => {
        loadedCount++;
        const progress = Math.round((loadedCount / totalCount) * 100);
        onProgress?.(progress);
        resolve();
      };

      img.onload = handleComplete;
      img.onerror = handleComplete;
    });
  });

  await Promise.all(promises);
};
