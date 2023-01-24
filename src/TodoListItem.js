import React from "react"

function TodoListItem(props) {
  console.log(props)
  return <li key={props.todo.id}>{props.todo.title}</li>
}

export default TodoListItem
