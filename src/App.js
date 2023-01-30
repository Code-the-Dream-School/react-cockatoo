import React from 'react';

import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


const App = () => {

  const [newTodo, setNewTodo] = React.useState("");
//   Inside the App functional component, above the return statement, create a new state variable named newTodo with update function named setNewTodo
// hint: useState hook
  return (
    <div>
      <h1>Todo List</h1> 
     

     <AddTodoForm onAddTodo={setNewTodo}/>  
     {/* Pass setNewTodo as a callback handler prop named onAddTodo to the AddTodoForm component */}
     <TodoList />


     <p>{newTodo}</p>
     {/* Below the <AddTodoForm /> component, add a paragraph element that displays the value of newTodo variable */}


    </div>
  );
}

export default App;
