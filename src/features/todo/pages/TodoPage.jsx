import { useTodo } from "../hooks/useTodo"
import { TodoList } from "../components/TodoList"
import { TodoInput } from "../components/TodoInput"
import { useSearchParams } from "react-router";

export const TodoPage = () => {

  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const {
    normalTodos,
    priorityTodos,
    completedTodos,
    addTodo,
    toggleComplete,
    togglePriority,
    deleteTodo
  } = useTodo();

  const todosToShow = filter === "completed" ? completedTodos : filter === "priority" ? priorityTodos : normalTodos
  

  const actions = {
    toggleComplete,
    togglePriority,
    deleteTodo
  };

  return (
    <div className="flex flex-col gap-6">

      <h1 className="text-2xl font-bold">TODO MODULE</h1>

      {/* ✅ INPUT CORRECTO */}
      <TodoInput addTodo={addTodo} />

      {/* 🔥 SOLO UNA LISTA DINÁMICA */}
      <TodoList title="Tasks" todos={todosToShow} actions={actions} />

    </div>
  );
};
