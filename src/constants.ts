import type { ImageData } from "./types";

export const IMAGES: ImageData[] = [
  {
    src: "cozy-bear.jpg",
    alt: "Cozy Bear",
    variant: "square",
  },
  {
    src: "office-space.jpg",
    alt: "Office Space",
    variant: "square",
  },
  {
    src: "dragon.jpg",
    alt: "Dragon",
    variant: "square",
  },
  {
    src: "kitty-kiara.jpg",
    alt: "Kitty Kiara",
    variant: "tall",
  },
  {
    src: "bled.jpg",
    alt: "Lake Bled",
    variant: "tall",
  },
  {
    src: "space.jpg",
    alt: "Space",
    variant: "tall",
  },
  {
    src: "mermaid.jpg",
    alt: "Mermaid",
    variant: "square",
  },
  {
    src: "josie-1.jpg",
    alt: "Josie 1",
    variant: "tall-contained",
  },
  {
    src: "josie-2.jpg",
    alt: "Josie 2",
    variant: "tall-contained",
  },
  {
    src: "book-storyboard.jpg",
    alt: "Book Storyboard",
    variant: "square",
  },
  {
    src: "book-storyboard-2.png",
    alt: "Book Storyboard 2",
    variant: "square",
  },
  {
    src: "book-storyboard-3.png",
    alt: "Book Storyboard 3",
    variant: "square",
  },
  {
    src: "hands.jpg",
    alt: "Hands",
    variant: "square",
  },
];

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const SUPABASE_IMAGE_URL =
  "https://zkwesxsqshbfnsnstbvs.supabase.co/storage/v1/object/";
