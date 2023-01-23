import React, { useState } from "react";
import AddTodoForm from "./Component/AddTodoForm";
import TodoList from "./Component/TodoList";
import "./index.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const todoList = [
    { id: 1, title: "Submit Assignement" },
    { id: 2, title: "Watch video" },
    { id: 3, title: "Read lesson" },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p
        style={{
          fontSize: "26px",
          fontWeight: "700",
          color: "rgb(0, 131, 17)",
        }}
      >
        {newTodo}
      </p>
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;
