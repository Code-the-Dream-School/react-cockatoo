import React from 'react';

const todoList = [
  {
    id: 1, title: "Complete Assignment"
  },

  {
    id: 2, title: "Turn in Assignment"
  },

  {
    id: 3, title: "Review Assignment"
  },
];



function App() {
  return (
    <div>
      <h1>To-Do List:</h1>
      <ul>{todoList.map(list => <li key = {list.id}>{list.title}</li>)}</ul>
    </div>
  );
}

export default App;
