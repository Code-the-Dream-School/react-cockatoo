import React from "react"

function Navbar({ activeMenu, activateTodoMenu }) {
  return (
    <>
      <nav>
        <div className="heading">
          <h4>Todo App</h4>
        </div>
        <ul className="nav-links">
          <li className={activeMenu === "home" ? "active" : ""}>
            <a href="/">Home</a>
          </li>

          <li className={activeMenu === "todo" ? "active" : ""}>
            <a href="/todo" onClick={activateTodoMenu}>
              Todo
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
