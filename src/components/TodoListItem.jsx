import React from 'react';
import { MdClose } from 'react-icons/md';

function TodoListItem({ todo, onRemoveTodo }) {
	return (
		<>
			<li>
				{todo.title}
				<MdClose onClick={() => onRemoveTodo(todo.id)} className='btn-close' />
			</li>
		</>
	);
}

export default TodoListItem;
