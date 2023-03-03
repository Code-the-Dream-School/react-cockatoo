import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';

import styles from '../styles/CompletedTodos.module.css';
import { TodoContext } from '../context/TodoContext';

const CompletedTodos = ({ tableName }) => {
	const { todoList } = useContext(TodoContext);
	const todosCompleted = todoList.filter((todo) => todo.completed === true);
	return (
		<>
			<Link to='/'>
				<MdArrowBackIosNew className={styles.btnBack} />
			</Link>
			<h1 className={styles.header}>{tableName}</h1>
			<div className={styles.completedTodoContainer}>
				{todosCompleted.length > 0 ? (
					<ol className={styles.orderedList}>
						{todosCompleted.map((todo) => (
							<li key={todo.id}>{todo.title}</li>
						))}
					</ol>
				) : (
					<h3 className={styles.noneCompleted}>You completed nothing.</h3>
				)}
			</div>
		</>
	);
};

CompletedTodos.propTypes = {
	tableName: PropTypes.string,
	todoList: PropTypes.arrayOf(PropTypes.any),
};

export default CompletedTodos;
