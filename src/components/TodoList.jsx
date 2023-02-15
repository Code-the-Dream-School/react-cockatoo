import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
	const { todoList } = useContext(TodoContext);
	return (
		<>
			<ul>
				{todoList.map((todo) => (
					<TodoListItem key={todo.id} todo={todo} />
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
