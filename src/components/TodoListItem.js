import React, { useState, useContext } from 'react';
import { MdClose, MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import PropTypes from 'prop-types';

import styles from '../styles/TodoListItem.module.css';
import { TodoContext } from '../context/TodoContext';

const TodoListItem = ({ todo }) => {
	const { updateTodo, removeTodo, isMuted, todoList, loadTodos } =
		useContext(TodoContext);
	const [isCompleted, setIsCompleted] = useState(todo.completed);
	const [isEditing, setIsEditing] = useState(false);
	const [todoTitle, setTodoTitle] = useState(todo.title);

	const numberOfTodosCompleted =
		todoList.filter((todo) => todo.completed === true).length + 1;
	const numberOfTodosLeft = todoList.length;

	const cheer = () => {
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
	const handleCompleted = () => {
		setIsCompleted(!isCompleted);
		cheer();
		updateTodo(todo.title, todo.id, !isCompleted);
		loadTodos();
	};

	const handleEdit = () => {
		setIsEditing(true);
	};

	const editTodo = (id) => {
		const todoToEdit = todoList.find((todo) => todo.id === id);
		if (todoTitle !== '') {
			updateTodo(todoTitle, todoToEdit.id, todoToEdit.completed);
			setIsEditing(false);
		}
	};

	const handleTitleChange = (event) => {
		event.preventDefault();
		setTodoTitle(event.target.value);
	};

	return (
		<>
			<li className={styles.listItem}>
				<input type='checkbox' className={styles.checkbox} />
				{isCompleted ? (
					<MdCheckBox
						className={styles.unchecked}
						onClick={() => handleCompleted()}
						checked={isCompleted}
					/>
				) : (
					<MdCheckBoxOutlineBlank
						className={styles.checked}
						onClick={() => handleCompleted()}
						checked={isCompleted}
					/>
				)}
				{!isEditing ? (
					<span onClick={() => handleEdit()}>{todoTitle}</span>
				) : (
					<>
						<input
							autoFocus
							onFocus={(e) => e.currentTarget.select()}
							id={todo.id}
							className={styles.textEdit}
							value={todoTitle}
							onChange={handleTitleChange}
						/>
						<button
							className={styles.btnEdit}
							onClick={() => editTodo(todo.id)}
							type='submit'
						>
							UPDATE
						</button>
					</>
				)}
				<span onClick={() => removeTodo(todo.id)}>
					<MdClose className={styles.btnClose} />
				</span>
			</li>
		</>
	);
};

TodoListItem.propTypes = {
	todo: PropTypes.object,
	loadTodos: PropTypes.func,
	updateTodo: PropTypes.func,
	removeTodo: PropTypes.func,
	isMuted: PropTypes.bool,
	todoList: PropTypes.arrayOf(PropTypes.any),
};

export default TodoListItem;
