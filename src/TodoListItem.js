import React from 'react';
import style from './TodoListItem.module.css';

function TodoListItem({ id, title, onRemoveTodo }) {
    return (
        <li className={style.ListItem} key={id}>
            {title}
          <button onClick={() => onRemoveTodo(id)}>Remove</button>  
        </li>
    )
}



export default TodoListItem; 