import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import Button from './Button';
import { MdAdd } from 'react-icons/md';

function AddTodoForm({ todoListName, numberTodos, onAddTodo }) {
	const [todoTitle, setTodoTitle] = useState('');

	const handleTitleChange = (event) => {
		setTodoTitle(event.target.value);
	};

	const handleAddTodo = (event) => {
		event.preventDefault();
		if (todoTitle !== '') {
			onAddTodo(todoTitle);
		}
		setTodoTitle('');
	};

	return (
		<>
			<h1>
				{numberTodos} . {todoListName}
			</h1>
			<form onSubmit={handleAddTodo}>
				<InputWithLabel
					todoTitle={todoTitle}
					handleTitleChange={handleTitleChange}
				>
					Todo
				</InputWithLabel>

				<Button type='submit'>
					<MdAdd className='btn-add' />
				</Button>
			</form>
		</>
	);
}

export default AddTodoForm;
