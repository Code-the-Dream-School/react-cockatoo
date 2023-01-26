import React from 'react';
import TodoListItem from './TodoListItem';

let todoList = [
    { id: 1, title: "Sleep" },
    { id: 2, title: "Work" },
    { id: 3, title: "Read" }
]

function TodoList() {

    return (
        <ul>
            {
                todoList.map(todo => <TodoListItem key={todo.id} todo={todo}></TodoListItem>)
            }
        </ul>
    );


}

export default TodoList;