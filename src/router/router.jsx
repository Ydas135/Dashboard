import { createHashRouter } from "react-router";
import { Home } from "../app/home/home";
import { DashboardLayout } from "../common/layouts/dashboardLayout";
import { AboutMe } from "../app/about/aboutMe";
import { TodoLayout } from "../features/todo/pages/TodoLayout";
import { TodoWelcome } from "../features/todo/pages/TodoWelcome";
import { TodoList } from "../app/todoList/todoList";
import { RickAndMorty } from "../app/rickandmorty/RickAndMorty";
import { Character } from "../app/rickandmorty/Character";
import { PokemonDetail } from "../app/pokemon/pokemonDetail";
import { Pokemon } from "../app/pokemon/pokemon"


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
          },
          {
            path: "rick-and-morty",
            Component:RickAndMorty
          },
          {
            path: "rick-and-morty/character/:characterId",
            Component:Character
          }
        ]

      }
    ]
  },

]);