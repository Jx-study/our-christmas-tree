/**
 * Christmas Memory Tree - Type Definitions
 */

// ========== Photo Data Structure ==========
export interface Photo {
  id: string;
  url: string;
  caption: string;
  date: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  color: string;
}

// ========== Year Data Structure ==========
export interface YearData {
  year: string; // "2022" | "2023" | "2024" | "2025"
  photos: Photo[];
  starPhoto?: Photo;
}

// ========== Complete Memories Data ==========
export type MemoriesData = YearData[];

// ========== Component Props Interfaces ==========

/**
 * Props for ChristmasTree component
 */
export interface ChristmasTreeProps {
  photos: Photo[];
  starPhoto?: Photo;
  onPhotoClick: (photo: Photo) => void;
}

/**
 * Props for Ornament component (individual photo ball)
 */
export interface OrnamentProps {
  photo: Photo;
  onClick: () => void;
  isHovered?: boolean;
}

/**
 * Props for Star component (top star ornament)
 */
export interface StarProps {
  position: [number, number, number];
  photo?: Photo;
  onClick?: () => void;
}

/**
 * Props for Polaroid modal component
 */
export interface PolaroidProps {
  photo: Photo | null;
  onClose: () => void;
}

/**
 * Props for Timeline component (year selector)
 */
export interface TimelineProps {
  currentYear: string;
  years: string[];
  onChange: (year: string) => void;
}

/**
 * Props for LoadingScreen component
 */
export interface LoadingScreenProps {
  progress?: number;
}

/**
 * Props for Header component
 */
export interface HeaderProps {
  title?: string;
}

/**
 * Props for MobileControls component
 */
export interface MobileControlsProps {
  autoHide?: boolean;
  hideDelay?: number; // milliseconds
}

/**
 * Props for MainLayout component
 */
export interface MainLayoutProps {
  children: React.ReactNode;
}
