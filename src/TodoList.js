import React from 'react';
import TodoListItem from './TodoListItem';


function TodoList({ todoList }) {
    return (
        <ul>
            {todoList.map((item) => {
                return (
                <TodoListItem 
                     key={item.id} 
                     id={item.id}
                     title={item.title}
                />
                );
            })}
        </ul>
    );
}
export default TodoList;