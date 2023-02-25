import React, { useState, useContext } from 'react';
import { MdClose, MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import PropTypes from 'prop-types';

import styles from '../styles/TodoListItem.module.css';
import { TodoContext } from '../context/TodoContext';

const TodoListItem = ({ todo }) => {
	const { updateTodo, removeTodo, isMuted, todoList, loadTodos } =
		useContext(TodoContext);
	const [isCompleted, setIsCompleted] = useState(todo.completed);

	const numberOfTodosCompleted =
		todoList.filter((todo) => todo.completed === true).length + 1;
	const numberOfTodosLeft = todoList.length;

	const handleCompleted = () => {
		//PLAY SOUND ON COMPLETION OF ALL TODOS
		if (
			(!todo.completed && numberOfTodosLeft === 1 && !isMuted) ||
			(!todo.completed &&
				numberOfTodosCompleted === numberOfTodosLeft &&
				!isMuted)
		) {
			const audio = new Audio('../../yay.mp3');
			audio.play();
			return;
		} else {
			//PLAY SOUND ON EACH TODO COMPLETION
			if (!isCompleted && !isMuted) {
				const audio = new Audio('../../yaaas.mp3');
				audio.play();
			}
		}
		return;
	};

	const handleChange = () => {
		setIsCompleted(!isCompleted);
		handleCompleted();
		updateTodo(todo.title, todo.id, !isCompleted);
		loadTodos();
	};

	return (
		<>
			<li className={styles.listItem}>
				<input
					type='checkbox'
					className={styles.checkbox}
					inputProps={{ 'aria-label': 'completed checkbox' }}
				/>
				{isCompleted ? (
					<MdCheckBox
						className={styles.unchecked}
						onClick={() => handleChange()}
						checked={isCompleted}
					/>
				) : (
					<MdCheckBoxOutlineBlank
						className={styles.checked}
						onClick={() => handleChange()}
						checked={isCompleted}
					/>
				)}
				{todo.title}
				<span onClick={() => removeTodo(todo.id)}>
					<MdClose className={styles.btnClose} />
				</span>
			</li>
		</>
	);
};

TodoListItem.propTypes = {
	todo: PropTypes.any,
	onUpdateTodo: PropTypes.func,
	onRemoveTodo: PropTypes.func,
	isMuted: PropTypes.bool,
	todoList: PropTypes.arrayOf(PropTypes.any),
	loadTodos: PropTypes.func,
};

export default TodoListItem;
