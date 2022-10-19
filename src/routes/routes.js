import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Words from "../components/Words/Words";
import Topics from "../components/Topics/Topics";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/words",
        element: (
          <PrivateRoutes>
            <Words></Words>
          </PrivateRoutes>
        ),
      },
      {
        path: "/topics",
        element: <Topics></Topics>,
      },
    ],
  },
]);
