import React, { useEffect } from "react"
import TodoListItem from "./TodoListItem"
import PropTypes from "prop-types"

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} id={todo.id} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </>
  )
}
TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object),
  onRemoveTodo: PropTypes.func,
}
export default TodoList
