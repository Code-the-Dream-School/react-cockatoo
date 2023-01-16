import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  {
    id: 1,
    title: 'Read Road to React',
  },
  {
    id: 2,
    title: 'Complete homework assignment',
  },
  {
    id: 3,
    title: 'Submit homework',
  }
]

function TodoList(){
  return (
    <ul>
        {todoList.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
    </ul>
  )
}

export default TodoList;