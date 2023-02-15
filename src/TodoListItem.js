import React from "react";

const TodoListItem = ({title, onRemoveTodo, id}) => {
    return (
        <>

          <li>{title}</li>
          <button type="button" onClick={()=> onRemoveTodo(id)}>Remove</button>
          
          </>
    )
}


export default TodoListItem;