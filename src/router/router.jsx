import { createHashRouter } from "react-router";
import { Home } from "../app/home/home";
import { DashboardLayout } from "../common/layouts/dashboardLayout";
import { AboutMe } from "../app/about/aboutMe";
import { TodoLayout } from "../features/todo/pages/TodoLayout";
import { TodoWelcome } from "../features/todo/pages/TodoWelcome";
import { TodoList } from "../app/todoList/todoList";
import { PokemonDetail } from "../app/pokemon/pokemonDetail";
import { Pokemon } from "../app/pokemon/pokemon"
import { Login } from "../app/login/Login";
import { ProtectedRoute } from "../features/auth/components/ProtectedRoute";


export const router = createHashRouter([

  {
    path:"/login",
    Component:Login
  },
  {
    element:<ProtectedRoute />,
    children:[
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
              path: "pokemon",
              Component:Pokemon,
            },
            {
              path: "pokemon/:name",
              Component:PokemonDetail
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

          },
        ]
      },
    ]
  },

]);