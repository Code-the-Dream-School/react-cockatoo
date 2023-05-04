import React, { useState, useEffect } from "react"
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"
import TodoHeader from "./TodoHeader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

function TodoContainer() {
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortOrder, setSortOrder] = useState("asc")
  const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=desc`
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
      .catch((error) => console.log(error))
  }, [])

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  }

  function removeTodo(id) {
    let filtered = todoList.filter((x) => x.id !== id)
    setTodoList(filtered)
  }

  function sortTodoListByTitle() {
    const sortedTodoList = [...todoList].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.fields.Title.localeCompare(b.fields.Title)
      } else {
        return b.fields.Title.localeCompare(a.fields.Title)
      }
    })
    setTodoList(sortedTodoList)
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  return (
    <>
      <div className="TodoContainer">
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        {isLoading ? (
          <div className="PreLoadingContainer">
            <FontAwesomeIcon icon={faSpinner} spin /> <p>Loading... </p>
          </div>
        ) : (
          <>
            <TodoHeader onSortTodoListByTitle={sortTodoListByTitle} sortOrder={sortOrder} />
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
          </>
        )}
      </div>
    </>
  )
}

export default TodoContainer
