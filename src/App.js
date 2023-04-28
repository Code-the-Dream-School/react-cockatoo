import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import './css/App.css';
import styles from "./css/TodoListItem.module.css"

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/`;

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };
    fetch(url, options)
      .then((response) => response.json())

      .then((result) => {
        setTodoList(result.records);
        setIsLoading(false);
      })
      .catch((error) => console.warn(error));
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };
  return (

    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              {isLoading ? (
                <div 
                  className="loaderContainer"> 
                </div>
          ) : (
            <div className={styles.app}>

            <div>
              <h1 className={styles.heading}>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
            </div>
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
             </div>
              )}
            </>
          }
        />
        <Route
          path="/new"
          element={
            <h1>New Todo List</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

