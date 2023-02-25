import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MdOutlinePlaylistAddCheck, MdArrowBackIosNew } from 'react-icons/md';

import TodoContainer from './components/TodoContainer';
import CompletedTodos from './components/CompletedTodos';
import { TodoContext } from './context/TodoContext';
import { ConfiguredToast } from './components/ConfiguredToast';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const { todoList } = useContext(TodoContext);
	return (
		<>
			<ConfiguredToast />
			<div className='wrapper'>
				<div className='appContainer'>
					<BrowserRouter>
						<Routes>
							<Route
								exact
								path='/'
								element={
									<>
										<Link to='/new'>
											<MdOutlinePlaylistAddCheck className='btnCompleted' />
										</Link>
										<TodoContainer todoListName={'TODOS'} />
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
											<MdArrowBackIosNew className='btnBack' />
										</Link>
										<h1 className='headerCompleted'>Completed Todos</h1>
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
