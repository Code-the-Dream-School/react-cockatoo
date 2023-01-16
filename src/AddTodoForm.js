import React, { useState } from 'react'; 

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState('');

  function handleTitleChange(event){
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }
  function handleAddTodo(event){
    event.preventDefault();
    onAddTodo(
      {
        title: todoTitle,
        id: Date.now()
      }
    )

    setTodoTitle("");
  }
  return (
    <form onSubmit={(event) => handleAddTodo(event)}>
      <label htmlFor="todoTitle">Title </label>
      <input type="text" name="title" value={todoTitle}onChange={(event) => handleTitleChange(event)} />
      <button type="submit">Add</button>
    </form>
  ) 
}

export default AddTodoForm;
