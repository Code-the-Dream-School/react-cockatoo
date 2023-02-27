import React from "react";
import { useState } from "react";
import InputWithLabel from "./InputWithLabel";

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
      <InputWithLabel handleTitleChange={handleTitleChange} todoTitle={todoTitle}> <strong>Title:</strong></InputWithLabel>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
