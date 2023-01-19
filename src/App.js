import React from 'react'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import { useState } from 'react'

function App() {

  const [newTodo, setNewTodo] = useState();

  return (
    <div>
      <h1>Todo list</h1>
      <TodoList />
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
    </div>
  );
}

export default App;
