import { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";

type FormData = {
  name: string;
  email: string;
  description: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (fieldName: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  console.log({ formData });

  const isFormFilled = Object.values(formData).every((v) => v.length > 0);
  console.log({ isFormFilled });

  return (
    <Stack
      component="form"
      sx={{
        maxWidth: "600px",
        width: "100%",
        margin: "auto",
      }}
      spacing={4}
    >
      <Typography variant="h2" fontSize={32}>
        Contact
      </Typography>
      <TextField
        id="contact-name"
        label="Name"
        variant="filled"
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <TextField
        id="contact-email"
        label="Email"
        variant="filled"
        type="email"
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <TextField
        id="contact-description"
        label="Description"
        variant="filled"
        rows={4}
        multiline
        onChange={(e) => handleChange("description", e.target.value)}
      />
      <Button type="submit" variant="contained" disabled={!isFormFilled}>
        Submit
      </Button>
    </Stack>
  );
};

export default Contact;
