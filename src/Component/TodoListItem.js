import React from "react";
import style from "./TodoListItem.module.css";

const TodoListItem = (props) => {
  const { todo, onRemoveTodo, title} = props;

  return (
    <li className={style.ListItem}>
      {title} <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoListItem;
