import React, { useContext } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { TodoContext } from '../context/TodoContext';

const TodoContainer = () => {
	const { isLoading } = useContext(TodoContext);
	return (
		<>
			<AddTodoForm todoListName={'TODOS'} />
			{isLoading ? <p>Loading...</p> : <TodoList />}
		</>
	);
};

export default TodoContainer;
