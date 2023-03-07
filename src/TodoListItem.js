import React from "react";

const TodoListItem = ({todo, onRemoveTodo, id}) => {
    return (
        <>

          <li>{todo.Title || todo.fields.Title}</li>
          <button type="button" onClick={()=> onRemoveTodo(id)}>Remove</button>
          
          </>
    )
}


export default TodoListItem;