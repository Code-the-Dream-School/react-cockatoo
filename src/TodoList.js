import React from 'react';
import TodoListItem from './TodoListItem';



const TodoList = ({todoList, onRemoveTodo}) => {
	return (
		<div>
        <ul >
				{todoList.map((todo) => {
          return <TodoListItem 
          key={todo.id}
          title={todo.title} 
          id={todo.id}
          onRemoveTodo={onRemoveTodo}
          />
        })}
			</ul>
		</div>
	);
};


export default TodoList;