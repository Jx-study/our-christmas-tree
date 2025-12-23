/**
 * Star Component
 * Top star ornament with pulsing glow animation
 */

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface StarProps {
  position: [number, number, number];
}

export const Star = ({ position }: StarProps) => {
  const starRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (starRef.current) {
      // Rotation animation
      starRef.current.rotation.y += 0.01;
      starRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;

      // Pulsing emissive intensity
      const material = starRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }

    if (lightRef.current) {
      // Pulsing light intensity
      lightRef.current.intensity = 1.0 + Math.sin(state.clock.elapsedTime * 2) * 0.5;
    }
  });

  return (
    <group position={position}>
      {/* Star sphere */}
      <mesh ref={starRef} castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial
          color="#ffd700"
          emissive="#ffd700"
          emissiveIntensity={0.8}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>

      {/* Point light for glow effect */}
      <pointLight
        ref={lightRef}
        color="#ffd700"
        intensity={1.5}
        distance={3}
        decay={2}
      />
    </group>
  );
};
