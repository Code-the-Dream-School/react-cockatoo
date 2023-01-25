import React from "react";

const TodoListItem = (props) => {
    return (
        <span>
          <li>{props.todo.title}</li>
        </span>
    )
}


export default TodoListItem;