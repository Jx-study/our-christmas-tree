/**
 * Christmas Memory Tree - Type Definitions
 */

// ========== Photo Data Structure ==========
export interface Photo {
  id: string;                    // Unique identifier (e.g., "2022-1")
  url: string;                   // Image path (e.g., "/photos/2022/photo1.jpg")
  caption: string;               // Photo title/description
  date: string;                  // Date in format "YYYY-MM-DD" or "Dec 24, 2023"
  position: {
    x: number;                   // 3D space coordinate (-2 to 2)
    y: number;                   // 3D space coordinate (2 to 6)
    z: number;                   // 3D space coordinate (-2 to 2)
  };
  color: string;                 // Ornament color (hex color)
}

// ========== Year Data Structure ==========
export interface YearData {
  year: string;                  // "2022" | "2023" | "2024" | "2025"
  photos: Photo[];               // Max 10 photos per year
}

// ========== Complete Memories Data ==========
export type MemoriesData = YearData[];

// ========== Component Props Interfaces ==========

/**
 * Props for ChristmasTree component
 */
export interface ChristmasTreeProps {
  photos: Photo[];
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
