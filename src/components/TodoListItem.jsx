import React, { useState } from 'react';
import style from '../styles/TodoListItem.module.css';
import { MdClose } from 'react-icons/md';
import Checkbox from '@mui/material/Checkbox';

const green = {
	500: '#2fb583',
};

function TodoListItem({
	todo,
	onUpdateTodo,
	onRemoveTodo,
	isMuted,
	todoList,
	loadTodos,
}) {
	const [isCompleted, setIsCompleted] = useState(todo.completed);
	const numberOfTodosCompleted =
		todoList.filter((todo) => todo.completed === true).length + 1;
	const numberOfTodosLeft = todoList.length;

	const handleCompleted = () => {
		console.log('numberOfTodosCompleted', numberOfTodosCompleted);
		console.log('numberOfTodosLeft', todoList.length);
		console.log('todo.completed', todo.completed);
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
		onUpdateTodo(todo.title, todo.id, !isCompleted);
		loadTodos();
	};

	return (
		<>
			<li className={style.ListItem}>
				<Checkbox
					onChange={() => handleChange()}
					checked={isCompleted}
					style={{ padding: 0, marginRight: '8px' }}
					inputProps={{ 'aria-label': 'controlled' }}
					sx={{
						'&.Mui-checked': {
							color: green[500],
						},
					}}
				/>

				{todo.title}
				<span onClick={() => onRemoveTodo(todo.id)}>
					<MdClose className='btn-close' />
				</span>
			</li>
		</>
	);
}

export default TodoListItem;
