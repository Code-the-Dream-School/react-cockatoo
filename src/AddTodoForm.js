import React from 'react';
import { useState } from 'react';

function AddTodoForm({onAddTodo}) {

    const [todoTitle, setTodoTitle] = useState("");

    const handleTitleChange = (event) => {
        var newTodoTitle = event.target.value;
        console.log(event)
        setTodoTitle(newTodoTitle);
    }
    const handleAddTodo = (event) => {
        event.preventDefault()
        onAddTodo({title: todoTitle, id: Date.now()})
        setTodoTitle("");


    }

    return (

        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input 
            id="todoTitle" 
            name="title" 
            value={todoTitle} 
            onChange={handleTitleChange} /> 
            <button type="submit">Add</button>
        </form>

    );

}


export default AddTodoForm;