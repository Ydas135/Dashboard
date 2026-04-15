import { TodoItem } from "./TodoItem";

export const TodoList = ({ title, todos, actions }) => {
    return (
        <div>
            <h2>{title}</h2>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} {...actions} />
            ))}
        </div>
    )
}