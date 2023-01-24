import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
    {
      id: 1, title: "Complete Assignment"
    },

    {
      id: 2, title: "Turn in Assignment"
    },

    {
      id: 3, title: "Review Assignment"
    },
  ];


function TodoList (){
    return (

        <ul>
        {todoList.map((todo) => (
            <TodoListItem key = {todo.id} todo = {todo}/>
            ))}
        </ul>

    );
}

export default TodoList;