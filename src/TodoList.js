import React, { useEffect } from "react"
import TodoListItem from "./TodoListItem"

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
