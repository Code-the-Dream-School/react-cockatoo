import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList, onRemoveTodo, onUpdateTodo, todoListName }) {
	console.log(todoList);
	return (
		<>
			<h1>{todoListName}</h1>
			<ul>
				{todoList.map((todo) => (
					<TodoListItem
						key={todo.id}
						todo={todo}
						onUpdateTodo={onUpdateTodo}
						onRemoveTodo={onRemoveTodo}
					/>
				))}
			</ul>
		</>
	);
}

export default TodoList;
