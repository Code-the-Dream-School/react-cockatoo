import React from 'react';

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
        {todoList.map(todo => 
            <li key = {todo.id}>{todo.title}</li>)}
        </ul>
    
    );
}

export default TodoList;