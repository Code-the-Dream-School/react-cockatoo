import React, { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const useSemiPersistentState = () => {
	const [todoList, setTodoList] = useState(
		JSON.parse(localStorage.getItem("savedTodoList")) || []
)}

function App() {
	const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;
		try {
			fetch(url, {
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
				},
			})
				.then((result) => result.json())
				.then((result) => setTodoList(result.records));
			setIsLoading(false);
		} catch (error) {
			console.log(error.message);
		}
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
	}, [todoList, isLoading]);

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
>>>>>>> parent of 000921c (Merge branch 'main' into lesson-1-8)
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
