import { Outlet } from "react-router";
import { useTodo } from "../hooks/useTodo";

export const TodoLayout = () => {

  const todoState = useTodo();

  return (
    <div>
      <Outlet context={todoState} />
    </div>
  );
};
