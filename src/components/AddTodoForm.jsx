import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import Button from './Button';
import { MdAdd, MdVolumeOff, MdVolumeUp } from 'react-icons/md';

function AddTodoForm({
	todoListName,
	numberTodos,
	onAddTodo,
	isMuted,
	setIsMuted,
}) {
	const [todoTitle, setTodoTitle] = useState('');
	const handleTitleChange = (event) => {
		setTodoTitle(event.target.value);
	};
	const handleAddTodo = (event) => {
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

				{isMuted ? (
					<Button onClick={() => setIsMuted(false)}>
						<MdVolumeOff className='btn-volume' />
					</Button>
				) : (
					<Button onClick={() => setIsMuted(true)}>
						<MdVolumeUp className='btn-volume' />
					</Button>
				)}
			</form>
		</>
	);
}

export default AddTodoForm;
