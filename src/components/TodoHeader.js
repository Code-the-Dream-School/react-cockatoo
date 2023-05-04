import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSortAlphaAsc, faSortAlphaDesc } from "@fortawesome/free-solid-svg-icons"

function TodoHeader({ onSortTodoListByTitle, sortOrder }) {
  return (
    <div className="TodoHeader">
      <label className="SortLabel">Sort By </label>
      <select className="SortDropDown">
        <option value="title">Title</option>
        <option value="creationDate">Creation Date</option>
      </select>
      <button className="SortBtn" onClick={onSortTodoListByTitle}>
        {sortOrder === "asc" ? <FontAwesomeIcon icon={faSortAlphaAsc} /> : <FontAwesomeIcon icon={faSortAlphaDesc} />}
      </button>
    </div>
  )
}

export default TodoHeader
