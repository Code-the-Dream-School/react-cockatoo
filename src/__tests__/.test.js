import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './components/TodoList.jsx';

describe('TodoListItem', () => {
	test('renders correctly', () => {
		const { getByText } = render(<TodoList />);
		expect(getByText('Hello, world!')).toBeInTheDocument();
	});
});
