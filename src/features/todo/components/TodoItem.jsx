export const TodoItem = ({ todo, toggleComplete, togglePriority, deleteTodo }) => {
    if (!todo) return null;
    return (
      <div className="flex justify-between">

        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
        </span>

      <div className="flex items-center gap-2">
        <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        />

        <span className="flex"
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
        </span>
      </div>

      <div className="flex gap-2">
          <button onClick={() => togglePriority(todo.id)}>
            {todo.priority ? "⭐" : "☆"}
          </button>

          <button onClick={() => deleteTodo(todo.id)}>
            ❌
          </button>
      </div>

    </div>
    )
}