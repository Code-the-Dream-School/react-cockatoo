import React from 'react';

function TodoList(){

    const todoList = [{index: 1, title: 'Submit Assignement'},{index: 2, title: 'Watch video'},{index: 3, title: 'Read lesson'}];

return(
    <div>
         <ul>
        {todoList.map((todo) => (
          <li key={todo.index}>{todo.title}</li>
        ))}
      </ul>
    </div>
)
}

export default TodoList;