import React from 'react';

const todoList = [
    {
    title: 'Complete assignment',
    objectID: 0,
    },
    {
    title: 'Read Road to React',
    objectID: 1,
    },
    {
    title: 'Watch videos',
    objectID: 2,
    }
    ];

function ToDoList() {
    return (
        <div>
             <ul>
          {todoList.map(function (item){
            return <li key={item.objectID}>
              {item.title}
              </li>
               })}
             </ul>
        </div>
    )
}

export default ToDoList;