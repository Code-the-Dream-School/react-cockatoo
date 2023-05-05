import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSortAlphaAsc, faSortAlphaDesc } from "@fortawesome/free-solid-svg-icons"

function TodoHeader({ sortTodoList, sortOrder, onSortItemChange }) {
  return (
    <div className="TodoHeader">
      <label className="SortLabel">Sort By </label>
      <select className="SortDropDown" onChange={onSortItemChange}>
        <option value="title">Title</option>
        <option value="creationDate">Creation Date</option>
      </select>
      <button className="SortBtn" onClick={sortTodoList}>
        {sortOrder === "asc" ? <FontAwesomeIcon icon={faSortAlphaAsc} /> : <FontAwesomeIcon icon={faSortAlphaDesc} />}
      </button>
    </div>
  )
}

export default TodoHeader
