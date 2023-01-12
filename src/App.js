import React from 'react';

function App() {
  let todoList = [
    {id: 1, title: "value1"},
    {id: 2, title: "value2"},
    {id: 3, title: "value3"}
  ]
  return (
    <div>
      <h1>Todo list</h1>
      <ul>
        {
          todoList.map(todoItem => <li key={todoItem.id}>{todoItem.title}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
