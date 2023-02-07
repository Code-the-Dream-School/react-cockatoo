import React, { useState, useEffect } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const airtableName = 'Todos';
const airtableView = '?view=Grid%20view';
const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${airtableName}/`;

function App() {
	const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// GET TODOS FROM (AIRTABLE) DB
	useEffect(() => {
		loadTodos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// FORMAT TODOS
	const formatTodos = (todoList) => {
		const updatedTodoList = todoList.map((item) => {
			const currentDate = item.createdTime.split('T');
			const todo = {
				title: item.fields.Title,
				id: item.id,
				date: currentDate[0],
				time: currentDate[1].split('.')[0],
				completed: item.fields.Completed || false,
			};

			return todo;
		});
		return updatedTodoList;
	};

	// LOAD TODOS
	const loadTodos = async () => {
		try {
			const response = await fetch(url + airtableView, {
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
				},
			});
			if (!response.ok) {
				throw new Error(
					toast.error(
						`Errr, something isn't right here. Please reload page. Error: ${response.status}`
					)
				);
			}
			await response
				.json()
				.then((result) => formatTodos(result.records))
				.then((result) => setTodoList(result));
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log('ERROR:', error);
			return null;
		}
	};

	// ADD TODO
	const addTodo = async (inputTodo) => {
		let updatedTodos = [
			{
				id: Date.now(),
				fields: {
					Title: inputTodo,
					Completed: false,
				},
			},
			...todoList,
		];

		setTodoList(updatedTodos);

		await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				records: [
					{
						fields: {
							Title: inputTodo,
							Completed: false,
						},
					},
				],
			}),
		});
		loadTodos();
	};

	// UPDATE TODO
	const updateTodo = async (inputTodo, completedTodoID, isCompleted) => {
		let updatedTodos = todoList.map((todo) => {
			if (todo.id === completedTodoID) {
				todo.completed = isCompleted;
				// console.log(
				// 	`todoID: ${todo.id}, completedTodoID: ${completedTodoID}, inputTodo: ${inputTodo}, todo.Completed: ${todo.completed} `
				// );
			}
			return todo;
		});

		setTodoList(updatedTodos);

		await fetch(url + completedTodoID, {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				records: [
					{
						id: completedTodoID,
						fields: {
							Title: inputTodo,
							Completed: isCompleted,
						},
					},
				],
			}),
		});
		loadTodos();
	};

	// REMOVE TODO
	const removeTodo = async (id) => {
		await fetch(url + id, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
				'Content-Type': 'application/json',
			},
		});
		let updatedTodos = todoList.filter((todo) => id !== todo.id);
		setTodoList(updatedTodos);
		loadTodos();
	};

	// RENDER TODOS
	return (
		<div className='wrapper'>
			<div className='AppContainer'>
				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='dark'
				/>
				<BrowserRouter>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<AddTodoForm
										todoListName={'TODOS'}
										numberTodos={todoList.length}
										onAddTodo={addTodo}
									/>
									{isLoading ? (
										<p>Loading...</p>
									) : (
										<TodoList
											todoList={todoList}
											onUpdateTodo={updateTodo}
											onRemoveTodo={removeTodo}
										/>
									)}
								</>
							}
						/>

						<Route
							exact
							path='/new'
							element={
								<>
									<h1>New Todo List</h1>
									<AddTodoForm onAddTodo={addTodo} />
									<TodoList
										todoList={todoList}
										onUpdateTodo={updateTodo}
										onRemoveTodo={removeTodo}
									/>
								</>
							}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}
export default App;
