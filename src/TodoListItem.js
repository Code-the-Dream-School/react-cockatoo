import React from "react";

const TodoListItem = (props) => {
    return (

          <li>{props.id}
          {props.title}
          <button type="button" onClick={()=> props.onRemoveTodo(props.item.id)}>Remove</button>
          </li>
    
    )
}


export default TodoListItem;