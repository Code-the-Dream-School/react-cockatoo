import React from "react";

// Move label and input JSX from AddTodoForm.js to InputWithLabel.js
function InputWithLabel({
    todoTitle, 
    handleTitleChange,
    children
    }) {

    return  (
        <>
          <label htmlFor="title"> {children} </label> 
                <input 
                    id="todoTitle" 
                    htmlFor="todoTitle" 
                    value={todoTitle} 
                    onChange={handleTitleChange} 
                    type="type"
                    name="title">
                </input>
        </>
    );
}
 

export default InputWithLabel;