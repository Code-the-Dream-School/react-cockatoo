import React from 'react';

// Next - updated props to use destructuring
const TodoListItem = ({ todo }) => {
	return (
		<div>
			<li> {todo.title} </li>
		</div>
	);
};

export default TodoListItem;