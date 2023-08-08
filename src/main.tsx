import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import SignIn from "./pages/SIGNIN/SignIn.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import Users from "./pages/Users/Users.tsx";
import UserDetail from "./pages/UserDetail/UserDetail.tsx";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        index: true,
        element: <Users />,
      },
      {
        path: "user/:id",
        element: <UserDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
