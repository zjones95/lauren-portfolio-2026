import { Button, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  return (
    <Stack
      direction={{ xs: "column-reverse", lg: "row" }}
      spacing={6}
      sx={{
        py: { xs: 0, lg: 2 },
        maxWidth: "1000px",
        px: 2,
        minHeight: "600px",
        wrap: "wrap-reverse",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Stack spacing={3}>
        <Typography variant="h4">About Me</Typography>
        <Typography variant="body1" fontFamily="sans-serif">
          Hi! I’m Lauren Pickering, a Mexican-American illustrator and
          children’s art teacher based in the Bay Area. I enjoy creating story
          driven moments that feel like comfort, nostalgia, and a little bit of
          magic.
        </Typography>
        <Typography variant="body1" fontFamily="sans-serif">
          Teaching art to children keeps me close to curiosity and joyful
          storytelling. Outside of the classroom, I’m a hip hop
          dancer/choreographer who believes collaboration is the best way to
          make something special. I also find inspiration in precious family
          moments, hiking with my friends, or cuddling with my 3 cats.
        </Typography>
        <Typography variant="body1" fontFamily="sans-serif">
          I’ve received my B.A. in Animation & Illustration, with a focus in
          Entertainment and have experience in production style collaboration,
          whether Character Design, Research/Development, and Rigging.
        </Typography>
        <Typography variant="body1" fontFamily="sans-serif">
          When I’m drawing at home, you’ll often hear my black fluffy cat
          Bubbles chirping for attention while my Siamese cat Frank is sitting
          on my lap purring like a motorboat. Those are the moments I want to
          pause and capture in art… moments of love!
        </Typography>
        <Button variant="contained" onClick={() => navigate("/contact")}>
          Get In Touch!
        </Button>
      </Stack>
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
      <img
        src="about.png"
        style={{
          width: "350px",
          objectFit: "cover",
          border: "2px solid black",
        }}
      />
    </Stack>
  );
};

export default About;
