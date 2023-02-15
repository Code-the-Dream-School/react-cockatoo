import React, { useContext } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { TodoContext } from '../context/TodoContext';
// import PropTypes from 'prop-types';

const TodoContainer = () => {
	const { isLoading } = useContext(TodoContext);
	return (
		<>
			<AddTodoForm todoListName={'TODOS'} />
			{isLoading ? <p>Loading...</p> : <TodoList />}
		</>
	);
};

// TodoContainer.propTypes = {
// 	todoList: PropTypes.arrayOf(PropTypes.any),
// 	isLoading: PropTypes.bool,
// 	todoListName: PropTypes.string,
// 	todoTitle: PropTypes.string,
// 	setTodoTitle: PropTypes.func,
// 	numberTodos: PropTypes.number,
// 	onAddTodo: PropTypes.func,
// 	isMuted: PropTypes.bool,
// 	setIsMuted: PropTypes.func,
// };

export default TodoContainer;
