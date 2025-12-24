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
        url: withBaseUrl("/photos2022/20220609.jpg"),
        caption: "拿到'小黑'后的第一张合照",
        date: "2022-06-09",
        position: { x: -1.3, y: 2.5, z: 0.6 },
        color: getOrnamentColor("2022-1"),
      },
      {
        id: "2022-2",
        url: withBaseUrl("/photos2022/20220816.jpg"),
        caption: "譞譞第一次帮鑫鑫庆祝生日\n除了家人外第一次有人帮鑫鑫庆祝",
        date: "2022-08-16",
        position: { x: 1.2, y: 3.2, z: -0.7 },
        color: getOrnamentColor("2022-2"),
      },
      {
        id: "2022-3",
        url: withBaseUrl("/photos2022/20221206.jpg"),
        caption: "譞譞来看鑫鑫中学的最后一场表演",
        date: "2022-12-06",
        position: { x: -0.8, y: 4.3, z: 1.0 },
        color: getOrnamentColor("2022-3"),
      },
      {
        id: "2022-4",
        url: withBaseUrl("/photos2022/20221223_1.jpg"),
        caption: "毕业快樂！！！",
        date: "2022-12-23",
        position: { x: 0.9, y: 5.0, z: 0.5 },
        color: getOrnamentColor("2022-4"),
      },
      {
        id: "2022-5",
        url: withBaseUrl("/photos2022/20221223_2.jpg"),
        caption: "最后一次一起在学校里当活动的工作人员\n辛苦啦！",
        date: "2022-12-23",
        position: { x: -0.7, y: 5.8, z: -0.4 },
        color: getOrnamentColor("2022-5"),
      },
    ],
    starPhoto: {
      id: "2022-star",
      url: withBaseUrl("/photos2022/20230101.jpg"),
      caption: "2023年的第一封長信",
      date: "2023-01-01",
      position: { x: 0, y: 7.0, z: 0 },
      color: "$christmas-accent-gold",
    },
  },
  {
    year: "2023",
    photos: [
      {
        id: "2023-1",
        url: withBaseUrl("/photos2023/20230115.jpg"),
        caption: "鑫鑫譞譞在一起咯(●'◡'●)",
        date: "2023-01-15",
        position: { x: 1.4, y: 2.8, z: 0.8 },
        color: getOrnamentColor("2023-1"),
      },
      {
        id: "2023-2",
        url: withBaseUrl("/photos2023/20230423.jpg"),
        caption: "譞譞 生日快乐！",
        date: "2023-04-23",
        position: { x: -1.1, y: 3.5, z: -0.9 },
        color: getOrnamentColor("2023-2"),
      },
      {
        id: "2023-3",
        url: withBaseUrl("/photos2023/20230501.jpg"),
        caption: "虽说是小团体出游记，\n但是鑫鑫譞譞偷偷约会",
        date: "2023-05-01",
        position: { x: 0.6, y: 4.6, z: 0.9 },
        color: getOrnamentColor("2023-3"),
      },
      {
        id: "2023-4",
        url: withBaseUrl("/photos2023/20230702.jpg"),
        caption: "譞譞陪鑫鑫来参加义跑\n穿不适合的鞋子跑步脱皮了＞﹏＜",
        date: "2023-07-02",
        position: { x: -0.9, y: 5.3, z: -0.5 },
        color: getOrnamentColor("2023-4"),
      },
      {
        id: "2023-5",
        url: withBaseUrl("/photos2023/20230721.jpg"),
        caption: "鑫鑫跟着譞譞家一起到槟城玩\n╰(*°▽°*)╯",
        date: "2023-07-21",
        position: { x: 0.4, y: 6.0, z: 0.3 },
        color: getOrnamentColor("2023-5"),
      },
    ],
    starPhoto: {
      id: "2023-star",
      url: withBaseUrl("/photos2023/20231225.jpg"),
      caption: "圣诞节快乐呀！\n譞譞非常用心地画给鑫鑫",
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
        url: withBaseUrl("/photos2024/20240125_1.jpg"),
        caption: "鑫鑫从台湾读书回来\n陪譞譞逛康乐夜市",
        date: "2024-01-25",
        position: { x: -1.5, y: 3.0, z: 0.5 },
        color: getOrnamentColor("2024-1"),
      },
      {
        id: "2024-2",
        url: withBaseUrl("/photos2024/20240125_2.jpg"),
        caption: "睡觉前一起搞笑o(*^＠^*)o",
        date: "2024-01-25",
        position: { x: 0.7, y: 3.8, z: -1.1 },
        color: getOrnamentColor("2024-2"),
      },
      {
        id: "2024-3",
        url: withBaseUrl("/photos2024/20240201.jpg"),
        caption: "鑫鑫第一次跟譞譞拍短视频",
        date: "2024-02-01",
        position: { x: -0.5, y: 4.8, z: 0.8 },
        color: getOrnamentColor("2024-3"),
      },
      {
        id: "2024-4",
        url: withBaseUrl("/photos2024/20240203.jpg"),
        caption: "鑫鑫譞譞第一次单独出去旅行\n Pulau Ketam",
        date: "2024-02-03",
        position: { x: 1.0, y: 5.5, z: -0.3 },
        color: getOrnamentColor("2024-4"),
      },
      {
        id: "2024-5",
        url: withBaseUrl("/photos2024/20240213.jpg"),
        caption: "譞譞一起去鑫鑫亲戚家拜年\n (Sekinchan许愿树)",
        date: "2024-02-13",
        position: { x: -0.6, y: 6.1, z: 0.2 },
        color: getOrnamentColor("2024-5"),
      },
      {
        id: "2024-6",
        url: withBaseUrl("/photos2024/20240220.jpg"),
        caption: "初九鑫鑫又要去台湾读书了(;´༎ຶД༎ຶ`)",
        date: "2024-02-20",
        position: { x: -0.6, y: 3.1, z: 0.8 },
        color: getOrnamentColor("2024-6"),
      },
      {
        id: "2024-7",
        url: withBaseUrl("/photos2024/20240812.jpg"),
        caption: "鑫鑫暑假带着小礼物回来啦！",
        date: "2024-08-12",
        position: { x: 1.3, y: 2.5, z: -0.6 },
        color: getOrnamentColor("2024-7"),
      },
      {
        id: "2024-8",
        url: withBaseUrl("/photos2024/20240816.jpg"),
        caption: "譞譞再次帮鑫鑫庆祝生日❤️",
        date: "2024-08-16",
        position: { x: 0.6, y: 4.5, z: -0.2 },
        color: getOrnamentColor("2024-8"),
      },
    ],
    starPhoto: {
      id: "2024-star",
      url: withBaseUrl("/photos2024/20241225.jpg"),
      caption: "2024圣诞节快乐呀！\n譞譞要天天开心",
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
        url: withBaseUrl("/photos2025/20250130.jpg"),
        caption: "新年期间鑫鑫早上跑去找譞譞一起吃早餐",
        date: "2025-01-30",
        position: { x: 0.9, y: 2.6, z: -0.9 },
        color: getOrnamentColor("2025-1"),
      },
      {
        id: "2025-2",
        url: withBaseUrl("/photos2025/20250206_1.jpg"),
        caption: "鑫鑫今天终于做好\n要送给譞譞的礼物",
        date: "2025-02-06",
        position: { x: -0.8, y: 5.2, z: 0.6 },
        color: getOrnamentColor("2025-2"),
      },
      {
        id: "2025-3",
        url: withBaseUrl("/photos2025/20250206_2.jpg"),
        caption: "睡前小合照📸",
        date: "2025-02-06",
        position: { x: -1.3, y: 3.4, z: 0.7 },
        color: getOrnamentColor("2025-3"),
      },
      {
        id: "2025-4",
        url: withBaseUrl("/photos2025/20250214.jpg"),
        caption: "譞譞非常认真准备情人节约会\n(鑫鑫没做好😭)",
        date: "2025-02-14",
        position: { x: 0.5, y: 4.4, z: -0.8 },
        color: getOrnamentColor("2025-4"),
      },
      {
        id: "2025-5",
        url: withBaseUrl("/photos2025/20250816.jpg"),
        caption: "暑假期间鑫鑫也飞回去庆祝生日哦\n譞譞地生日要补回去！！",
        date: "2025-08-16",
        position: { x: 0.3, y: 5.9, z: -0.4 },
        color: getOrnamentColor("2025-5"),
      },
    ],
    starPhoto: {
      id: "2025-star",
      url: withBaseUrl("/we.jpg"),
      caption: "I + You = We",
      date: "2025-12-25",
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
