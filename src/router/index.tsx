import { createBrowserRouter } from "react-router-dom";
import "../index.css";
import OpenLayout from "../components/layout/OpenLayout";
import Home from "../pages/open/Home";
import PrivateLayot from "../components/layout/PrivateLayot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OpenLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/dashboard",
    element: <PrivateLayot />,
  },
]);

export default router;
