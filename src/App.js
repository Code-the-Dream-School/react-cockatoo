import React from 'react';

import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App () {

  // Create new state variable named todoTitle with setter setTodoTitle
  const [todoList, setTodoList] = React.useState ([]);

  // Remove the newTodo state variable and the corresponding JSX that displays it

  // const [newTodo, setNewTodo] = React.useState("");
//   Inside the App functional component, above the return statement, create a new state variable named newTodo with update function named setNewTodo
// hint: useState hook

// Declare a new function named addTodo that takes newTodo as a parameter
//  Call the setTodoList state setter and use the spread operator to pass the existing Objects in the todoList Array along with the newTodo Object
function addTodo(newTodo) {
  setTodoList([...todoList, newTodo])
}
  return (
    <div>
      <h1>Todo List</h1> 
     
      {/* Change the value of the onAddTodo prop for AddTodoForm to addTodo */}

     <AddTodoForm onAddTodo={addTodo}/>  
     {/* Pass setNewTodo as a callback handler prop named onAddTodo to the AddTodoForm component */}
     
     {/* Pass todoList state as a prop named todoList to the TodoList component */}
     <TodoList todoList = {todoList}/>


     
     {/* Below the <AddTodoForm /> component, add a paragraph element that displays the value of newTodo variable */}


    </div>
  );
}

export default App;
