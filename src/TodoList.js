import React from 'react';

let todoList = [
    {id: 1, title: "value1"},
    {id: 2, title: "value2"},
    {id: 3, title: "value3"}
  ]

function TodoList() {

    return (

        <ul>
            {
                todoList.map(todoItem => <li key={todoItem.id}>{todoItem.title}</li>)
            }
        </ul>

    );


}

export default TodoList;