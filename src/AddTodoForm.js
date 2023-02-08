import { useState } from 'react';
import React from 'react';

//Next updated props to use destructuring

const AddTodoForm = ({ onAddTodo }) => {
	//Create new state variable named todoTitle with setter setTodoTitle
	const [todoTitle, setTodoTitle] = useState('');

	// Above the handleAddTodo function, declare a new function 
	//named handleTitleChange that takes event as a parameter
	const handleTitleChange = (event) => {

		//First, retrieve the input value from the event object
		// and store in variable named newTodoTitle
		const newTodoTitle = event.target.value;

		//  Then, call the state setter setTodoTitle and pass newTodoTitle
		setTodoTitle(newTodoTitle);
	};

	const handleAddTodo = (event) => {
		event.preventDefault();
		// Here we removed the todoTitle variable and updated onAddTodo 
		// callback handler to pass our todoTitle state variable instead 
		onAddTodo({
			title: todoTitle,
			id: Date.now(),
		});
		setTodoTitle('');
	};
	return (
		<div>
			<form onSubmit={handleAddTodo}>
				<label htmlFor='todoTitle'>Title</label>
				
				<input
					id='todoTitle'
					type='text'
					name='title'
					//Add value prop equal to todoTitle from component props
					value={todoTitle}
					//Add onChange prop equal to handleTitleChange function reference 
					onChange={handleTitleChange}></input>
				<button>Add</button>
			</form>
		</div>
	);
};

export default AddTodoForm;