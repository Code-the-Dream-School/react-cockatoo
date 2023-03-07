import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


const App = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('savedTodoList') || '[]')
  );

  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    }) 
      .then((response) => response.json())
      .then(result => {
        setTodoList(result.records);
        setIsLoading(false)
      })
    }, []);

  useEffect(() => {
    if(!isLoading) {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = newTodo => {
    setTodoList([...todoList, newTodo])
  }
  const removeTodo = (id) => {
    const filteredList = todoList.filter((item) => id !== item.id);
    setTodoList(filteredList)
  }
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      {isLoading ? (
      <p>Loading...</p>
      ) : (
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </div>
  );
}



export default App;
