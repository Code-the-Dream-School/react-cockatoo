import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
