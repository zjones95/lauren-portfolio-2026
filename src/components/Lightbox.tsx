import { Stack } from "@mui/material";
import { useLightboxContext } from "../providers/LightboxContext";
import { useEffect } from "react";

const Lightbox = () => {
  const { closeLightbox, currentImage, incrementIndex, decrementIndex } =
    useLightboxContext();

  useEffect(() => {
    const handleLightboxIndexChange = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        decrementIndex();
      }

      if (e.key === "ArrowRight") {
        incrementIndex();
      }
    };

    window.addEventListener("keydown", handleLightboxIndexChange);

    return () => {
      window.removeEventListener("keydown", handleLightboxIndexChange);
    };
  }, [incrementIndex, decrementIndex]);

  return (
    <Stack
      sx={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        opacity: currentImage ? 1 : 0,
        pointerEvents: currentImage ? "unset" : "none",
        transition: "opacity 0.2s ease",
      }}
      justifyContent="center"
      alignItems="center"
      onClick={() => closeLightbox()}
    >
      {currentImage ? (
        <img
          alt={`lightbox-${currentImage.alt}`}
          src={currentImage.src}
          style={{
            maxHeight: "1000px",
            maxWidth: "1000px",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      ) : null}
    </Stack>
  );
};

export default Lightbox;
