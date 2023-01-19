import React from 'react';

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

function TodoList () {
    return(
        <ul>      
        {todoList.map(function(item){
          return (
            <li key={item.id}>
              <span>
                {item.title}
              </span>
            </li>
          )
        })}
      </ul>
    )

}


export default TodoList;