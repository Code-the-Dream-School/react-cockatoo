import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({
	todoList,
	onRemoveTodo,
	onUpdateTodo,
	isMuted,
	loadTodos,
}) => {
	return (
		<>
			<ul>
				{todoList.map((todo) => (
					<TodoListItem
						key={todo.id}
						todo={todo}
						onUpdateTodo={onUpdateTodo}
						onRemoveTodo={onRemoveTodo}
						isMuted={isMuted}
						numberOfTodosLeft={todoList.length}
						loadTodos={loadTodos}
					/>
				))}
			</ul>
		</>
	);
};

export default TodoList;
