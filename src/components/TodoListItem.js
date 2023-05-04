import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import style from "./TodoListItem.module.css"
import PropTypes from "prop-types"

function TodoListItem({ todo, onRemoveTodo }) {
  const CreatedTime = (dateTime) => {
    let date = new Date(dateTime)
    return date.toLocaleString()
  }
  return (
    <div className={style.TodoItem}>
      <li className={style.ListItem} key="{todo.id}">
        {todo.fields.Title} <span className={style.TxtMuted}>{CreatedTime(todo.createdTime)} </span>
        <button type="button" onClick={() => onRemoveTodo(todo.id)} className={style.btnRemoveItem}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
    </div>
  )
}

TodoListItem.propTypes = {
  onRemoveTodo: PropTypes.func.isRequired,
}
export default TodoListItem
