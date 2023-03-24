import "./App.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  const API_ENDPOINT = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Tittle/`;

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_ENDPOINT}`, {
      method: "GET",
      headers:{
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      },
    })
    .then((response)=>response.json())
    .then((result) => {

      setTodoList([...result.records]);
      setIsLoading(false);
    })
    
  .catch((error) => console.error(error)); 
},[]);

  useEffect(() => {
    if(!isLoading){
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    } 
  }, [todoList, isLoading]);

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"}
      element={
       <>
      <h1>TO-DO List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <p>{addTodo}</p>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
      )}
      </>
    }
      />
      <Route path={"/new"} element={<h1>New Todo List</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
