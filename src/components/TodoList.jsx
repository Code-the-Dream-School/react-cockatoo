import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList, onRemoveTodo, todoListName }) {
	return (
		<>
			<h1>{todoListName}</h1>
			<ul>
				{todoList.map((todo) => (
					<TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
				))}
			</ul>
		</>
	);
}

export default TodoList;
