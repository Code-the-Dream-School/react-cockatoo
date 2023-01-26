import React from "react";
import TodoListItem from "./TodoListItem";
const todoList =[{id: 1, tittle: 'Grocery shopping'}, {id: 2, tittle:'pack boxes'}, {id:3, tittle:'buy headphones'}];

function TodoList() {
  return (
    <div>
    <ul>
      {todoList.map((todo)=>{
       return (
       <TodoListItem key = {todo.id} todo={todo}/>
       )
      })}
    </ul>
    </div>
  );
}

export default TodoList;