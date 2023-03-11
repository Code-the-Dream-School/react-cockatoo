import "./App.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { useState, useEffect } from "react";

function App() {
  
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          {
            data: {},
            todoList: JSON.parse(localStorage.getItem("savedTodoList")),
          } || todoList
        );
      }, 2000);
    }).then((result) => {
      setTodoList(result);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    !isLoading &&
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <>
      <h1>TO-DO List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <p>{addTodo}</p>
      {isLoading? <p>Loadind...</p> : <TodoList onRemoveTodo={removeTodo} todoList={todoList} /> }
      
      
    </>
  );
}

export default App;
