import React from "react";

function AddTodoForm(props) {
  const hundleAddTodo = (e) => {
    e.preventDefault();
    const todoTitle = e.target.title.value;
    props.onAddTodo(todoTitle);
    e.target.title.value = "";
  };

  return (
    <div>
      <form onSubmit={hundleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input type="text" id="todoTitle" name="title" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
