import React from "react";
import { EditToDoForm} from "./EditToDoForm";
import { ToDoForm } from "./ToDoForm";
import { useState } from "react";
import { v4 as uuid4 } from 'uuid';
import { ToDo } from "./ToDo";

export const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);

        const addTodo = (todo) => {
            setTodos([...todos, {id: uuid4(), task: todo,
            completed: false, isEditing: false}])
        }

        const toggleComplete = (id) => {
            setTodos(todos.map(todo => todo.id === id ? 
                {...todo, completed: !todo.completed} : todo ))
        }
        const deleteTodo = (id) => {
            setTodos(todos.filter(todo => todo.id !== id))
        }
        const editTodo = (id) => {
            setTodos(todos.map(todo => todo.id === id ?
                {...todo, isEditing: !todo.isEditing} : todo))
        }
        const editTask = (task, id) => {
            setTodos(todos.map(todo => todo.id === id ? 
                {...todo, task, isEditing: !todo.isEditing} : todo))
            };

    return (
        <div className="ToDoWrap">
            
            <h1>TaDo</h1>

            <ToDoForm addTodo={addTodo} />
                {todos.map((todo, index) => (
                    todo.isEditing ? (
                    <EditToDoForm 
                        editTodo={editTask} 
                        task={todo} 
                        key={todo.id} 
                    />
                    ) : (

                        <ToDo 
                            task={todo} 
                            key={todo.id} 
                            toggleComplete={toggleComplete}
                            deleteTodo={deleteTodo} 
                            editTodo={editTodo} 
                        />
                    )
            ))};
            
        </div>
    )
}