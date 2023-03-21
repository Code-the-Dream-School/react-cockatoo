import React from 'react';
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import { useState, useEffect } from 'react'

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;

function TodoApp() {
    const [todoList, setTodoList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                "Content-Type": 'application/json'
            }
        }
        fetch(url, options)
        .then((response) => response.json())
        .then((result) => {
            setTodoList(result.records)
            setIsLoading(false)
        })
        .catch((error) => console.warn(error));
    }, []);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem("savedTodoList", JSON.stringify(todoList))
        }        
    }, [todoList, isLoading]);

    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo])
    }

    const removeTodo = (id) => {
        const newTodoList = todoList.filter(todo => todo.id !== id)
        setTodoList(newTodoList)
    }

    return (
        <>
            <h1>Todo list</h1>
            <AddTodoForm onAddTodo={addTodo} />
            {isLoading ? <p>"Work in progress..."</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
        </>
    );
}

export default TodoApp;