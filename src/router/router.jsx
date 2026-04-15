import { createBrowserRouter } from "react-router";
import { Home } from "../app/home/home";
import { DashboardLayout } from "../common/layouts/dashboardLayout";
import { AboutMe } from "../app/about/aboutMe";
import { Todo } from "../app/todo/todo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "about",
        Component:AboutMe,
      },
      {
        path: "todo",
        Component:Todo,
      }
    ]
  },

]);