import { createBrowserRouter } from "react-router-dom";
import "../index.css";
import OpenLayout from "../components/layout/OpenLayout";
import Home from "../pages/open/Home";
import PrivateLayot from "../components/layout/PrivateLayot";
import Dashboard from "../pages/private/Dashboard";
import ManageUser from "../pages/private/ManageUser";
import Profile from "../pages/private/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OpenLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/",
    element: <PrivateLayot />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/manage-user",
        element: <ManageUser />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
