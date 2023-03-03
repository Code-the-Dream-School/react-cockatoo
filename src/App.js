import React from 'react'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import { useState, useEffect} from 'react'

function App() {
    const [todoList, setTodoList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: {
                        todoList: JSON.parse(localStorage.getItem('savedTodoList')),
                    }}
                )}, 2000)
        })
        .then((result) => {
            setTodoList(result.data.todoList)
            setIsLoading(false)
        })
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

export default App;