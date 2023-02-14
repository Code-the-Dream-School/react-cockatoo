//  TODO APP : Designed to cheer for each little accomplishment we make as we progress toward our goals - like building an app. So this app cheers for you when you complete each task and celebrates with you when you complete all of your tasks.

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MdOutlinePlaylistAddCheck, MdArrowBackIosNew } from 'react-icons/md';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import AddTodoForm from './components/AddTodoForm.tsx';
import TodoList from './components/TodoList';
import CompletedTodos from './components/CompletedTodos';
import { ConfiguredToast } from './components/ConfiguredToast';

import 'react-toastify/dist/ReactToastify.css';

const airtableName = 'Todos';
const airtableView = '?view=Grid%20view';
const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${airtableName}/`;

function App() {
	const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isMuted, setIsMuted] = useState(false);

	// GET TODOS FROM (AIRTABLE) DB
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			loadTodos();
		}, 1000);
		// Returning a cleanup function to prevent the useEffect hook from firing twice. This also stops 2nd toast error notification.
		return () => {
			clearTimeout(timeoutId);
		};
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
				toast.error(
					`Errr, something isn't right here. Please reload page. Error: ${response.status}`
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
		}
	};

	// ADD TODO
	const addTodo = async (inputTodo) => {
		try {
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
		} catch (error) {
			console.error(error);
		}
	};

	// UPDATE TODO
	const updateTodo = async (todoTitle, completedTodoID, isCompleted) => {
		try {
			await fetch(url + completedTodoID, {
				method: 'PATCH',
				muteHttpExceptions: true,
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					fields: {
						Title: todoTitle,
						Completed: isCompleted,
					},
				}),
			});
			loadTodos();
		} catch (error) {
			console.error(error);
		}
	};

	// REMOVE TODO
	const removeTodo = async (id) => {
		try {
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
		} catch (error) {
			console.error(error);
		}
	};

	// RENDER TODOS
	return (
		<>
			<ConfiguredToast />
			<div className='wrapper'>
				<div className='AppContainer'>
					<BrowserRouter>
						<Routes>
							<Route
								exact
								path='/'
								element={
									<>
										<Link to='/new'>
											<MdOutlinePlaylistAddCheck className='btn-completed' />
										</Link>
										<AddTodoForm
											todoListName={'TODOS'}
											numberTodos={todoList.length}
											onAddTodo={addTodo}
											isMuted={isMuted}
											setIsMuted={setIsMuted}
											loadTodos={loadTodos}
										/>
										{isLoading ? (
											<p>Loading...</p>
										) : (
											<TodoList
												todoList={todoList}
												onUpdateTodo={updateTodo}
												onRemoveTodo={removeTodo}
												isMuted={isMuted}
												loadTodos={loadTodos}
											/>
										)}
									</>
								}
							/>
							{/* ROUTE /new */}
							<Route
								exact
								path='/new'
								element={
									<>
										<Link to='/'>
											<MdArrowBackIosNew className='btn-back' />
										</Link>
										<h1 className='header-completed'>Completed Todos</h1>

										<CompletedTodos todoList={todoList} />
									</>
								}
							/>
						</Routes>
					</BrowserRouter>
				</div>
			</div>
		</>
	);
}
export default App;
