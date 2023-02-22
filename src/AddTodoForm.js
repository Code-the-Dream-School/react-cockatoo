import React, { useEffect, useState } from "react"
import InputWithLabel from "./InputWithLabel"
function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("")
  function handleTitleChange(event) {
    let newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle)
  }
  function handleAddTodo(event) {
    event.preventDefault()
    onAddTodo({ title: todoTitle, id: Date.now() })
    setTodoTitle("")
  }
  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel inputName="title" inputValue={todoTitle} handleTitleChange={handleTitleChange} id="todoTitle">
        <strong>Title new</strong>
      </InputWithLabel>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodoForm
