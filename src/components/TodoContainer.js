import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import style from "./TodoListItem.module.css";
import Greeting from "./Greeting";
import PropTypes from "prop-types";

// create custom hook
// function useSemiPersistentState() {
//   // Create new state variable named todoTitle with setter setTodoTitle
//   const [todoList, setTodoList] = React.useState(
//     JSON.parse(localStorage.getItem("savedTodoList")) || []
//   );

//   // Define a useEffect React hook with todoList as a dependency
//   // Inside the side-effect handler function, save the todoList inside localStorage with the key "savedTodoList"
//   // convert todoList to a string before saving in localStorage
//   React.useEffect(() => {
//     localStorage.setItem("savedTodoList", JSON.stringify(todoList));
//   }, [todoList]);

//   return [todoList, setTodoList];

// }

// const API_ENDPOINT = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/{props.tableName}/`;

function TodoContainer(props) {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_ENDPOINT = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${props.tableName}/`;

  useEffect(() => {
    fetch(`${API_ENDPOINT}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    })
      .then((response) => response.json())

      .then((result) => {
        setTodoList(result.records);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [API_ENDPOINT]);

  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  // const [todoList, setTodoList] = useSemiPersistentState("");
  // const [newTodo, setNewTodo] = React.useState("");
  // react.useEffect(() => {});

  // Remove the newTodo state variable and the corresponding JSX that displays it

  // const [newTodo, setNewTodo] = React.useState("");
  //   Inside the App functional component, above the return statement, create a new state variable named newTodo with update function named setNewTodo
  // hint: useState hook

  // Declare a new function named addTodo that takes newTodo as a parameter
  //  Call the setTodoList state setter and use the spread operator to pass the existing Objects in the todoList Array along with the newTodo Object
  const addTodo = (newTodo) => {
    setIsLoading(true);
    fetch(`${API_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Title: newTodo.title,
            },
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("success:", result);
        setTodoList([...todoList, result.records[0]]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("error:", error);
        setIsLoading(false);
      });
  };

  //Delete items

  const removeTodo = (id) => {
    if (!isLoading) {
      const newTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(newTodoList);
      fetch(`${API_ENDPOINT}${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      })
        .then((response) => response.json())

        .then((result) => {
          console.log("success:", result);
        })
        .catch((error) => console.error("error:", error));
    }
  };

  return (
    <div
      className={`${style.mainContainer} ${
        props.isDarkMode ? style["dark-theme"] : style["light-theme"]
      }`}
    >
      <div className={style.todoInput}>
        <div className={style.greeting}>
          <Greeting />
        </div>
        <h1>Todo List</h1>

        <AddTodoForm onAddTodo={addTodo} />
        {/* Pass setNewTodo as a callback handler prop named onAddTodo to the AddTodoForm component */}

        {/* Pass todoList state as a prop named todoList to the TodoList component */}
      </div>
      <div className={style.todoListWithBtn}>
        {isLoading === true ? (
          <p>Loading...</p>
        ) : todoList.length === 0 ? (
          <p>Nothing todo</p>
        ) : (
          <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
        )}
      </div>
    </div>
  );
}

TodoContainer.propTypes = {
  isDarkMode: PropTypes.bool,
};

export default TodoContainer;
