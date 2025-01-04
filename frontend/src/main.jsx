import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Router from "./config/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { CustomProvider } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { CartProvider } from "./contexts/UnauthenticatedCartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <CustomProvider>
        <AuthProvider>
          <CartProvider>
            <Router />
          </CartProvider>
        </AuthProvider>
      </CustomProvider>
    </HelmetProvider>
  </StrictMode>
);
