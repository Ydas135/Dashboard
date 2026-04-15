export const TodoItem = ({ todo, toggleComplete, togglePriority, deleteTodo }) => {
    if (!todo) return null;
    return (
        <div className="flex justify-between">

      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>

      <div>
        <button onClick={() => toggleComplete(todo.id)}>✅</button>
        <button onClick={() => togglePriority(todo.id)}>⭐</button>
        <button onClick={() => deleteTodo(todo.id)}>❌</button>
      </div>

    </div>
    )
}