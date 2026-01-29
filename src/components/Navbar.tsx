import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const LINKS = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Contact",
    route: "/contact",
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Stack
      direction={{ xxs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: "100%",
        pt: 2,
      }}
    >
      <Stack
        direction="row"
        spacing={1.5}
        onClick={() => navigate("/")}
        sx={{ cursor: "pointer" }}
      >
        <img src="mr_bear.png" width={32} height={32} />
        <Typography variant="h1" fontSize={32}>
          Lauren Pickering
        </Typography>
      </Stack>
      <Stack direction="row" spacing={4} sx={{ py: 1 }}>
        {LINKS.map((linkData) => (
          <Link
            to={linkData.route}
            style={{
              textDecoration: "none",
              color: "#080808",
            }}
          >
            {linkData.title}
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default Navbar;
