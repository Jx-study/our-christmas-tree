/**
 * Placeholder Image Generator Utility
 * Generates colored placeholder images with Canvas API (browser-based)
 */

/**
 * Year-specific colors for placeholders
 */
const YEAR_COLORS: Record<string, string> = {
  '2022': '#ff6b6b', // Red theme
  '2023': '#4ecdc4', // Blue-cyan theme
  '2024': '#ffd93d', // Gold theme
  '2025': '#2d7a4a', // Green theme
};

/**
 * Generate a placeholder image as a data URL
 * @param year Year for the photo
 * @param photoNumber Photo number within that year
 * @param size Image size (default: 800x800)
 * @returns Data URL of the generated image
 */
export const generatePlaceholder = (
  year: string,
  photoNumber: number,
  size = 800
): string => {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Canvas context not available');
  }

  const color = YEAR_COLORS[year] || '#999999';

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, adjustBrightness(color, -20));

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  // Add border
  ctx.strokeStyle = adjustBrightness(color, -40);
  ctx.lineWidth = 4;
  ctx.strokeRect(2, 2, size - 4, size - 4);

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;

  // Year text (large)
  ctx.font = `bold ${size / 6}px 'Dancing Script', cursive`;
  ctx.fillText(year, size / 2, size / 2 - size / 10);

  // Photo number text
  ctx.font = `bold ${size / 12}px 'Caveat', cursive`;
  ctx.fillText(`Photo #${photoNumber}`, size / 2, size / 2 + size / 10);

  // Add decorative elements (star shapes in corners)
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  drawStar(ctx, size * 0.1, size * 0.1, size * 0.04, 5);
  drawStar(ctx, size * 0.9, size * 0.1, size * 0.04, 5);
  drawStar(ctx, size * 0.1, size * 0.9, size * 0.04, 5);
  drawStar(ctx, size * 0.9, size * 0.9, size * 0.04, 5);

  return canvas.toDataURL('image/png');
};

/**
 * Adjust color brightness
 * @param color Hex color string
 * @param percent Brightness adjustment (-100 to 100)
 * @returns Adjusted hex color
 */
function adjustBrightness(color: string, percent: number): string {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amt));
  const B = Math.min(255, Math.max(0, (num & 0x0000ff) + amt));

  return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
}

/**
 * Draw a star shape on canvas
 * @param ctx Canvas context
 * @param cx Center X
 * @param cy Center Y
 * @param outerRadius Outer radius
 * @param points Number of star points
 */
function drawStar(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  outerRadius: number,
  points: number
): void {
  const innerRadius = outerRadius / 2;
  let rotation = (Math.PI / 2) * 3;
  const step = Math.PI / points;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);

  for (let i = 0; i < points; i++) {
    let x = cx + Math.cos(rotation) * outerRadius;
    let y = cy + Math.sin(rotation) * outerRadius;
    ctx.lineTo(x, y);
    rotation += step;

    x = cx + Math.cos(rotation) * innerRadius;
    y = cy + Math.sin(rotation) * innerRadius;
    ctx.lineTo(x, y);
    rotation += step;
  }

  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fill();
}

/**
 * Generate placeholders for all photos in memories data
 * (For development/testing purposes)
 */
export const generateAllPlaceholders = (): Record<string, string> => {
  const placeholders: Record<string, string> = {};

  const years = ['2022', '2023', '2024', '2025'];
  years.forEach(year => {
    for (let i = 1; i <= 10; i++) {
      const key = `${year}-${i}`;
      placeholders[key] = generatePlaceholder(year, i);
    }
  });

  return placeholders;
};
