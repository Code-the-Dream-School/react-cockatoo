import React from 'react'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import { useState, useEffect} from 'react'

function useSemiPersistentState() {
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) ?? [])

    useEffect(() => { localStorage.setItem('savedTodoList', JSON.stringify(todoList))
    }, [todoList])

    return [todoList, setTodoList]

}

function App() {
    const [todoList, setTodoList] = useSemiPersistentState()

    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo])
    }

    const removeTodo = (id) => {
        console.log("id: " + id)
        const newTodoList = todoList.filter(todo => todo.id !== id)
        console.log(newTodoList)
        setTodoList(newTodoList)
    }

    return (
        <>
            <h1>Todo list</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        </>
    );
}

export default App;