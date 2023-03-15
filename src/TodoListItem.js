import React from "react";

const TodoListItem = ({ todo, onRemoveTodo}) => {
  return (
      <li key={todo.id}>{todo.fields.Title} <button onClick={()=>onRemoveTodo(todo.id)}>X</button></li>
  );
};

export default TodoListItem;
