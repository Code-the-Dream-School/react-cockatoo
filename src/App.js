import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import React from 'react';


const App = () => {

	// 	Create new state variable named todoList with setter 
	//setTodoList and default value of an empty Array

	const [todoList, setTodoList] = useState([]);

	// Declare a new function named addTodo that takes newTodo as a parameter 
	const addTodo = (newTodo) => {

		// Call the setTodoList state setter and use the 
		// spread operator to pass the existing Objects in 
		//the todoList Array along with the newTodo Object
		setTodoList([...todoList, newTodo]);
	};

	return (
		<div>
			<h1>ToDo List</h1>
			<AddTodoForm onAddTodo={addTodo} />
			<TodoList todoList={todoList} />
		</div>
	);
};

export default App;

