import { TodoList } from "../components/TodoList"
import { TodoInput } from "../components/TodoInput"
import { useLocation, useOutletContext } from "react-router"

export const TodoListPage = () => {

  const { pathname } = useLocation();
  const route = pathname.split("/").filter(Boolean).at(-1);


  const context = useOutletContext();
  const {
    todos,
    addTodo,
    toggleComplete,
    togglePriority,
    deleteTodo
  } = context;

  let todosToShow = [];
  let title = "TODO";

  if (route === "completed") {
    todosToShow = todos.filter(t => t.completed);
    title = "COMPLETED";
  } 
  else if (route === "priority") {
    todosToShow = todos.filter(t => t.priority && !t.completed);
    title = "PRIORITY";
  } 
  else {
    todosToShow = todos.filter(t => !t.completed && !t.priority);
  }

  const actions = {
    toggleComplete,
    togglePriority,
    deleteTodo
  };

  return (
    <div className="flex flex-col gap-6">

      <h1 className="text-2xl font-bold">{title}</h1>

      {route === "todo" && <TodoInput addTodo={addTodo} />}

      <TodoList title={title} todos={todosToShow} actions={actions} />

    </div>
  );
};