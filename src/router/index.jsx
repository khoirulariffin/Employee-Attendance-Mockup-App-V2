import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "../Pages/Register/RegisterPage";
import LoginPage from "../Pages/Login/LoginPage";

const Router = createBrowserRouter([
  {
    path: "",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default Router;
