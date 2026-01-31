import {
  Alert,
  Button,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../providers/AuthContext";
import { useNavigate } from "react-router";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { claims, login, authError, clearError } = useAuthContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login(email, password);
    setPassword("");
  };

  useEffect(() => {
    if (claims) {
      navigate("/admin");
    }
  }, [claims, navigate]);

  return (
    <>
      <Snackbar
        open={Boolean(authError?.message)}
        autoHideDuration={4000}
        onClose={clearError}
      >
        <Alert
          onClose={clearError}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Error logging in, please try again!
        </Alert>
      </Snackbar>
      <Stack
        component="form"
        sx={{
          maxWidth: "600px",
          px: 2,
          width: "100%",
          textAlign: "center",
        }}
        spacing={3}
        onSubmit={handleSubmit}
      >
        <Typography variant="h3">Login</Typography>
        <TextField
          id="email"
          label="Email"
          variant="filled"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <TextField
          id="password"
          label="Password"
          variant="filled"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </>
  );
};

export default AdminLogin;
