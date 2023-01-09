import React from 'react';

function App() {
  const todoList = [{index: 1, title: 'Submit Assignement'},{index: 2, title: 'Watch video'},{index: 3, title: 'Read lesson'}];
    return (
    <div style={{ textAlign: 'center' }}>
      <header>
       <h1>Todo List</h1>
      </header>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.index}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
