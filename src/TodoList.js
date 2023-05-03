import React, { useEffect } from "react"
import TodoListItem from "./TodoListItem"
import style from "./TodoList.module.css"

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <>
      <ul className={style.TodoList}>
        {todoList.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} id={todo.id} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </>
  )
}

export default TodoList
