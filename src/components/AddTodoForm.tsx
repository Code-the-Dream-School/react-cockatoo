import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel.jsx';
import Button from './Button';
import { MdAdd, MdVolumeOff, MdVolumeUp } from 'react-icons/md';
import PropTypes from 'prop-types';

const AddTodoForm = ({
	todoListName,
	numberTodos,
	onAddTodo,
	isMuted,
	setIsMuted,
}) => {
	const [todoTitle, setTodoTitle] = useState('');
	const handleTitleChange = (event) => {
		setTodoTitle(event.target.value);
	};
	const handleAddTodo = (event) => {
		event.preventDefault();
		if (todoTitle !== '') {
			onAddTodo(todoTitle);
		}
	};
	const handleMute = () => {
		setIsMuted(!isMuted);
	};

	return (
		<>
			<h1>
				{numberTodos} . {todoListName}
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
AddTodoForm.propTypes =  {
	todoListName: PropTypes.string,
	numberTodos: PropTypes.number,
	onAddTodo: PropTypes.func,
	isMuted: PropTypes.bool,
	setIsMuted: PropTypes.func,
}

export default AddTodoForm;
