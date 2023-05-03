import React, { useRef, useEffect } from "react"

const InputWithLabel = ({ children, id, inputName, inputValue, handleTitleChange, placeholder }) => {
  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <>
      <input type="text" id={id} name={inputName} value={inputValue} onChange={handleTitleChange} ref={inputRef} className="TodoInput" placeholder={placeholder} />
    </>
  )
}

export default InputWithLabel
