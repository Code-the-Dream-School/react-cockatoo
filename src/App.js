import React, { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const useSemiPersistentState = () => {
	const [todoList, setTodoList] = useState(
		JSON.parse(localStorage.getItem("savedTodoList")) || []
	);

	useEffect(() => {
		localStorage.setItem("savedTodoList", JSON.stringify(todoList));
	}, [todoList]);

	return [todoList, setTodoList];
};

const useSemiPersistentState = () => {
	const [todoList, setTodoList] = useState(
		JSON.parse(localStorage.getItem("savedTodoList")) || []
	);

	useEffect(() => {
		localStorage.setItem("savedTodoList", JSON.stringify(todoList));
	}, [todoList]);

	return [todoList, setTodoList];
};

const addTodo = (newTodo) => {
	setTodoList([...todoList, newTodo]);
};

const removeTodo = (id) => {
	const updatedTodos = todoList.filter((todo) => todo.id !== id);
	setTodoList(updatedTodos);
};

return (
	<>
		<h1>Todo List</h1>
		<AddTodoForm onAddTodo={addTodo} />
		<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
	</>
);

useEffect(() => {
	new Promise((resolve, reject) =>
		setTimeout(() => {
			resolve({
				data: {
					todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
				},
			});
		}, 2000)
	).then((result) => {
		setTodoList([...result.data.todoList]);
		setIsLoading(false);
	});
}, []);

const addTodo = (newTodo) => {
	setTodoList([...todoList, newTodo]);
};

const removeTodo = (id) => {
	const updatedTodos = todoList.filter((todo) => todo.id !== id);
	setTodoList(updatedTodos);
};

useEffect(() => {
	if (!isLoading) {
		localStorage.setItem("savedTodoList", JSON.stringify(todoList));
	}
}, [todoList]);

return (
	<>
		<h1>Todo List</h1>
		<AddTodoForm onAddTodo={addTodo} />
		{isLoading ? (
			<p>Loading...</p>
		) : (
			<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
		)}
	</>
);

export default App;
