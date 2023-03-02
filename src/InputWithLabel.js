import React, { useRef, useEffect } from "react"

const InputWithLabel = ({ children, id, inputName, inputValue, handleTitleChange }) => {
  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <>
      <label htmlFor={id}> {children}</label>
      <input type="text" id={id} name={inputName} value={inputValue} onChange={handleTitleChange} ref={inputRef} />
    </>
  )
}

export default InputWithLabel
