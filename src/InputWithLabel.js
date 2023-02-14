import React from 'react'
import AddTodoForm from './AddTodoForm';

const InputWithLabel = (todoTitle, handleTitleChange, children) => {
  const inputRef = React.useRef();
  React.useEffect(() => {
      inputRef.current.focus(); 
  }, [])
  return (
    <AddTodoForm>
    <label htmlFor="todoTitle">{children}</label>
    <input 
    id="todoTitle" 
    type="text" 
    name="title" 
    value={todoTitle}
    onChange={handleTitleChange}
    ref={inputRef}
    />
    </AddTodoForm>
    
  )
}


export default InputWithLabel;