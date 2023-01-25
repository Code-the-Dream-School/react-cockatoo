import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
    {
      id: 1,
      title: "Complete React assignment",
    },
    { id: 2,
      title: "Do laundry",
    },
    {
      id: 3,
      title: "Walk the dog",
    }
  ]

const TodoList = () => {
	return (
		<div>
        <ul style={{ listStyleType: 'none' }}>
				{todoList.map((todo) => (
					<TodoListItem key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	);
};


export default TodoList;