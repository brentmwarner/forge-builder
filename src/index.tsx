import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Builder } from "./screens/Builder/Builder";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Builder />
  </StrictMode>,
);
