// import React, { useRef, useEffect } from "react"
// import PropTypes from "prop-types"
// const InputWithLabel = ({ children, id, inputName, inputValue, handleTitleChange, placeholder }) => {
//   const inputRef = useRef()
//   useEffect(() => {
//     inputRef.current.focus()
//   })

//   return (
//     <>
//       <input type="text" id={id} name={inputName} value={inputValue} onChange={handleTitleChange} ref={inputRef} className="TodoInput" placeholder={placeholder} autoComplete="off" />
//     </>
//   )
// }

// InputWithLabel.propTypes = {
//   children: PropTypes.node,
//   id: PropTypes.string.isRequired,
//   inputName: PropTypes.string.isRequired,
//   inputValue: PropTypes.string.isRequired,
//   handleTitleChange: PropTypes.func.isRequired,
//   placeholder: PropTypes.string.isRequired,
// }
// export default InputWithLabel

import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <>
      {/* <label htmlFor="todoTitle">{children}</label> */}
      <input type="text" id="todoTitle" name="todoTitle" value={todoTitle} onChange={handleTitleChange} ref={inputRef} className="TodoInput" placeholder="New Todo Title" autoComplete="off" />
    </>
  )
}

InputWithLabel.propTypes = {
  handleTitleChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default InputWithLabel
