import React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

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
						todoList={todoList}
						loadTodos={loadTodos}
					/>
				))}
			</ul>
		</>
	);
};

TodoList.propTypes = {
	todoList: PropTypes.arrayOf(PropTypes.any),
	onRemoveTodo: PropTypes.func,
	onUpdateTodo: PropTypes.func,
	isMuted: PropTypes.bool,
	loadTodos: PropTypes.func,
};

export default TodoList;
