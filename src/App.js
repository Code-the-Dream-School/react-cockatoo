import React from 'react';

const todoList = [
  {
    id: 1,
    title: 'Read Road to React',
  },
  {
    id: 2,
    title: 'Complete homework assignment',
  },
  {
    id: 3,
    title: 'Submit homework',
  }
]

const list = todoList.map(todo => <li key={todo.id}>{todo.title}</li>)

function App() {
  return (
   <> 
     <h1>Todo List</h1>
     <ul>
       {list}
     </ul>
   </>
  );
}

export default App;
