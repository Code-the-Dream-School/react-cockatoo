import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MdOutlinePlaylistAddCheck, MdArrowBackIosNew } from 'react-icons/md';

import styles from './App.module.css';
import TodoContainer from './components/TodoContainer';
import { ConfiguredToast } from './components/ConfiguredToast';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
			<ConfiguredToast />
			<div className={styles.wrapper}>
				<div className={styles.appBackground}>
					<div className={styles.appContainer}>
						<BrowserRouter>
							<Routes>
								<Route
									exact
									path='/'
									element={
										<>
											<Link to='/completed'>
												<MdOutlinePlaylistAddCheck
													className={styles.btnCompleted}
												/>
											</Link>
											<TodoContainer
												tableName={'TODOS'}
												className={styles.todoContainer}
											/>
										</>
									}
								/>
								{/* ROUTE /new */}
								<Route
									exact
									path='/completed'
									element={
										<>
											<Link to='/'>
												<MdArrowBackIosNew className={styles.btnBack} />
											</Link>
											<TodoContainer tableName={'COMPLETED TODOS'} />
										</>
									}
								/>
							</Routes>
						</BrowserRouter>
					</div>
				</div>
			</div>
		</>
	);
}
export default App;
