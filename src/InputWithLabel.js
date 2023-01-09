import React, { useEffect, useRef } from "react";

function InputWithLabel(props){
  const {children, todoTitle, handleTitleChange} = props;
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <>
      <label htmlFor="todoTitle">{children}: </label>
      <input type="text" name="title" value={todoTitle} onChange={(event) => handleTitleChange(event)} ref={inputRef} />
    </>
  )
}

export default InputWithLabel;