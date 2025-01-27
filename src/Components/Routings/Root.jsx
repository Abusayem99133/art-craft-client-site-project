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

import AllCraftItems from "./AllCraftItems";
import UpdatePage from "../Pages/UpdatePage";
import ArtCraftCategorys from "../Pages/ArtCraftCategorys";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://my-art-craft-server-project.vercel.app/craft"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <CraftDetails></CraftDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://my-art-craft-server-project.vercel.app/craft/${params.id}`
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
        path: "/craftItem",
        element: <AllCraftItems></AllCraftItems>,
        loader: () =>
          fetch("https://my-art-craft-server-project.vercel.app/craft"),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/update/:id",
        element: <UpdatePage></UpdatePage>,
        // loader: ({ params }) =>
        //   fetch(`https:/my-art-craft-server-project.vercel.app/craft/${params.id}`),
      },
      {
        path: "/",
        element: <ArtCraftCategorys></ArtCraftCategorys>,
      },
    ],
  },
]);
