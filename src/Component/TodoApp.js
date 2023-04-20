import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { FiArrowRight } from "react-icons/fi";
import LoadIcon from "./LoadIcon";
import  style from './TodoApp.module.css';

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`;
// const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?sort[0][filed]=Title&sort[0][direction]=asc`;

function TodoApp() {
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

      .then((response) => {
        // console.log(response.records);
        setTodoList(response.records);
        setIsLoading(false);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [isLoading, todoList]);

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  return (
    //update from <div> element  to fragment <></>
    <>
      <header>
        <h1 className={style.header}>Todo List</h1>
      </header>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading && <LoadIcon />}
      <TodoList onRemoveTodo={removeTodo} todos={todoList} />
      <br />
      <button>
        <Link className={style.links} to={"/new"}>
          New <FiArrowRight />
        </Link>
      </button>
    </>
  );
}

export default TodoApp;
