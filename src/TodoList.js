import React from 'react';


let todoList =[
  {
   id: 1,
    title: "Call your Mother",
   },
  {
   id: 2,
    title: "Water the plants",
   },
  {
     id: 3,
     title: "Find a Loft",
   },
   ];

   function TodoList() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>The List of Todos</h2>
        <ul style={{ listStyleType: 'none' }}>
          {todoList.map(item =>
            <li key={item.id}>
              <li>{item.title}</li>
            </li>
            )}
  
        </ul>
      </div>
    );
  }

export default TodoList