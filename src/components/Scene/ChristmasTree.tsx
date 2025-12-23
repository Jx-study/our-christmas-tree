/**
 * ChristmasTree Component
 * Main 3D Christmas tree structure with trunk, layers, and ornaments
 */

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { ChristmasTreeProps } from '@/types';
import { Ornament } from './Ornament';
import { Star } from './Star';

export const ChristmasTree = ({ photos, onPhotoClick }: ChristmasTreeProps) => {
  const treeGroupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    // Optional: Add gentle swaying animation
    if (treeGroupRef.current) {
      // Subtle movement can be added here
    }
  });

  return (
    <group ref={treeGroupRef}>
      {/* Tree Trunk */}
      <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.3, 0.4, 1.5, 8]} />
        <meshStandardMaterial color="#654321" roughness={0.8} />
      </mesh>

      {/* Tree Layers (Cones) */}
      {/* Bottom Layer */}
      <mesh position={[0, 3.0, 0]} castShadow receiveShadow>
        <coneGeometry args={[2.0, 2.5, 8]} />
        <meshStandardMaterial color="#1e5631" roughness={0.7} />
      </mesh>

      {/* Middle Layer */}
      <mesh position={[0, 4.5, 0]} castShadow receiveShadow>
        <coneGeometry args={[1.6, 2.0, 8]} />
        <meshStandardMaterial color="#2d7a4a" roughness={0.7} />
      </mesh>

      {/* Top Layer */}
      <mesh position={[0, 5.8, 0]} castShadow receiveShadow>
        <coneGeometry args={[1.2, 1.5, 8]} />
        <meshStandardMaterial color="#1e5631" roughness={0.7} />
      </mesh>

      {/* Star on top */}
      <Star position={[0, 7.0, 0]} />

      {/* Photo Ornaments */}
      {photos.map(photo => (
        <Ornament
          key={photo.id}
          photo={photo}
          onClick={() => onPhotoClick(photo)}
        />
      ))}
    </group>
  );
};
