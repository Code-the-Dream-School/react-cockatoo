import React, { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const airtableName = "Todos";
const airtableView = "?view=Grid%20view";
const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${airtableName}/`;

function App() {
	const [todoList, setTodoList] = useState([]);
	const [formattedTodos, setFormattedTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	function getTodos() {
		try {
			fetch(url + airtableView, {
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
				},
			})
				.then((result) => result.json())
				.then((result) => setTodoList(result.records));
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log(error.message);
		}
	}

	useEffect(() => {
		setIsLoading(true);
		getTodos();
	}, []);

	useEffect(() => {
		const formattedTodoList = todoList.map((item) => {
			if (item.createdTime === undefined) {
				return null;
			} else {
				const currentDate = item.createdTime.split("T");
				const todo = {
					title: item.fields.Title,
					id: item.id,
					date: currentDate[0],
					time: currentDate[1],
				};
				return todo;
			}
		});
		setFormattedTodos(formattedTodoList);
	}, [todoList]);

	const addTodo = async (inputTodo) => {
		let updatedTodos = [
			{
				id: Date.now(),
				fields: {
					Title: inputTodo,
				},
			},
			...formattedTodos,
		];
		setFormattedTodos(updatedTodos);
		await fetch(url, {
			method: "POST",
			body: JSON.stringify({
				records: [
					{
						fields: {
							Title: inputTodo,
						},
					},
				],
			}),
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
				"Content-Type": "application/json",
			},
		});
		getTodos();
	};

	const removeTodo = async (id) => {
		await fetch(url + id, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
				"Content-Type": "application/json",
			},
		});
		let updatedTodos = todoList.filter((todo) => id !== todo.id);
		setFormattedTodos(updatedTodos);
		getTodos();
	};

	return (
		<BrowserRouter>
			<>
				<h1>Todo List</h1>
				<AddTodoForm onAddTodo={addTodo} todoList={todoList} />
				{isLoading ? (
					<p>Loading...</p>
				) : (
					<Routes>
						<Route
							exact
							path="/"
							element={
								<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
							}
						/>
					</Routes>
				)}
			</>
		</BrowserRouter>
	);
}
export default App;
