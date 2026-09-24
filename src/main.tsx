import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PropertyProvider } from "./context/PropertyContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PropertyProvider>
      <App />
    </PropertyProvider>
  </StrictMode>,
);
