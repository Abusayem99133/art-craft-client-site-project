import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorPage from "../ErrorPage";
import Home from "./Homes/Home";
import SignIn from "../Navbar/ProtectedSystem/SignIn";
import SignUp from "../Navbar/ProtectedSystem/SignUp";
import PrivateRoute from "../Navbar/PrivateRoute/PrivateRoute";
import CraftDetails from "../Pages/CraftDetails";
import AddCraft from "../Navbar/PrivateRoute/AddCraft";
import ArtList from "../Navbar/PrivateRoute/ArtList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details",
        element: (
          <PrivateRoute>
            <CraftDetails></CraftDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/craft",
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/craftList",
        element: (
          <PrivateRoute>
            <ArtList></ArtList>
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
