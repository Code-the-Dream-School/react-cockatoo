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

function App() {
  return (
    <div>
      <h1>Todo List</h1> 
      <ul>
        {todoList.map(function(item) {
          return <li key={item.id}>
            <span>{item.title}</span>
            </li>
        })}

      </ul>

    </div>
  );
}

export default App;
