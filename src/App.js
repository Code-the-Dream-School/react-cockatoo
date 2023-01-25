import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';



// The App function is a functional component in React that represents the root of the application.
// It's using the useState hook to create a state variable called newTodo with an initial value of an empty string, 
//and a function called setNewTodo to update the state.

// The component returns a JSX element that renders the following:
// A <div> element that acts as the container for the rest of the elements.
// Inside the <div> element, an <h1> element that displays the text "ToDo List" as the title of the app.
// A custom component called AddTodoForm which is passed a prop onAddTodo that is set to the setNewTodo function.
// A <p> element that displays the current value of the newTodo state variable.
// A custom component called TodoList
// So this component is creating a ToDo List App that has two custom component, 
//AddTodoForm and TodoList and rendering a h1 element with "ToDo List" as the title and a p element that displays
// the current state of the variable newTodo and passing the setNewTodo function as prop onAddTodo to AddTodoForm component.

function App() {
  // Inside the App functional component, above the return statement, create a new state variable named newTodo with update function named setNewTodo
	const [newTodo, setNewTodo] = React.useState('');

	return (
		<div>
			<h1>ToDo List</h1>
			<AddTodoForm onAddTodo={setNewTodo} />
 {/* Below the <AddTodoForm /> component, add a paragraph element that displays the value of newTodo variable */}
			<p>{newTodo}</p>
			<TodoList />
		</div>
	);
}

export default App;