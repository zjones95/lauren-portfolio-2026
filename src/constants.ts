import type { ImageData } from "./types";

export const IMAGES: ImageData[] = [
  {
    src: "cozy-bear.jpg",
    alt: "Home Sweet Home",
    variant: "square",
  },
  {
    src: "office-space.jpg",
    alt: "Office Space",
    variant: "square",
  },
  {
    src: "dragon.jpg",
    alt: "Year of The Dragon",
    variant: "square",
  },
  {
    src: "kitty-kiara.jpg",
    alt: "Kitty Kiara - Acrylic Paint",
    variant: "tall",
  },
  {
    src: "bled.jpg",
    alt: "A Rainy Day - Watercolor",
    variant: "tall",
  },
  {
    src: "space.jpg",
    alt: "Luna Eyes - Acrylic Paint",
    variant: "tall",
  },
  {
    src: "mermaid.jpg",
    alt: "Kaylani - Photoshop Illustration",
    variant: "square",
  },
  {
    src: "josie-1.jpg",
    alt: "Cambio de Josie - Book Cover - Photoshop Illustration",
    variant: "tall-contained",
  },
  {
    src: "josie-2.jpg",
    alt: "Cambio de Josie - Movie Poster - Photoshop Illustration",
    variant: "tall-contained",
  },
  {
    src: "book-storyboard-2.png",
    alt: "Love We All Need - Page 1",
    variant: "square",
  },
  {
    src: "book-storyboard-3.png",
    alt: "Love We All Need - Page 2",
    variant: "square",
  },
  {
    src: "book-storyboard.jpg",
    alt: "Love We All Need - Page 3",
    variant: "square",
  },
  {
    src: "hands.jpg",
    alt: "Hand Study",
    variant: "square",
  },
];

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const SUPABASE_IMAGE_URL =
  "https://zkwesxsqshbfnsnstbvs.supabase.co/storage/v1/object/";
