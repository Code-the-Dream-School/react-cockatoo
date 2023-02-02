import React from "react";
import { useState } from "react";

const AddTodoForm = ({onAddTodo}) => {
    const [todoTitle, setTodoTitle] = useState('');
    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value
        setTodoTitle(newTodoTitle)
    }
    const handleAddTodo = (event) => {
        event.preventDefault();
        console.log(todoTitle);
        onAddTodo({title: todoTitle, id: Date.now()});
        setTodoTitle("");   
    }
    return(
        <div>
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input 
            id="todoTitle" 
            type="text" 
            name="title" 
            value={todoTitle}
            onChange={(e) => handleTitleChange(e)}
            />
            <button type="submit">Add</button>
        </form>
        </div>
    )
}



export default AddTodoForm;