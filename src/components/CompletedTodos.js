import { useContext } from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/CompletedTodos.module.css';
import { TodoContext } from '../context/TodoContext';

const CompletedTodos = ({ tableName }) => {
	const { todoList } = useContext(TodoContext);
	const todosCompleted = todoList.filter((todo) => todo.completed === true);
	if (todosCompleted.length > 0) {
		return (
			<>
				<h1 className={styles.header}>{tableName}</h1>
				<ol className={styles.orderedList}>
					{todosCompleted.map((todo) => (
						<li key={todo.id}>{todo.title}</li>
					))}
				</ol>
			</>
		);
	} else {
		return <h3 className={styles.noneCompleted}>You completed nothing.</h3>;
	}
};

CompletedTodos.propTypes = {
	tableName: PropTypes.string,
	todoList: PropTypes.arrayOf(PropTypes.any),
};

export default CompletedTodos;
