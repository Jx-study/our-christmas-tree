/**
 * Christmas Memory Tree - Main Application Component
 */

import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Components
import { MainLayout } from '@/components/Layout/MainLayout';
import { Header } from '@/components/UI/Header';
import { Timeline } from '@/components/UI/Timeline';
import { Polaroid } from '@/components/UI/Polaroid';
import { LoadingScreen } from '@/components/UI/LoadingScreen';
import { MobileControls } from '@/components/UI/MobileControls';
import { ChristmasTree } from '@/components/Scene/ChristmasTree';
import { Snow } from '@/components/Scene/Snow';
import { TreeLights } from '@/components/Scene/TreeLights';

// Hooks
import { useMemories } from '@/hooks/useMemories';
import { usePhotoModal } from '@/hooks/usePhotoModal';

// Utils
import { preloadImagesWithProgress } from '@/utils/photoLoader';

function App() {
  const { currentYear, setYear, currentPhotos, allYears } = useMemories();
  const { selectedPhoto, openPhoto, closePhoto } = usePhotoModal();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Preload images on mount and year change
  useEffect(() => {
    setIsLoading(true);
    setLoadingProgress(0);

    preloadImagesWithProgress(currentPhotos, (progress) => {
      setLoadingProgress(progress);
    }).then(() => {
      // Small delay to show 100% progress
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    });
  }, [currentPhotos]);

  if (isLoading) {
    return <LoadingScreen progress={loadingProgress} />;
  }

  return (
    <MainLayout>
      {/* Header */}
      <Header />

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 3, 8], fov: 75 }}
        shadows
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 10, 5]} intensity={1.0} castShadow />
        <spotLight
          position={[0, 10, 0]}
          angle={Math.PI / 4}
          penumbra={0.5}
          intensity={0.8}
          castShadow
        />

        {/* 3D Content */}
        <Suspense fallback={null}>
          <ChristmasTree photos={currentPhotos} onPhotoClick={openPhoto} />
          <Snow />
          <TreeLights />
        </Suspense>

        {/* Camera Controls */}
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={5}
          maxDistance={15}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.2}
          enablePan={false}
        />
      </Canvas>

      {/* UI Overlays */}
      <Timeline
        currentYear={currentYear}
        years={allYears}
        onChange={setYear}
      />

      {/* Photo Modal */}
      <Polaroid photo={selectedPhoto} onClose={closePhoto} />

      {/* Mobile Touch Instructions */}
      <MobileControls autoHide hideDelay={3000} />
    </MainLayout>
  );
}

export default App;
