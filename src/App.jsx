//  TODO APP : Designed to cheer for each little accomplishment we make as we progress toward our goals - like building an app. So this app cheers for you when you complete each task and celebrates with you when you complete all of your tasks.
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
