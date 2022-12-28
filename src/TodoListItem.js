import React from "react";

function TodoListItem(props) {
  return (
    <li key={props.key}>{props.todo.title}</li>
  )
}

export default TodoListItem;