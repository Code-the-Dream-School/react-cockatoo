import React, { useEffect } from "react"

var todoList = [
  { id: 1, title: "Setup the project workspace" },
  { id: 2, title: "Complete the Lesson 1.1" },
  { id: 1, title: "Submit the assignment" },
]
function TodoList() {
  return (
    <ul>
      {todoList.map((x) => (
        <li key={x.id}>{x.title}</li>
      ))}
    </ul>
  )
}

export default TodoList
