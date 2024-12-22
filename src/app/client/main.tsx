import { browserRouter } from "@app/config/router";
import "@shared/ui/styles/reset.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

/** CSR */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
  </StrictMode>
);

/** SSR */
// hydrateRoot(
//   document,
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
