import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { TodoContext } from '../context/TodoContext';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import CompletedTodos from './CompletedTodos';

const TodoContainer = ({ tableName }) => {
	const { isLoading } = useContext(TodoContext);
	return (
		<>
			{tableName === 'TODOS' ? (
				<>
					<AddTodoForm tableName={tableName} />
					{isLoading ? <p>Loading...</p> : <TodoList />}
				</>
			) : null}

			{tableName === 'COMPLETED TODOS' ? (
				<>
					<CompletedTodos tableName={tableName} />
				</>
			) : null}
		</>
	);
};

TodoContainer.propTypes = {
	tableName: PropTypes.string,
};
export default TodoContainer;
