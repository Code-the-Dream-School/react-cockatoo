import React, { useState, useContext } from 'react';

import styles from '../styles/AddTodoForm.module.css';
import {
	MdAdd,
	MdVolumeOff,
	MdVolumeUp,
	MdSortByAlpha,
	MdOutlineAccessTime,
} from 'react-icons/md';
import PropTypes from 'prop-types';

import InputWithLabel from './InputWithLabel';
import { TodoContext } from '../context/TodoContext';

const AddTodoForm = ({ todoListName }) => {
	const { todoList, addTodo, isMuted, setIsMuted, handleSort } =
		useContext(TodoContext);

	const [todoTitle, setTodoTitle] = useState('');
	const handleTitleChange = (event) => {
		setTodoTitle(event.target.value);
	};
	const handleAddTodo = (event) => {
		event.preventDefault();
		if (todoTitle !== '') {
			addTodo(todoTitle);
			setTodoTitle('');
		}
	};
	const handleMute = () => {
		setIsMuted(!isMuted);
	};

	return (
		<>
			<h1 className={styles.header}>
				{todoList.length} . {todoListName}
			</h1>
			<form className={styles.form} onSubmit={handleAddTodo}>
				<InputWithLabel
					name='todoTitle'
					todoTitle={todoTitle}
					handleTitleChange={handleTitleChange}
				/>
				<button className={styles.button} type='submit'>
					<MdAdd className={styles.btnAdd} onClick={handleAddTodo} />
				</button>

				{isMuted ? (
					<button className={styles.button} type='button' onClick={handleMute}>
						<MdVolumeOff className={styles.btnVolume} />
					</button>
				) : (
					<button className={styles.button} type='button' onClick={handleMute}>
						<MdVolumeUp className={styles.btnVolume} />
					</button>
				)}
			</form>
			<MdSortByAlpha
				onClick={() => handleSort('alphaSort')}
				className={styles.btnSort}
			/>
			<MdOutlineAccessTime
				onClick={() => handleSort('timeSort')}
				className={styles.btnSort}
			/>
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
