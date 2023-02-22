import React, { useState, useEffect } from "react"
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"

function useSemiPersistentState() {
  const initialTodolist = !JSON.parse(localStorage.getItem("savedTodoList")) ? [] : JSON.parse(localStorage.getItem("savedTodoList"))
  const [todoList, setTodoList] = useState(initialTodolist)
  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList))
  }, [todoList])

  return [todoList, setTodoList]
}
function App() {
  const [todoList, setTodoList] = useSemiPersistentState()
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
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  )
}

export default App
