import React, { useEffect } from "react"
import TodoListItem from "./TodoListItem"

var todoList = [
  { id: 1, title: "Setup the project workspace" },
  { id: 2, title: "Complete the Lesson 1.1" },
  { id: 3, title: "Submit the assignment" },
]
function TodoList() {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
