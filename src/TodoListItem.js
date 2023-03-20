import React from 'react';

function TodoListItem(props) {
    return (
        <li>
            {props.title}
            <button type="button" onClick={(e) => props.onRemoveTodo(props.todo.id, e)}>Remove</button>
        </li>
    );
}

export default TodoListItem;