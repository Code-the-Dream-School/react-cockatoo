import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import style from "./TodoListItem.module.css"

function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <div className={style.TodoItem}>
      <li className={style.ListItem} key="{todo.id}">
        {todo.fields.Title}
        <button type="button" onClick={() => onRemoveTodo(todo.id)} className={style.btnRemoveItem}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
    </div>
  )
}

export default TodoListItem
