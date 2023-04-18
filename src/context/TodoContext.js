import React, {
	useState,
	useEffect,
	useCallback,
	useRef,
	createContext,
} from 'react';
import { toast } from 'react-toastify';

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
	const [todoList, setTodoList] = useState([]);
	const [todoTitle, setTodoTitle] = useState('');
	const [isMuted, setIsMuted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [sortOrder, setSortOrder] = useState('asc');
	const [sortType, setSortType] = useState('timeSort');

	const AIRTABLE_TABLE_NAME = 'Todos';
	const AIRTABLE_VIEW = '?view=Grid%20view';
	const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}/`;
	const isMounted = useRef(false);

	// LOAD TODOS
	const loadTodos = useCallback(async () => {
		try {
			const response = await fetch(url + AIRTABLE_VIEW, {
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
				},
			});
			await response
				.json()
				.then((result) => formatTodos(result.records))
				.then((result) => setTodoList(result));
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			toast.error(
				`Sorry we are unable to connect to your database at this time.`
			);
			console.log('ERROR:', error);
		}
	}, [url]);

	// GET TODOS FROM (AIRTABLE) DB
	useEffect(() => {
		isMounted.current ? loadTodos() : (isMounted.current = true);
	}, [loadTodos]);

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
	const addTodo = async (title) => {
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
								Title: title,
								Completed: false,
							},
						},
					],
				}),
			});
			setTodoTitle('');
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

	// SORT TODOS ALPHABETICALLY OR BY TIME
	const handleSort = (type) => {
		let sorted;
		if (type === 'alphaSort') {
			sorted = todoList.sort((a, b) =>
				a.title.toLowerCase().localeCompare(b.title)
			);
		} else if (type === 'timeSort') {
			sorted = todoList.sort((a, b) => a.time - b.time);
		}
		if (sortOrder === 'desc') {
			sorted.reverse();
		}
		setTodoList(sorted);
		setSortType(type);
		setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
	};
	// TOGGLE DARK/LIGHT MODE
	useEffect(() => {
		document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light';
	}, [isDarkMode]);

	const contextValues = {
		todoList,
		todoTitle,
		isMuted,
		isLoading,
		isDarkMode,
		setIsMuted,
		setIsDarkMode,
		setTodoList,
		setTodoTitle,
		loadTodos,
		formatTodos,
		addTodo,
		updateTodo,
		removeTodo,
		handleSort,
		sortType,
	};

	return (
		<TodoContext.Provider value={contextValues}>
			{children}
		</TodoContext.Provider>
	);
};

export { TodoContextProvider, TodoContext };
