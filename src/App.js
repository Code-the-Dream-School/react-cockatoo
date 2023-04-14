import React, { useState, useEffect } from "react"
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"

function App() {
  const initialTodolist = !JSON.parse(localStorage.getItem("savedTodoList")) ? [] : JSON.parse(localStorage.getItem("savedTodoList"))
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { todoList: initialTodolist } })
      }, 2000)
    }).then((result) => {
      setTodoList(result.data.todoList)
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
