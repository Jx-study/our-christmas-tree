/**
 * Position Calculation Utilities for Ornaments
 */

import type { Photo } from '@/types';

/**
 * Check if two positions collide (are too close)
 * @param pos1 First position
 * @param pos2 Second position
 * @param minDistance Minimum distance threshold (default: 0.6)
 * @returns true if positions collide
 */
export const checkCollision = (
  pos1: Photo['position'],
  pos2: Photo['position'],
  minDistance = 0.6
): boolean => {
  const dx = pos1.x - pos2.x;
  const dy = pos1.y - pos2.y;
  const dz = pos1.z - pos2.z;
  const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

  return distance < minDistance;
};

/**
 * Generate a random position within specified ranges
 * @param xRange [min, max] for X axis
 * @param yRange [min, max] for Y axis
 * @param zRange [min, max] for Z axis
 * @returns Random position object
 */
export const randomPosition = (
  xRange: [number, number],
  yRange: [number, number],
  zRange: [number, number]
): Photo['position'] => {
  return {
    x: Math.random() * (xRange[1] - xRange[0]) + xRange[0],
    y: Math.random() * (yRange[1] - yRange[0]) + yRange[0],
    z: Math.random() * (zRange[1] - zRange[0]) + zRange[0],
  };
};

/**
 * Generate random positions ensuring no collisions
 * @param count Number of positions to generate
 * @param xRange X axis range
 * @param yRange Y axis range
 * @param zRange Z axis range
 * @param minDistance Minimum distance between positions
 * @param maxAttempts Maximum attempts per position
 * @returns Array of non-colliding positions
 */
export const generateNonCollidingPositions = (
  count: number,
  xRange: [number, number] = [-2, 2],
  yRange: [number, number] = [2, 6],
  zRange: [number, number] = [-2, 2],
  minDistance = 0.6,
  maxAttempts = 100
): Photo['position'][] => {
  const positions: Photo['position'][] = [];

  for (let i = 0; i < count; i++) {
    let attempts = 0;
    let newPosition: Photo['position'];

    do {
      newPosition = randomPosition(xRange, yRange, zRange);
      attempts++;

      if (attempts >= maxAttempts) {
        console.warn(`Could not find non-colliding position after ${maxAttempts} attempts`);
        break;
      }
    } while (
      positions.some(pos => checkCollision(pos, newPosition, minDistance))
    );

    positions.push(newPosition);
  }

  return positions;
};

/**
 * Round position values to specified decimal places
 * @param position Position to round
 * @param decimals Number of decimal places (default: 1)
 * @returns Rounded position
 */
export const roundPosition = (
  position: Photo['position'],
  decimals = 1
): Photo['position'] => {
  const factor = Math.pow(10, decimals);
  return {
    x: Math.round(position.x * factor) / factor,
    y: Math.round(position.y * factor) / factor,
    z: Math.round(position.z * factor) / factor,
  };
};
