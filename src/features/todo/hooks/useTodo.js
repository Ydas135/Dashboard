import { useState } from "react";
import { initialTodos } from "../data/dataTodo";

export const useTodo = () => {
    const [todos, setTodos] = useState(initialTodos);
    
    const addTodo = (text) => {
        const newTodo = {
            id:Date.now(),
            text,
            completed: false,
            priority: false
        }
        setTodos(prev => [...prev, newTodo])
    }

    const toggleComplete = (id) => {
        setTodos(prev => 
            prev.map(t =>
                t.id === id ? {...t, completed: !t.completed } : t
            )
        )
    }

    const togglePriority = (id) => {
        setTodos(prev => 
            prev.map(t =>
                t.id === id ? {...t, priority: !t.priority } : t
            )
        )
    }

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(t => t.id !== id))
    }

        console.log("TODOS:", todos);
    return{
        todos,
        addTodo,
        toggleComplete,
        togglePriority,
        deleteTodo
    }
    
}