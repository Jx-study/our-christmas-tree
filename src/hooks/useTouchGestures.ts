/**
 * Hook for configuring Three.js OrbitControls for mobile touch gestures
 */

import { useEffect } from 'react';
import type { OrbitControls } from 'three-stdlib';

export const useTouchGestures = (
  controlsRef: React.RefObject<OrbitControls>
) => {
  useEffect(() => {
    if (!controlsRef.current) return;

    const controls = controlsRef.current;

    // Mobile optimizations
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 0.5;

    // Enable touch controls
    controls.enableZoom = true;
    controls.enableRotate = true;
    controls.enablePan = false; // Disable panning

    // Distance limits
    controls.minDistance = 5;
    controls.maxDistance = 15;

    // Angle limits (prevent looking under the tree)
    controls.minPolarAngle = Math.PI / 6; // 30 degrees from top
    controls.maxPolarAngle = Math.PI / 2.2; // Almost horizontal

  }, [controlsRef]);
};
