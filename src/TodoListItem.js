import React from "react";
import style from "./TodoListItem.module.css";
//import IconButton from "./IconButton";
import { FaTrashAlt } from "react-icons/fa";

// update props to use destructuring
const TodoListItem = ({ id, onRemoveTodo, title }) => {
  return (
    <>
      <ul className={style.todoListItemContainer}>
        <li className={style.listItem}>
          {title}

          <button
            className={style.removeButton}
            type="button"
            onClick={() => onRemoveTodo(id)}
          >
            <FaTrashAlt size="1rem" color="#262626" />
          </button>
        </li>
      </ul>
    </>
  );
};

export default TodoListItem;
