import React from "react";
import { useState } from "react";

function AddTodoForm({onAddTodo}) {
    const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (e) => {
    const newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(todoTitle);
    onAddTodo({title: todoTitle, id:Date.now()});
    setTodoTitle("");
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Tittle</label>
      <input
        onChange={handleTitleChange}
        value={todoTitle}
        type="text"
        name="title"
        id="todoTitle"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
