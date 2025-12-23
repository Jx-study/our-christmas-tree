/**
 * Ornament Component
 * Individual color ornament (sphere) with interactions
 */

import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { OrnamentProps } from '@/types';

export const Ornament = ({ photo, onClick, isHovered = false }: OrnamentProps) => {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  // Gentle bobbing animation
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      // Subtle vertical bobbing based on photo ID (so each moves differently)
      const offset = parseFloat(photo.id.split('-')[1] || '0');
      meshRef.current.position.y = photo.position.y + Math.sin(time + offset) * 0.02;
      // Slow rotation
      meshRef.current.rotation.y += 0.005;
    }
  });

  const scale = hovered || isHovered ? 1.2 : 1;

  return (
    <mesh
      ref={meshRef}
      position={[photo.position.x, photo.position.y, photo.position.z]}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'default';
      }}
      scale={scale}
      castShadow
    >
      <sphereGeometry args={[0.25, 32, 32]} />
      <meshStandardMaterial
        color={photo.color}
        metalness={0.6}
        roughness={0.2}
        emissive={hovered ? photo.color : '#000000'}
        emissiveIntensity={hovered ? 0.5 : 0.1}
      />
    </mesh>
  );
};
