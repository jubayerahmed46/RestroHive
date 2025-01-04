import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Router from "./config/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { CustomProvider } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { CartProvider } from "./contexts/UnauthenticatedCartContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
/**
 * To implement tanstack query
 * create queryClient
 * wrap it using provider and pase a prop of client
 * then user tanstack in anywhere
 *
 * */

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <CustomProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <CartProvider>
              <Router />
            </CartProvider>
          </QueryClientProvider>
        </AuthProvider>
      </CustomProvider>
    </HelmetProvider>
  </StrictMode>
);
