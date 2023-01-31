import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
    {
    id: 1,
    title: 'Complete assignment'
    
    },
    {
    id: 2,
    title: 'Read Road to React'
    },
    {
    id: 3,
    title: 'Watch videos'
    }
    ];

function TodoList() {
    return (
        <div>
             <ul>
                {todoList.map((todo) => (
                <TodoListItem key={todo.id} todo={todo}/>
              ))}
             </ul>
        </div>
    );
}

export default TodoList;