import React from "react";
import TodoListItem from "./TodoListItem";


function TodoList({todoList}) {
  console.log(todoList);
  return (
      <ul>
        {todoList.map((todo) => {
          return <TodoListItem key={todo.id} todo={todo} />;
        })}
      </ul>
  );
}

export default TodoList;
