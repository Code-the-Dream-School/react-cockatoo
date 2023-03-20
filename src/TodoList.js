import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList, onRemoveTodo }) {
    return (
        <ul>
            {
                todoList.map(todo => 
                    <TodoListItem 
                    key={todo.id}
                    title={todo.fields.Title} 
                    onRemoveTodo={onRemoveTodo} />
                )
            }
        </ul>
    );
}

export default TodoList;