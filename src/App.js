import "./App.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { useState } from "react";
import { useEffect } from "react";

const useSemiPersistentState =()=>{
const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("savedTodoList")));
  useEffect(()=>{
localStorage.setItem('savedTodoList',JSON.stringify(todoList))
  },[todoList]);

  return [todoList, setTodoList];
}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList,newTodo]);
  };



  return (
    <>
      <h1>TO-DO List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <p>{addTodo}</p>
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
