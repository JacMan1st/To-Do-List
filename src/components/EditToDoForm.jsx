// import React from "react";
import { useState } from 'react';


export const editToDoForm = ({editTodoTodo, task}) => {
        const [value, setValue] = useState(task.task)

        const handleSubmit = (e) => {
            e.preventDefault();

            editTodo(value, task.id);

            setValue("")

        }

    return(
        <form className="ToDoForm" onSubmit={handleSubmit}>
            <input type="text" className="ToDoInput" value={value}
            placeholder="Edit Task." onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="ToDoButt">Update</button>
        </form>
    )
}