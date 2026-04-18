import { createHashRouter } from "react-router";
import { Home } from "../app/home/home";
import { DashboardLayout } from "../common/layouts/dashboardLayout";
import { AboutMe } from "../app/about/aboutMe";
import { TodoLayout } from "../features/todo/pages/TodoLayout";
import { TodoWelcome } from "../features/todo/pages/TodoWelcome";
import { TodoList } from "../app/todoList/todoList";


export const router = createHashRouter([
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
            Component:TodoList
          },
          {
            path: "completed",
            Component:TodoList
          },
          {
            path: "priority",
            Component:TodoList
          }
        ]

      }
    ]
  },

]);