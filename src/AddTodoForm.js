import React, { useState } from 'react'; 

function AddTodoForm(props) {
    const [todoTitle, setTodoTitle] = useState('');

  function handleAddTodo(event){
    event.preventDefault();
    console.log(todoTitle);
    props.onAddTodo(todoTitle);
    event.target.reset();
  }
  return (
    <form onSubmit={(e) => handleAddTodo(e)}>
      <label htmlFor="todoTitle">Title</label>
      <input type="text" name="title" onInput={(e) => setTodoTitle(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  ) 
}

export default AddTodoForm;
