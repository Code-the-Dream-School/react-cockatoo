import React, { useState, useContext } from 'react';

import Button from './Button';
import { MdAdd, MdVolumeOff, MdVolumeUp } from 'react-icons/md';
import PropTypes from 'prop-types';

import InputWithLabel from './InputWithLabel.jsx';
import { TodoContext } from '../context/TodoContext.jsx';

const AddTodoForm = ({ todoListName }) => {
	const { todoList, addTodo, setIsMuted, isMuted } = useContext(TodoContext);

	const [todoTitle, setTodoTitle] = useState('');
	const handleTitleChange = (event) => {
		setTodoTitle(event.target.value.trim());
	};
	const handleAddTodo = (event) => {
		event.preventDefault();
		if (todoTitle !== '') {
			addTodo(todoTitle);
		}
	};
	const handleMute = () => {
		setIsMuted(!isMuted);
	};

	return (
		<>
			{console.log(`addTodo: ${addTodo}`)}
			<h1>
				{todoList.length} . {todoListName}
			</h1>

			<form onSubmit={handleAddTodo}>
				<InputWithLabel
					id='todoTitle'
					todoTitle={todoTitle}
					handleTitleChange={handleTitleChange}
				>
					Todo
				</InputWithLabel>
				<Button type='submit'>
					<MdAdd className='btn-add' />
				</Button>

				{isMuted ? (
					<Button onClick={handleMute}>
						<MdVolumeOff className='btn-volume' />
					</Button>
				) : (
					<Button onClick={handleMute}>
						<MdVolumeUp className='btn-volume' />
					</Button>
				)}
			</form>
		</>
	);
};

AddTodoForm.propTypes = {
	todoListName: PropTypes.string,
	numberTodos: PropTypes.number,
	onAddTodo: PropTypes.func,
	isMuted: PropTypes.bool,
	setIsMuted: PropTypes.func,
};

export default AddTodoForm;
