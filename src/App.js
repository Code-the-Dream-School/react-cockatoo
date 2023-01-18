import React from 'react';


let todoList =[
  {
   id: 1,
    title: "Call your Mother Again",
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

   function App() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Todo List</h1>
        <ul>
          {todoList.map(item =>
            <li key={item.id}>
              <li>{item.title}</li>
            </li>
            )}
  
        </ul>
      </div>
    );
  }
  
  export default App;