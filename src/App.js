import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function useSemiPersistentState (key, initialState) {
  let [todoList, setTodoList] = React.useState( 
    JSON.parse(localStorage.getItem(key))|| initialState
  );

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  React.useEffect(() => {
    localStorage.getItem('savedTodoList', JSON.stringify(todoList))
  }, []); //use empty dependency array

  return[todoList, setTodoList];
};

function App() {

  let [todoList, setTodoList] = useSemiPersistentState(
'savedTodoList',
'React'
  );
  // React.useState( 
  //   JSON.parse(localStorage.getItem('savedTodoList'))|| [])
  //   ;

//update side effect function to convert todoList
//to a string before saving in localStorage
//use JSON.stringify method

// const myJSON = JSON.stringify(todoList);

  // React.useEffect(() => {
  //   localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  // }, [todoList]);
  // // return(
  // //   [todoList, setTodoList]
  // // );

  // React.useEffect(() => {
  //   localStorage.getItem('savedTodoList', JSON.stringify(todoList))
  // }, []); //use empty dependency array
  

  function addTodo(newTodo){
    setTodoList([...todoList, newTodo]);
  }

  return (
    <>
    <h1>Todo List:</h1>
    <AddTodoForm onAddTodo = {addTodo} />
    {/* <p>{newTodo}</p> */}
    <TodoList todoList = {todoList}/>

  </>
);
}

export default App;