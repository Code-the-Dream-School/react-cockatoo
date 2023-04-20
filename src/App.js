import { React, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import AskGoogle from ".//pages/AskGoogle";
import TodoContainer from "./components/TodoContainer";
import MyNewToDoList from ".//pages/MyNewToDoList";
import Toggle from ".//components/Toggle.js";

import style from "./components/TodoListItem.module.css";

const tableName = "Grocery";
// const arrayTableNames = tableNames.map((tableName) => <div>{tableName}</div>);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <div className={style.wrapper}>
        <BrowserRouter>
          <div className={style.navbar}>
            <div className={style.navbar_links}>
              <Link to="/home">{tableName}</Link>
              <Link to="/grocery">{tableName}</Link>
              <Link to="/work">{tableName}</Link>
            </div>
            <Toggle onSwitch={setIsDarkMode} />
          </div>

          <Routes>
            <Route
              path="/home"
              element={
                <TodoContainer tableName={tableName} isDarkMode={isDarkMode} />
              }
            ></Route>
            <Route
              path="/grocery"
              element={
                <TodoContainer tableName={tableName} isDarkMode={isDarkMode} />
              }
            ></Route>
            <Route
              path="/work"
              element={
                <TodoContainer tableName={tableName} isDarkMode={isDarkMode} />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
