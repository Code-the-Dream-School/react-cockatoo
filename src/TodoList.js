import React from 'react';
import TodoListItem from './TodoListItem';



const TodoList = props => {
  const {todoList} = props;
	return (
		<div>
        <ul >
				{todoList.map((todo) => {
          return <TodoListItem 
          key={todo.id}
          title={todo.title} />
        })}
			</ul>
		</div>
	);
};


export default TodoList;