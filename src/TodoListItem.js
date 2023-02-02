import React from "react";

const TodoListItem = (props) => {
    return (

          <li>{props.id}
          {props.title}
          </li>
    
    )
}


export default TodoListItem;