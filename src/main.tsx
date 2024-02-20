import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router/index.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import ScrollBar from "./components/ui/ScrollBar.tsx";
import Cursor from "./components/ui/Cursor.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
      <Cursor />
      <ScrollBar />
    </div>
  </React.StrictMode>
);
