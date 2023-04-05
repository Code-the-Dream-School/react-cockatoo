import React from "react";
import TodoListItem from "./TodoListItem";
import style from "./TodoListItem.module.css";

// Add props as a parameter to the TodoList functional component
function TodoList({ onRemoveTodo, todoList }) {
  return (
    <ul className={style.todoList}>
      {
        todoList.map(function (todo) {
          return (
            <TodoListItem
              onRemoveTodo={onRemoveTodo}
              key={todo.id}
              title={todo.fields.Title}
              id={todo.id}
            />
          );
        })
        //         Inside the map() method, use the TodoListItem component
        //  Pass key as a prop equal to the id of the todo object
        //  Pass todo as a prop
      }
    </ul>
  );
}
export default TodoList;
