/**
 * Star Component
 * Top star ornament with pulsing glow animation
 */

import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { StarProps } from '@/types';

/**
 * Create a 5-pointed star shape
 */
const createStarShape = () => {
  const shape = new THREE.Shape();
  const outerRadius = 0.4;
  const innerRadius = 0.16;
  const points = 5;

  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    if (i === 0) {
      shape.moveTo(x, y);
    } else {
      shape.lineTo(x, y);
    }
  }
  shape.closePath();

  return shape;
};

export const Star = ({ position, photo, onClick }: StarProps) => {
  const [hovered, setHovered] = useState(false);
  const starRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  // Create star geometry
  const starGeometry = useMemo(() => {
    const shape = createStarShape();
    const extrudeSettings = {
      depth: 0.1,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.02,
      bevelSegments: 3
    };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  useFrame((state) => {
    if (starRef.current) {
      // Rotation animation
      starRef.current.rotation.z += 0.01;

      // Pulsing emissive intensity (more intense when hovered)
      const material = starRef.current.material as THREE.MeshStandardMaterial;
      const baseIntensity = hovered ? 0.8 : 0.5;
      material.emissiveIntensity = baseIntensity + Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }

    if (lightRef.current) {
      // Pulsing light intensity (brighter when hovered)
      const baseIntensity = hovered ? 1.5 : 1.0;
      lightRef.current.intensity = baseIntensity + Math.sin(state.clock.elapsedTime * 2) * 0.5;
    }
  });

  const scale = hovered ? 1.15 : 1;

  return (
    <group position={position}>
      {/* Star shape */}
      <mesh
        ref={starRef}
        geometry={starGeometry}
        castShadow
        scale={scale}
        onClick={(e) => {
          if (photo && onClick) {
            e.stopPropagation();
            onClick();
          }
        }}
        onPointerOver={(e) => {
          if (photo && onClick) {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = 'pointer';
          }
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'default';
        }}
      >
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
