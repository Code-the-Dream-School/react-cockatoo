import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<div className='wrapper'>
			<App />
		</div>
	</StrictMode>
);
