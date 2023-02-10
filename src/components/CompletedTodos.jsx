const TodoList = ({ todoList }) => {
	const todosCompleted = todoList.filter((todo) => todo.completed === true);
	console.log('todosCompleted', todosCompleted);
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
};

export default TodoList;
