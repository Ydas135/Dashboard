import { createBrowserRouter } from "react-router";
import { Home } from "../app/home/home";
import { dashboardLayout } from "../common/layouts/dashboardLayout";
import { aboutMe } from "../app/about/aboutMe";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: dashboardLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "about",
        Component:aboutMe
      }
    ]
  },

]);