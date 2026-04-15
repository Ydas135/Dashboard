import { useState } from "react";

export const TodoInput = ({ addTodo }) => {

  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <div className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button onClick={handleSubmit}>Agregar</button>
    </div>
  );
};