import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
	MdOutlinePlaylistAddCheck,
	MdDarkMode,
	MdOutlineLightMode,
} from 'react-icons/md';

import styles from '../styles/AddTodoForm.module.css';
import {
	MdVolumeOff,
	MdVolumeUp,
	MdSortByAlpha,
	MdOutlineAccessTime,
} from 'react-icons/md';
import PropTypes from 'prop-types';

import InputWithLabel from './InputWithLabel';
import { TodoContext } from '../context/TodoContext';

const AddTodoForm = ({ tableName }) => {
	const {
		todoList,
		addTodo,
		isMuted,
		isDarkMode,
		setIsMuted,
		setIsDarkMode,
		handleSort,
	} = useContext(TodoContext);

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
			<Link to='/completed'>
				<MdOutlinePlaylistAddCheck className={styles.btnCompleted} />
			</Link>
			<h1 className={styles.header}>
				{todoList.length} . {tableName}
			</h1>
			<form className={styles.form} onSubmit={handleAddTodo}>
				<InputWithLabel
					name='todoTitle'
					todoTitle={todoTitle}
					handleTitleChange={handleTitleChange}
				></InputWithLabel>
			</form>
			<div className={styles.buttonGroup}>
				<div className={styles.buttonsLeft}>
					<MdSortByAlpha
						onClick={() => handleSort('alphaSort')}
						className={styles.btnSortAlpha}
					/>
					<MdOutlineAccessTime
						onClick={() => handleSort('timeSort')}
						className={styles.btnSortTime}
					/>
					{isDarkMode ? (
						<MdDarkMode
							onClick={() => setIsDarkMode(!isDarkMode)}
							className={styles.btnDarkMode}
						/>
					) : (
						<MdOutlineLightMode
							onClick={() => setIsDarkMode(!isDarkMode)}
							className={styles.btnDarkMode}
						/>
					)}
					{isMuted ? (
						<MdVolumeOff onClick={handleMute} className={styles.btnVolume} />
					) : (
						<MdVolumeUp onClick={handleMute} className={styles.btnVolume} />
					)}
				</div>
				<div className={styles.buttonsRight}>
					<button
						className={styles.btnAdd}
						onClick={handleAddTodo}
						type='submit'
					>
						ADD
					</button>
				</div>
			</div>
		</>
	);
};

AddTodoForm.propTypes = {
	tableName: PropTypes.string,
	todoList: PropTypes.arrayOf(PropTypes.any),
	addTodo: PropTypes.func,
	handleSort: PropTypes.func,
	isMuted: PropTypes.bool,
	setIsMuted: PropTypes.func,
};

export default AddTodoForm;
