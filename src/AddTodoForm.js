import React from 'react';

function AddTodoForm(props) {

    const handleAddTodo = (event) => {
        event.preventDefault()
        var todoTitle = event.target["title"].value
        console.log(todoTitle);
        props.onAddTodo(todoTitle)
        document.getElementById("todoForm").reset();


    }

    return (

        <form id="todoForm" onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title:</label>
            <input id="todoTitle" type="text" name="title" />
            <button>Add</button>
        </form>

    );

}


export default AddTodoForm;