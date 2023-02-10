const TodoList = ({ todoList }) => {
	const todosCompleted = todoList.filter((todo) => todo.completed === true);
	if (todosCompleted.length > 0) {
		return (
			<>
				<ol>
					{todosCompleted.map((todo) => (
						<li key={todo.id} className='completed-todo'>
							{todo.title}
						</li>
					))}
				</ol>
			</>
		);
	} else {
		return <h3>You completed nothing.</h3>;
	}
};

export default TodoList;
