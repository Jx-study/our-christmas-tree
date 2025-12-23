/**
 * Snow Component
 * Particle system for falling snow effect
 */

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Snow = () => {
  const pointsRef = useRef<THREE.Points>(null);

  // Create snow particles
  const particles = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50;      // x
      positions[i + 1] = Math.random() * 20;          // y
      positions[i + 2] = (Math.random() - 0.5) * 50;  // z
    }

    return positions;
  }, []);

  // Animation loop for falling snow
  useFrame(() => {
    if (!pointsRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 1; i < positions.length; i += 3) {
      // Fall down
      positions[i] -= 0.02;

      // Gentle horizontal drift
      const driftX = Math.sin(Date.now() * 0.001 + i) * 0.001;
      positions[i - 1] += driftX;

      // Reset to top when reaching bottom
      if (positions[i] < 0) {
        positions[i] = 20;
        positions[i - 1] = (Math.random() - 0.5) * 50;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color={0xffffff}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};
