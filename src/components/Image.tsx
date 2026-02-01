import { useContext } from "react";
import type { ImageData } from "../types";
import { Box, Stack, Typography } from "@mui/material";
import { LightboxContext } from "../providers/LightboxContext";
import "./Image.styles.css";

const Image = ({ src, alt, variant, index }: ImageData & { index: number }) => {
  const { openLightbox } = useContext(LightboxContext);

  return (
    <Box
      sx={{
        position: "relative",
        flex: variant === "square" ? "1 1 300px" : "1 1 600px",
        minWidth: "300px",
        maxWidth: variant === "wide" ? "600px" : "400px",
        height: variant === "tall" ? "500px" : "300px",
      }}
    >
      <Stack
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: variant === "tall" ? "500px" : "300px",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          opacity: 0,
          "&:hover": {
            opacity: 1,
          },
          transition: "opacity 0.2s ease",
          cursor: "pointer",
        }}
        onClick={() => openLightbox({ src, alt, variant, index })}
        justifyContent="center"
        alignItems="center"
      >
        <Typography color="white" textAlign="center" px={1}>
          {alt}
        </Typography>
      </Stack>
      <img key={src} src={src} alt={alt} className={`img-${variant}`} />
    </Box>
  );
};

export default Image;
