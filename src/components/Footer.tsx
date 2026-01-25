import { Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        maxWidth: "1280px",
        py: 2,
        borderTop: "2px solid #878780",
      }}
    >
      <Typography>laurenpickering.art</Typography>
      <Typography>2026 ©</Typography>
    </Stack>
  );
};

export default Footer;
