import { createContext, useContext } from "react";
import type { ImageData } from "../types";

export const useLightboxContext = () => useContext(LightboxContext);

export const LightboxContext = createContext<{
  isOpen: boolean;
  currentImage: ImageData | null;
  openLightbox: (image: ImageData & { index: number }) => void;
  closeLightbox: () => void;
  incrementIndex: () => void;
  decrementIndex: () => void;
}>({
  isOpen: false,
  currentImage: null,
  openLightbox: () => {},
  closeLightbox: () => {},
  incrementIndex: () => {},
  decrementIndex: () => {},
});
