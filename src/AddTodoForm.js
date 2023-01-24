import React from 'react';

function AddTodoForm (props) {
    function handleTodoForm (event){
        event.preventDefault();
        let todoTitle = event.target.title.value;
        console.log(todoTitle);
        props.onAddTodo(todoTitle);
        event.target.reset();
    }
    return (
        <form onSubmit = {handleTodoForm}>
            <label htmlFor="todoTitle"> Title </label>
            <input type="text" id="todoTitle"/>
            <button type="submit"> Add</button>
        </form>
    )
}

export default AddTodoForm;