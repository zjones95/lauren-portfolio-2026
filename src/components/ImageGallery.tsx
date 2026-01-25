import { Stack } from "@mui/material";
import type { ImageData } from "../types";
import Image from "./Image";

const ImageGallery = ({ images = [] }: { images: ImageData[] }) => {
  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: { xs: "center", lg: "unset" },
      }}
    >
      {images.map((imgData, i) => {
        const { src, alt, variant } = imgData;
        return (
          <Image key={src} src={src} alt={alt} variant={variant} index={i} />
        );
      })}
    </Stack>
  );
};

export default ImageGallery;
