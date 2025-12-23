/**
 * Christmas Memory Tree - Photo Memories Data
 *
 * Tree Structure:
 * - Bottom layer (Y: 2.0-4.0): radius ~1.8, for lower ornaments
 * - Middle layer (Y: 4.0-5.2): radius ~1.4, for middle ornaments
 * - Top layer (Y: 5.2-6.3): radius ~1.0, for upper ornaments
 * - Star: Y = 7.0
 */

import type { MemoriesData } from "@/types";
import { getOrnamentColor } from "@/utils/ornamentColors";

const withBaseUrl = (path: string) => import.meta.env.BASE_URL + path;

export const MEMORIES: MemoriesData = [
  {
    year: "2022",
    photos: [
      {
        id: "2022-1",
        url: withBaseUrl("/photos2022/photo1.jpg"),
        caption: "我們的第一個聖誕節",
        date: "2022-12-24",
        position: { x: -1.3, y: 2.5, z: 0.6 },
        color: getOrnamentColor("2022-1"),
      },
      {
        id: "2022-2",
        url: withBaseUrl("/photos2022/photo2.jpg"),
        caption: "聖誕夜晚餐",
        date: "2022-12-24",
        position: { x: 1.2, y: 3.2, z: -0.7 },
        color: getOrnamentColor("2022-2"),
      },
      {
        id: "2022-3",
        url: withBaseUrl("/photos2022/photo3.jpg"),
        caption: "冬日回憶",
        date: "2022-12-25",
        position: { x: -0.8, y: 4.3, z: 1.0 },
        color: getOrnamentColor("2022-3"),
      },
      {
        id: "2022-4",
        url: withBaseUrl("/photos2022/photo4.jpg"),
        caption: "聖誕快樂",
        date: "2022-12-25",
        position: { x: 0.9, y: 5.0, z: 0.5 },
        color: getOrnamentColor("2022-4"),
      },
      {
        id: "2022-5",
        url: withBaseUrl("/photos2022/photo5.jpg"),
        caption: "美好時光",
        date: "2022-12-26",
        position: { x: -0.7, y: 5.8, z: -0.4 },
        color: getOrnamentColor("2022-5"),
      },
    ],
    starPhoto: {
      id: "2022-star",
      url: withBaseUrl("/photos2022/photo1.jpg"),
      caption: "2022 年度精選回憶",
      date: "2022-12-25",
      position: { x: 0, y: 7.0, z: 0 },
      color: "#ffd700",
    },
  },
  {
    year: "2023",
    photos: [
      {
        id: "2023-1",
        url: withBaseUrl("/photos2023/photo1.jpg"),
        caption: "冬日仙境",
        date: "2023-12-25",
        position: { x: -0.8, y: 3.0, z: 1.2 },
        color: getOrnamentColor("2023-1"),
      },
      {
        id: "2023-2",
        url: withBaseUrl("/photos2023/photo2.jpg"),
        caption: "溫暖回憶",
        date: "2023-12-24",
        position: { x: 1.3, y: 3.8, z: -0.4 },
        color: getOrnamentColor("2023-2"),
      },
      {
        id: "2023-3",
        url: withBaseUrl("/photos2023/photo3.jpg"),
        caption: "聖誕驚喜",
        date: "2023-12-25",
        position: { x: -0.3, y: 5.5, z: 0.7 },
        color: getOrnamentColor("2023-3"),
      },
      {
        id: "2023-4",
        url: withBaseUrl("/photos2023/photo4.jpg"),
        caption: "幸福時刻",
        date: "2023-12-26",
        position: { x: 0.6, y: 2.5, z: -1.0 },
        color: getOrnamentColor("2023-4"),
      },
      {
        id: "2023-5",
        url: withBaseUrl("/photos2023/photo5.jpg"),
        caption: "愛的紀念",
        date: "2023-12-27",
        position: { x: -1.4, y: 4.5, z: 0.2 },
        color: getOrnamentColor("2023-5"),
      },
    ],
    starPhoto: {
      id: "2023-star",
      url: withBaseUrl("/photos2023/photo1.jpg"),
      caption: "2023 年度精選回憶",
      date: "2023-12-25",
      position: { x: 0, y: 7.0, z: 0 },
      color: "#ffd700",
    },
  },
  {
    year: "2024",
    photos: [
      {
        id: "2024-1",
        url: withBaseUrl("/photos2024/photo1.jpg"),
        caption: "金色回憶",
        date: "2024-12-24",
        position: { x: -1.0, y: 3.2, z: 0.8 },
        color: getOrnamentColor("2024-1"),
      },
      {
        id: "2024-2",
        url: withBaseUrl("/photos2024/photo2.jpg"),
        caption: "璀璨時光",
        date: "2024-12-24",
        position: { x: 0.9, y: 4.5, z: -0.5 },
        color: getOrnamentColor("2024-2"),
      },
      {
        id: "2024-3",
        url: withBaseUrl("/photos2024/photo3.jpg"),
        caption: "溫馨聖誕",
        date: "2024-12-25",
        position: { x: -0.6, y: 5.8, z: 0.4 },
        color: getOrnamentColor("2024-3"),
      },
      {
        id: "2024-4",
        url: withBaseUrl("/photos2024/photo4.jpg"),
        caption: "甜蜜瞬間",
        date: "2024-12-25",
        position: { x: 1.5, y: 2.8, z: 0.9 },
        color: getOrnamentColor("2024-4"),
      },
      {
        id: "2024-5",
        url: withBaseUrl("/photos2024/photo5.jpg"),
        caption: "珍貴紀念",
        date: "2024-12-26",
        position: { x: -1.2, y: 4.2, z: -0.7 },
        color: getOrnamentColor("2024-5"),
      },
    ],
    starPhoto: {
      id: "2024-star",
      url: withBaseUrl("/photos2024/photo1.jpg"),
      caption: "2024 年度精選回憶",
      date: "2024-12-25",
      position: { x: 0, y: 7.0, z: 0 },
      color: "#ffd700",
    },
  },
  {
    year: "2025",
    photos: [
      {
        id: "2025-1",
        url: withBaseUrl("/photos2025/photo1.jpg"),
        caption: "新年新氣象",
        date: "2025-01-01",
        position: { x: -0.9, y: 3.6, z: 1.0 },
        color: getOrnamentColor("2025-1"),
      },
      {
        id: "2025-2",
        url: withBaseUrl("/photos2025/photo2.jpg"),
        caption: "希望之光",
        date: "2025-01-02",
        position: { x: 1.1, y: 4.8, z: -0.3 },
        color: getOrnamentColor("2025-2"),
      },
      {
        id: "2025-3",
        url: withBaseUrl("/photos2025/photo3.jpg"),
        caption: "綠意盎然",
        date: "2025-01-05",
        position: { x: -0.4, y: 2.6, z: 0.6 },
        color: getOrnamentColor("2025-3"),
      },
      {
        id: "2025-4",
        url: withBaseUrl("/photos2025/photo4.jpg"),
        caption: "春暖花開",
        date: "2025-01-10",
        position: { x: 0.7, y: 5.4, z: 0.8 },
        color: getOrnamentColor("2025-4"),
      },
      {
        id: "2025-5",
        url: withBaseUrl("/photos2025/photo5.jpg"),
        caption: "未來可期",
        date: "2025-01-15",
        position: { x: -1.6, y: 4.0, z: -0.4 },
        color: getOrnamentColor("2025-5"),
      },
    ],
    starPhoto: {
      id: "2025-star",
      url: withBaseUrl("/photos2025/photo1.jpg"),
      caption: "2025 年度精選回憶",
      date: "2025-01-01",
      position: { x: 0, y: 7.0, z: 0 },
      color: "#ffd700",
    },
  },
];

/**
 * Extract all years from memories data
 */
export const YEARS = MEMORIES.map((m) => m.year);

/**
 * Get photos for a specific year
 */
export const getPhotosByYear = (year: string) => {
  return MEMORIES.find((m) => m.year === year)?.photos || [];
};
