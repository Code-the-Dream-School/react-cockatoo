import React from 'react';

const todoList = [
    {
      id: 1,
      title: "Read the book",
    },
    {
      id: 2,
      title: "Watch video",
    },
    {
      id: 3,
      title: "Complete assignment",
    }
  ]
function TodoList() {
return (
    <ul>
    {todoList.map(function(item) {
      return <li key={item.id}>
        <span>{item.title}</span>
        </li>
    })}

  </ul>
)
}
export default TodoList;