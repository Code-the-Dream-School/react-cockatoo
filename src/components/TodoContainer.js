import React, { useState, useEffect } from "react"
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"
import TodoHeader from "./TodoHeader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import Navbar from "./Navbar"
import PropTypes from "prop-types"

function TodoContainer({ tableName }) {
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortOrder, setSortOrder] = useState("asc")
  const [sortItem, setSortItem] = useState("title")

  const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID + "/" + tableName}?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`
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
  }, [tableName])

  function addTodo(title) {
    const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}`

    const headers = {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    }

    const data = {
      records: [
        {
          fields: { Title: title },
        },
      ],
    }
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        const newTodo = result.records[0]
        setTodoList([...todoList, newTodo])
        // (Bonus) Re-sort list data
        sortTodoList()
      })
      .catch((error) => console.log(error))
  }

  // function removeTodo(id) {
  //   let filtered = todoList.filter((x) => x.id !== id)
  //   setTodoList(filtered)
  // }

  function removeTodo(id) {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        const filteredTodoList = todoList.filter((todo) => todo.id !== id)
        setTodoList(filteredTodoList)
      })
      .catch((error) => console.log(error))
  }

  function sortTodoList() {
    const sortedTodoList = [...todoList].sort((a, b) => {
      if (sortOrder === "desc") {
        if (sortItem === "title") {
          return a.fields.Title.localeCompare(b.fields.Title)
        } else if (sortItem === "creationDate") {
          return new Date(a.createdTime) - new Date(b.createdTime)
        }
      } else {
        if (sortItem === "title") {
          return b.fields.Title.localeCompare(a.fields.Title)
        } else if (sortItem === "creationDate") {
          return new Date(b.createdTime) - new Date(a.createdTime)
        }
      }
    })
    setTodoList(sortedTodoList)
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  function onSortItemChange(e) {
    setSortItem(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div className="TodoContainer">
        <h1>{tableName}</h1>
        <AddTodoForm onAddTodo={addTodo} />
        {isLoading ? (
          <div className="PreLoadingContainer">
            <FontAwesomeIcon icon={faSpinner} spin /> <p>Loading... </p>
          </div>
        ) : (
          <>
            <TodoHeader sortTodoList={sortTodoList} sortOrder={sortOrder} onSortItemChange={onSortItemChange} sortItem={sortItem} />
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
          </>
        )}
      </div>
    </>
  )
}
TodoContainer.propTypes = {
  tableName: PropTypes.string.isRequired,
}
export default TodoContainer
