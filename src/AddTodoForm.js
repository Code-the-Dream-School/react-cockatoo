import React from "react";

function AddTodoForm(){
   const  handleAddTodo =(event)=>{
    event.preventDefault();
    const todoTitle = event.target.title.value; 
    console.log(todoTitle);

    }
return(
    <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Tittle</label>
        <input name="title" id="todoTitle"/>
        <button type="submit">Add</button>
    </form>
)
};

export default AddTodoForm;