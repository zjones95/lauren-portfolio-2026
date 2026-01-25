import { useState } from "react";
import type { ImageData } from "../types";
import { LightboxContext } from "./LightboxContext";
import { IMAGES } from "../constants";

const LightboxProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<ImageData | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (image: ImageData & { index: number }) => {
    setIsOpen(true);
    setCurrentImage(image);
    setCurrentIndex(image.index);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage(null);
    setCurrentIndex(0);
  };

  const incrementIndex = () => {
    if (!IMAGES[currentIndex + 1]) {
      return;
    }

    setCurrentImage(IMAGES[currentIndex + 1]);
    setCurrentIndex(currentIndex + 1);
  };

  const decrementIndex = () => {
    if (!IMAGES[currentIndex - 1]) {
      return;
    }

    setCurrentImage(IMAGES[currentIndex - 1]);
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <LightboxContext.Provider
      value={{
        isOpen,
        currentImage,
        openLightbox,
        closeLightbox,
        incrementIndex,
        decrementIndex,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export default LightboxProvider;
