import React, { useEffect, useState } from "react"
import InputWithLabel from "./InputWithLabel"
import PropTypes from "prop-types"
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
    <form onSubmit={handleAddTodo} className="TodoForm">
      <InputWithLabel inputName="title" inputValue={todoTitle} handleTitleChange={handleTitleChange} id="todoTitle" placeholder="New Todo Title">
        <strong>Title new</strong>
      </InputWithLabel>
      <button type="submit" className="btnAddTodo">
        Add
      </button>
    </form>
  )
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
}

export default AddTodoForm
