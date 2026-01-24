import { useContext } from "react";
import type { ImageData } from "../types";
import { Box } from "@mui/material";
import { LightboxContext } from "../providers/LightboxContext";
import "./Image.styles.css";

const Image = ({ src, alt, variant }: ImageData) => {
  const { openLightbox } = useContext(LightboxContext);

  return (
    <Box
      sx={{
        position: "relative",
        flex: variant === "square" ? "1 1 300px" : "1 1 500px",
        minWidth: "300px",
        maxWidth: variant === "wide" ? "600px" : "420px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          },
          transition: "background-color 0.2s ease",
          cursor: "pointer",
        }}
        onClick={() => openLightbox({ src, alt, variant })}
      />
      <img key={src} src={src} alt={alt} className={`img-${variant}`} />
    </Box>
  );
};

export default Image;
