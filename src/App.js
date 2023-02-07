import React, { useState } from "react";
import AddTodoForm from "./Component/AddTodoForm";
import TodoList from "./Component/TodoList";
import "./index.css";

function App() {
  const [todoList, setTodoList] = useState([]); // [todos, setTodos

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;
