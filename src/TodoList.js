import React from 'react';
import TodoListItem from './TodoListItem';



const TodoList = props => {
  const {todoList} = props;
	return (
		<div>
        <ul >
				{todoList.map((todo) => {
          return <TodoListItem todo={todo} />
        })}
			</ul>
		</div>
	);
};


export default TodoList;