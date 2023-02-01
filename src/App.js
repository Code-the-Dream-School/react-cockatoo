import React from 'react';
import './index.css';

function App() {
  const todoList = [{id: 1, title: 'Submit Assignement'},{id: 2, title: 'Watch video'},{id: 3, title: 'Read lesson'}];
    return (
    <div style={{ textAlign: 'center' }}>
      <header>
       <h1>Todo List</h1>
      </header>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
