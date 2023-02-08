import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


function App() {

  //let [newTodo, setNewTodo] = React.useState(" ");
  let [todoList, setTodoList] = React.useState([]);

  function addTodo(newTodo){
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div>
    <h1>Todo List:</h1>
    <AddTodoForm onAddTodo = {addTodo} />
    {/* <p>{newTodo}</p> */}
    <TodoList todoList = {todoList}/>

  </div>
);
}

export default App;
