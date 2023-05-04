import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
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

InputWithLabel.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}
export default InputWithLabel
