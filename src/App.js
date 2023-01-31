import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [newTodo, setNewTodo] = React.useState('');
  return (
      <div>
        <h1>Todo List</h1>
          <TodoList />
          <AddTodoForm onAddTodo={setNewTodo} />
        <p>
          {newTodo}
        </p>
      </div>
  );
}

export default App;
