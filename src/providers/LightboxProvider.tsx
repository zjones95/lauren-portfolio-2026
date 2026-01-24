import { useState } from "react";
import type { ImageData } from "../types";
import { LightboxContext } from "./LightboxContext";

const LightboxProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<ImageData | null>(null);

  const openLightbox = (image: ImageData) => {
    setIsOpen(true);
    setCurrentImage(image);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <LightboxContext.Provider
      value={{ isOpen, currentImage, openLightbox, closeLightbox }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export default LightboxProvider;
