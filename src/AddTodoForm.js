import React from 'react';
import { useState } from 'react';
import InputWithLabel from './InputWithLabel';

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
                <InputWithLabel  todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title</InputWithLabel>
                <button type="submit">Add</button>

            </form>
    );
}

export default AddTodoForm;