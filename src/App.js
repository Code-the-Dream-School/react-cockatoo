import React from "react";

const todoList = [
  {
    id: 1,
    title: "Complete Assignment",
  },
  {
    id: 2,
    title: "Review Assignment",
  },
  {
    id: 3,
    title: "Submit Assignment",
  },
];

function App() {
  return (
    <div>
      <header>
        <h1>Todo List</h1>
        <ul>
          {todoList.map(function (item) {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
