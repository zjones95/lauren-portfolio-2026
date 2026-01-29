import { Button, Divider, Stack, Typography } from "@mui/material";

const About = () => {
  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      spacing={6}
      alignItems="center"
      sx={{ py: { xs: 0, lg: 2 }, maxWidth: "1000px", px: 2 }}
      flexWrap={{ xs: "wrap", lg: "initial" }}
      justifyContent="center"
    >
      <img
        src="about.png"
        style={{
          width: "300px",
          height: "300px",
          objectFit: "cover",
          borderRadius: "12px",
          border: "4px solid #1976d2",
        }}
      />
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          display: { xs: "none", lg: "flex" },
        }}
      />
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          display: { xs: "flex", lg: "none" },
        }}
      />
      <Stack spacing={2}>
        <Typography variant="h4">About Me</Typography>
        <Typography variant="body1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Typography>
        <Typography variant="body1">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Typography>
        <Button variant="contained">Get In Touch!</Button>
      </Stack>
    </Stack>
  );
};

export default About;
