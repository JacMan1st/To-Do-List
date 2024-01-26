import React from "react";
import { useState } from 'react';


export const EditToDoForm = ({editTodo, task, addTodo}) => {
        const [value, setValue] = useState(task.task)

        const handleSubmit = (e) => {
            e.preventDefault();

            editTodo(value, task.id);
            if (value) {
                // add todo
                addTodo(value);
                // clear form after submit
                setValue('');
            }
        }

    return(
        <form className="ToDoForm" onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setValue(e.target.value)} 
            className="ToDoInput" value={value} placeholder="Edit Task."  />
                <button type="submit" className="ToDoButt">Update</button>
        </form>
    )
}