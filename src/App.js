import React from 'react'
import TodoApp from './TodoApp'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<TodoApp/>}></Route>
                <Route
                    path="/new"
                    element={<Link to={"/"}>back home</Link>}
                    exact
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;