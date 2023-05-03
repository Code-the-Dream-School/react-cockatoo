import React, { useState, useEffect } from "react"
import TodoList from "./components/TodoList"
import AddTodoForm from "./components/AddTodoForm"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import style from "./App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
function App() {
  const initialTodolist = !JSON.parse(localStorage.getItem("savedTodoList")) ? [] : JSON.parse(localStorage.getItem("savedTodoList"))
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
  }
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: HEADERS,
    })
      .then((response) => response.json())
      .then((result) => {
        setTodoList(result.records)
        setIsLoading(false)
      })
  }, [])
  useEffect(() => {
    if (!isLoading) {
    }
    localStorage.setItem("savedTodoList", JSON.stringify(todoList))
  }, [todoList])
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  }

  function removeTodo(id) {
    let filtered = todoList.filter((x) => x.id != id)
    setTodoList(filtered)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <h1>Todo List</h1>
              <div className="TodoContainer">
                <AddTodoForm onAddTodo={addTodo} />
                {isLoading ? (
                  <div className="PreLoadingContainer">
                    <FontAwesomeIcon icon={faSpinner} spin /> <p>Loading... </p>
                  </div>
                ) : (
                  <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                )}
              </div>
            </>
          }
        />

        <Route exact path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
