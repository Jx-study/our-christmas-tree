/**
 * Type declarations for React Three Fiber
 * This file extends JSX namespace to include Three.js elements
 */

import { ThreeElements } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}
