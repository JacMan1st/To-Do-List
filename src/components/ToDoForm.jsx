// import React from "react";


export const ToDoForm = () => {
    return(
        <form className="ToDoForm">
            <input type="text" className="ToDoInput"
            placeholder="What is The Task Today?" />
            <button type="submit" className="ToDoButt">Add Task</button>
        </form>
    )
}