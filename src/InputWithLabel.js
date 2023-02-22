import React from "react";

function InputWithLabel ({todoTitle, handleTitleChange, isFocused, children}) {

    const inputRef = React.useRef();

    React.useEffect(() => {
        if(isFocused){
            inputRef.current.focus();
        }
    })

    return (
        <>
            <label htmlFor="title"> {children} </label>
                <input 
                    ref = {inputRef}
                    type="text" 
                    id="todoTitle"
                    name="title"
                    value = {todoTitle}
                    onChange = {handleTitleChange}/>
         </>
    );
};

export default InputWithLabel;