import { createBrowserRouter } from "react-router";
import { Home } from "../app/home/home";
import { DashboardLayout } from "../common/layouts/dashboardLayout";
import { AboutMe } from "../app/about/aboutMe";
import { TodoLayout } from "../features/todo/pages/TodoLayout";
import { TodoWelcome } from "../features/todo/pages/TodoWelcome";
import { TodoListPage } from "../features/todo/pages/TodoListPage";

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
        path: "todo-module",
        Component:TodoLayout,
        children:[
          {
            index: true,
            Component:TodoWelcome
          },
          {
            path: "todo",
            Component:TodoListPage
          },
          {
            path: "completed",
            Component:TodoListPage
          },
          {
            path: "priority",
            Component:TodoListPage
          }
        ]

      }
    ]
  },

]);