import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TodoContainer from "./components/TodoContainer"
import style from "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<TodoContainer />} />
        <Route exact path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
