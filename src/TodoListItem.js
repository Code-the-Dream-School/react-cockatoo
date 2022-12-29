import React from "react";

function TodoListItem({ todo }) {
  return (
    <li key={todo.key}>{todo.title}</li>
  )
}

export default TodoListItem;