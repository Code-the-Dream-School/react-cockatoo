import React from "react";

// update props to use destructuring
const TodoListItem = ({ id, onRemoveTodo, title }) => {
  return (
    <>
      <li>
        {title}
        <button type="button" onClick={() => onRemoveTodo(id)}>
          Remove
        </button>
      </li>
    </>
  );
};

export default TodoListItem;
