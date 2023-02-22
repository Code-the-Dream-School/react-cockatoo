import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function useSemiPersistentState () {
  let [todoList, setTodoList] = React.useState( 
    JSON.parse(localStorage.getItem('savedTodoList')) || []
  );

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return[todoList, setTodoList];
};

function App() {

  let [todoList, setTodoList] = useSemiPersistentState(
'savedTodoList',
'React'
  ); 

  function addTodo(newTodo){
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo (id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  return (
    <>
    <h1>Todo List:</h1>
    <AddTodoForm onAddTodo = {addTodo} />
    <TodoList todoList = {todoList} onRemoveTodo={removeTodo}/>

  </>
);
}

export default App;