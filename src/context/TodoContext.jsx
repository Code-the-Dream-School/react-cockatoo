import React, { useState, useEffect, createContext } from 'react';
import { toast } from 'react-toastify';

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
	const [todoList, setTodoList] = useState([]);
	const [todoTitle, setTodoTitle] = useState('');
	const [isMuted, setIsMuted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const airtableName = 'Todos';
	const airtableView = '?view=Grid%20view';
	const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${airtableName}/`;

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

	const contextValues = {
		todoList,
		todoTitle,
		isMuted,
		isLoading,
		setIsMuted,
		setTodoList,
		setTodoTitle,
		loadTodos,
		formatTodos,
		addTodo,
		updateTodo,
		removeTodo,
	};

	return (
		<TodoContext.Provider value={contextValues}>
			{children}
		</TodoContext.Provider>
	);
};

export { TodoContextProvider, TodoContext };
