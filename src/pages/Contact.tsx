import { useRef, useState } from "react";
import {
  Alert,
  Button,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      return;
    }

    emailjs
      .sendForm("service_jcjqat4", "template_bbtdllj", formRef.current, {
        publicKey: "user_9q7DlrkhVKyOQX0hE4im9",
      })
      .then(() => {
        setShowSuccess(true);
        formRef.current?.reset();
      });
  };

  const handleHideSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <>
      <Stack
        component="form"
        sx={{
          maxWidth: "600px",
          width: "100%",
          margin: "auto",
        }}
        spacing={4}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <Typography variant="h2" fontSize={32}>
          Contact
        </Typography>
        <TextField id="contact-name" label="Name" variant="filled" required />
        <TextField
          id="contact-email"
          label="Email"
          variant="filled"
          type="email"
          required
        />
        <TextField
          id="contact-description"
          label="Description"
          variant="filled"
          rows={4}
          multiline
          required
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
      <Snackbar
        open={showSuccess}
        autoHideDuration={4000}
        onClose={handleHideSuccess}
      >
        <Alert
          onClose={handleHideSuccess}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Message sent successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;
