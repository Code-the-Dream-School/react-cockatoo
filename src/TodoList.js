import React from 'react';
import TodoListItem from './TodoListItem';


// Passed todoList state as a prop named todoList to the TodoList component 
//Change todoList to reference props instead of the hard-coded variable

//Next - update props to use destructuring
const TodoList = ({ todoList }) => {
	return (
		<div>
			<ul>
				{todoList.map((todo) => (
					<TodoListItem key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	);
};

export default TodoList;