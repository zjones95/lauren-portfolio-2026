import { Stack, Typography } from "@mui/material";
import { Link } from "react-router";

const LINKS = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Contact",
    route: "/contact",
  },
];

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="end">
      <Typography variant="h1" fontSize={32}>
        Lauren Pickering
      </Typography>
      <Stack direction="row" spacing={1}>
        {LINKS.map((linkData) => (
          <Link to={linkData.route}>{linkData.title}</Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default Navbar;
