import React from "react";

function AddTodoForm(props) {

    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.title.value; 
        console.log(todoTitle);
        event.target.title.value = "";
        
        props.onAddTodo(todoTitle);
    }
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label> Title </label>
                <input id="todoTitle" htmlFor="todoTitle" name="title"></input>
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;