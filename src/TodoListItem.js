import React from "react";

const TodoListItem = (props) => {
  return (
      <li key={props.id}>{props.todo.tittle}</li>
  );
};

export default TodoListItem;
