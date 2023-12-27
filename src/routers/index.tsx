import { createBrowserRouter } from "react-router-dom";
import "../index.css";
import OpenLayout from "../components/layout/OpenLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OpenLayout />,
  },
]);

export default router;
