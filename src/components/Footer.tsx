import { Stack, Typography } from "@mui/material";
import { Link } from "react-router";

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
      <Stack direction="row" spacing={2}>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#080808",
          }}
        >
          Admin
        </Link>
        <Typography>2026 ©</Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
