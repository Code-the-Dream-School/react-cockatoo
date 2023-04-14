import React, { useState, useEffect } from "react"
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"

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
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading... </p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
    </>
  )
}

export default App
