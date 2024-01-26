import React from "react";
import { ToDoForm } from "./ToDoForm";
import { useState } from "react";
import { v4 as uuid4 } from 'uuid';
import { ToDo } from "./ToDo";
uuid4();

export const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);

        const addTodo = (todo) => {
            setTodos([...todos, {id: uuid4(), task: todo,
            completed: false, isEditing: false}])
            console.log(todos)
        }
    return (
        <div className="ToDoWrap">
            <ToDoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <ToDo task={todo} key={index} />
            ))}
            
        </div>
    )
}