import React, { useEffect } from "react"

function AddTodoForm(props) {
  function handleAddTodo(event) {
    event.preventDefault()
    let todoTitle = event.target.title.value
    event.target.title.value = ""
    console.log(todoTitle)
    props.onAddTodo(todoTitle)
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle"> Title</label>
      <input type="text" id="todoTitle" name="title" />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodoForm
