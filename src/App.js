import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AskGoogle from "./pages/AskGoogle";
import MyToDoApp from "./pages/MyToDoApp";
import MyNewToDoList from "./pages/MyNewToDoList";
import style from "./TodoListItem.module.css";

function App() {
  return (
    <>
      <div className={style.wrapper}>
        <BrowserRouter>
          <div className={style.navbar}>
            <div className={style.navbar_links}>
              <Link to="/home">Home</Link>
              <Link to="/new">New Todo List</Link>
              <Link to="/google">Google</Link>
            </div>
          </div>
          <Routes>
            <Route path="/home" element={<MyToDoApp />}></Route>
            <Route path="/new" element={<MyNewToDoList />}></Route>
            <Route path="/google" element={<AskGoogle />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
