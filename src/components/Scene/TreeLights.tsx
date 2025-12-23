/**
 * TreeLights Component
 * Decorative colored point lights around the tree
 */

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const LIGHT_COLORS = [
  { color: '#ff6b6b', position: [-3, 5, 2] as [number, number, number] },
  { color: '#4ecdc4', position: [3, 5, -2] as [number, number, number] },
  { color: '#ffd93d', position: [0, 4, 3] as [number, number, number] },
  { color: '#51cf66', position: [-2, 3, -2] as [number, number, number] },
  { color: '#ff8c42', position: [2, 6, 1] as [number, number, number] },
];

export const TreeLights = () => {
  const lightsRef = useRef<(THREE.PointLight | null)[]>([]);

  useFrame((state) => {
    lightsRef.current.forEach((light, index) => {
      if (light) {
        // Pulsing effect with different speeds for each light
        const time = state.clock.elapsedTime;
        const speed = 1 + index * 0.3;
        light.intensity = 0.5 + Math.sin(time * speed) * 0.3;
      }
    });
  });

  return (
    <group>
      {LIGHT_COLORS.map((light, index) => (
        <pointLight
          key={index}
          ref={(el) => {
            lightsRef.current[index] = el;
          }}
          position={light.position}
          color={light.color}
          intensity={0.5}
          distance={5}
          decay={2}
        />
      ))}
    </group>
  );
};
