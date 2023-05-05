import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TodoContainer from "./components/TodoContainer"
import style from "./App.css"
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/todo" element={<TodoContainer tableName="Default" />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
