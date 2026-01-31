import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import { BrowserRouter } from "react-router";
import { Route } from "react-router";
import { Routes } from "react-router";
import LightboxProvider from "./providers/LightboxProvider.tsx";
import { Stack, ThemeProvider, createTheme } from "@mui/material";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";
import Lightbox from "./components/Lightbox.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import { green } from "@mui/material/colors";
import AuthProvider from "./providers/AuthProvider.tsx";
import AdminLogin from "./pages/AdminLogin.tsx";
import Admin from "./pages/Admin.tsx";
import AdminUpload from "./pages/AdminUpload.tsx";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Winky Sans",
    },
  },
  palette: {
    primary: green,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <LightboxProvider>
            <Stack
              sx={{
                maxWidth: "1280px",
                width: "100%",
                margin: "0 auto",
                p: 3,
                px: { xxs: 4, lg: 2 },
                scrollbarGutter: "stable both-edges",
                minHeight: "100vh",
              }}
              spacing={4}
              justifyContent="space-between"
            >
              <Stack spacing={6} alignItems="center">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<AdminLogin />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/admin-upload" element={<AdminUpload />} />
                </Routes>
              </Stack>
              <Footer />
            </Stack>
            <Lightbox />
          </LightboxProvider>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
