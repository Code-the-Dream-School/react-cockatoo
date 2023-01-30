import React from "react";

function AddTodoForm(props){
   const  handleAddTodo =(event)=>{
    event.preventDefault();
    const todoTitle = event.target.title.value; 
    console.log(todoTitle);
    props.onAddTodo(todoTitle);

    }
return(
    <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Tittle</label>
        <input type = "text" name="title" id="todoTitle"/>
        <button type="submit">Add</button>
    </form>
)
};

export default AddTodoForm;