import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


//Not Easy 
// Above the App functional component, create a new function named useSemiPersistentState which will be a custom hook

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(

    //Update the default state for todoList to read your "savedTodoList" item from localStorage

    //  o	Hint: JSON.parse method  Update your default state to parse the value of the "savedTodoList" item
    JSON.parse(localStorage.getItem('savedTodoList'))
  );

//   •	  Open /src/App.js
// •	  Define a useEffect React hook with todoList as a dependency
// •	  Inside the side-effect handler function, save the todoList inside localStorage with the key "savedTodoList"

  React.useEffect(() => {

//     Update your side-effect function to convert todoList to a string before saving in localStorage
// o	Hint: JSON.stringify method

    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();


  // Add a return statement in useSemiPersistentState that returns the todoList state variable and setter in an Array 
  const addTodo = (newTodo) => {
    setTodoList([...(todoList || []), newTodo]);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
