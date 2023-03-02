import React, { useEffect } from "react"
import TodoListItem from "./TodoListItem"

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} id={todo.id} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </>
  )
}

export default TodoList
