import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Router from "./config/routes.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  </StrictMode>
);
