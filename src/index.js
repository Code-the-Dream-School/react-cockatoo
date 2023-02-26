import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

import { TodoContextProvider } from './context/TodoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<div className='wrapper'>
			<TodoContextProvider>
				<App />
			</TodoContextProvider>
		</div>
	</StrictMode>
);
