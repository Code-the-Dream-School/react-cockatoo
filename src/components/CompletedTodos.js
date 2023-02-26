import styles from '../styles/CompletedTodos.module.css';

const TodoList = ({ todoList }) => {
	const todosCompleted = todoList.filter((todo) => todo.completed === true);
	if (todosCompleted.length > 0) {
		return (
			<>
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

export default TodoList;
