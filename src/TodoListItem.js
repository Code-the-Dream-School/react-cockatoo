import React from 'react';

function TodoListItem({id, title}) {
    return (
        //<li>{todo.title}</li>
        <li key={id}>{title}</li>
    );
}

export default TodoListItem;