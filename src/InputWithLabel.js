import React, { useEffect, useRef } from "react";
//import style from "./TodoListItem.module.css";

//Create Reusable Input with Label Component

function InputWithLabel(props) {
  //input element is re-focused automatically!!!
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <label htmlFor="todoTitle">{props.children}</label>
      <input
        ref={inputRef}
        id="todoTitle"
        name="title"
        type="text"
        value={props.todoTitle}
        onChange={props.handleTitleChange}
      ></input>
    </>
  );
}

export default InputWithLabel;

// return (
//     <form onSubmit={handleAddTodo}>
//       <InputWithLabel
//         todoTitle={todoTitle}
//         handleTitleChange={handleTitleChange}
//       >
//         Title
//       </InputWithLabel>

//       <button type="submit">Add</button>
//     </form>
//   );
