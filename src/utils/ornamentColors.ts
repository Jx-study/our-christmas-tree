/**
 * Ornament Color Utilities
 * Provides fixed random colors for Christmas ornaments
 */

/**
 * Fixed palette of traditional Christmas ornament colors
 */
export const ORNAMENT_COLORS = [
  '#e03131', // 經典紅色
  '#c92a2a', // 深紅色
  '#2f9e44', // 聖誕綠
  '#37b24d', // 亮綠色
  '#f59f00', // 金色
  '#fd7e14', // 橙金色
  '#1971c2', // 皇家藍
  '#1864ab', // 深藍色
  '#862e9c', // 紫色
  '#c0c0c0', // 銀色
] as const;

/**
 * Generates a deterministic color based on photo ID
 * Same ID will always get the same color
 */
export const getOrnamentColor = (photoId: string): string => {
  // Use a simple hash function to convert ID to a number
  let hash = 0;
  for (let i = 0; i < photoId.length; i++) {
    hash = photoId.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Map hash to color palette index
  const index = Math.abs(hash) % ORNAMENT_COLORS.length;
  return ORNAMENT_COLORS[index];
};
