import React, { useState } from 'react';
import style from '../TodoListItem.module.css';
import { MdClose } from 'react-icons/md';
import Checkbox from '@mui/material/Checkbox';

const green = {
	500: '#2fb583',
};

function TodoListItem({ todo, onUpdateTodo, onRemoveTodo }) {
	const [isCompleted, setIsCompleted] = useState(todo.completed);
	const handleChange = () => {
		setIsCompleted(!isCompleted);
		onUpdateTodo(todo.title, todo.id, isCompleted);
	};

	return (
		<>
			<li className={style.ListItem}>
				<Checkbox
					onChange={handleChange}
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
