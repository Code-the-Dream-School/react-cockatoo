import React from 'react';
import ToDoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  return (
      <div>
        <h1>Todo List</h1>
        <ToDoList />
        <AddTodoForm />
      </div>
  );
}

export default App;
