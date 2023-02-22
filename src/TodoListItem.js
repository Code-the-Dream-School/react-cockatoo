import React from 'react';

function TodoListItem ({todo, onRemoveTodo}){
    const {id} = todo;

    return (
        <li>{todo.title}
            <button type="button" onClick={() => onRemoveTodo(id)}>
                Remove
            </button>
        </li>
    )
}

export default TodoListItem;