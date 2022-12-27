import React from "react";

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
        {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  )
}

export default TodoList;