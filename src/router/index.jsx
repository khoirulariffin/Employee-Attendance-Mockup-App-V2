import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "../Pages/Register/RegisterPage";
import LoginPage from "../Pages/Login/LoginPage";
import Layout from "../Pages/Layout/Layout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Schedule from "../Pages/Schedule/Schedule";
import Attendance from "../Pages/Attendance/Attendance";

const Router = createBrowserRouter([
  {
    path: "",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "attendance",
        element: <Attendance />,
      },
    ],
  },
]);

export default Router;
