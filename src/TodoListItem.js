import React from "react"

function TodoListItem({ todo }) {
  return <li key="{todo.id}">{todo.title}</li>
}

export default TodoListItem
