import React from "react";
import { useState } from 'react';


export const ToDoForm = ({addTodo}) => {
        const [value, setValue] = useState('')

        const handleSubmit = (e) => {
            e.preventDefault();

            addTodo(value);

            setValue("")

        }

    return(
        <form className="ToDoForm" onSubmit={handleSubmit}>
            <input type="text" className="ToDoInput" value={value}
            placeholder="What is The Task Today?" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="ToDoButt">Add Task</button>
        </form>
    )
}